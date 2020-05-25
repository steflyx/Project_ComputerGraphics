//Parameters for Camera
var cx = 3.0;
var cy = 3.0;
var cz = 2.5;
var elevation = 0.0;
var angle = 90.0;
var lookRadius = 10.0;

//parameters of pieces of the tangram
var nb_triangles = 5;
var nb_parallepipedes = 2 ;
var nb_objects = nb_parallepipedes+nb_triangles;


var canvas = document.getElementById("my-canvas");
var gl = canvas.getContext("webgl2");


//VERTEX SHADER
var vs = `#version 300 es

in vec3 inPosition;
in vec3 inNormal;
out vec3 fsNormal;

uniform mat4 matrix; 
uniform mat4 nMatrix;     //matrix to transform normals

void main() {
  fsNormal = mat3(nMatrix) * inNormal; 
  gl_Position = matrix * vec4(inPosition, 1.0);
}`;

//FRAGMENT SHADER
var fs = `#version 300 es

precision mediump float;

in vec3 fsNormal;
out vec4 outColor;

uniform vec3 mDiffColor; //material diffuse color 
uniform vec3 lightDirection; // directional light direction vec
uniform vec3 lightColor; //directional light color 

void main() {

  vec3 nNormal = normalize(fsNormal);
  vec3 lambertColor = mDiffColor * lightColor * dot(-lightDirection,nNormal);
  outColor = vec4(clamp(lambertColor, 0.0, 1.0),1.0);
}`;


//PIKING VERTEX SHADER
var piking_vs = `#version 300 es
    in vec3 inPosition;
   
    uniform mat4 matrix; 

void main() {
  gl_Position = matrix * vec4(inPosition, 1.0);
}`;

//PIKING FRANGMENT SHADER
var piking_fs = `#version 300 es
precision mediump float;

 uniform vec4 u_id;
 out vec4 outColor;

void main() {
  outColor = u_id ;
}`;

var mouseState = false;
var pieceSelected = -1;
var lastMouseX = -100, lastMouseY = -100;
var id=0;

//When you click on a piece, that piece is selected and can be moved
//Otherwise, you can use the mouse to move the scene
function doMouseDown(event) {
  lastMouseX = event.pageX;
  lastMouseY = event.pageY;
  mouseState = true;
    console.log(id)
  //window.alert("If clicked on piece, pieceSelected = numPiece");
}
function doMouseUp(event) {
  lastMouseX = -100;
  lastMouseY = -100;
  mouseState = false;
}

function doMouseMove(event) {
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
 /*if(mouseState) {
    var dx = event.pageX - lastMouseX;
    var dy = lastMouseY - event.pageY;
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
    
    //Only allow a partial rotation
    if((dx != 0) || (dy != 0)) {
      newAngle = angle + 0.5 * dx;
      if(newAngle >= -135.0 && newAngle <= -45.0){
        angle = newAngle;
      }
      newElevation = elevation + 0.5 * dy;
      if(newElevation <= 0.0 && newElevation >= -90.0){
        elevation = newElevation;
      }
    }
  }*/
 
    
}

//Zoom in when mouse wheel is used
function doMouseWheel(event) {
  var nLookRadius = lookRadius + event.wheelDelta/200.0;
  if((nLookRadius > 2.0) && (nLookRadius < 100.0)) {
    lookRadius = nLookRadius;
  }
}

//Resizes the canvas
function doResize() {
    // set canvas dimensions
  var canvas = document.getElementById("my-canvas");
  if((window.innerWidth > 40) && (window.innerHeight > 220)) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
  }
}

//Changes shape
var keyFunction =function(e) {
  if (e.keyCode == 32) {  // Space
    window.alert("Change shape!");
  } 
}
window.addEventListener("keyup", keyFunction, false);

function ColorToId(color){
    tmp_array = [color[0]/255,color[1]/255,color[2]/255,color[3]/255]
    //console.log(tmp_array == [1.0,0.0,0.0,1.0])
    id = picking_colors.findIndex(x => x == tmp_array)
    return id
}

function main() {

  //UTILITIES
  var program = null;

  var cubeNormalMatrix;
  var cubeWorldMatrix = new Array(); //Define world matrice for each piece of the tangram
  var cubeMaterialColor = new Array(); //Define material color for each piece
  var piecesIdentifiers= new Array();  //Define an id for each piece
    for (var i=0; i< nb_objects; i++){
        cubeWorldMatrix[i] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
        cubeMaterialColor[i]= pieceColors[i];
        piecesIdentifiers[i]=[
            ((i+1 & 0x000000FF) >>  0)/255.0,
            ((i+1 & 0x0000FF00) >>  8)/255.0,
            ((i+1 & 0x00FF0000) >> 16)/255.0,
            1.0,
        ];        

    }
  console.log(piecesIdentifiers)

  //define directional light
  var dirLightAlpha = -utils.degToRad(9);
  var dirLightBeta  = -utils.degToRad(90);
  var directionalLight = [Math.cos(dirLightAlpha) * Math.cos(dirLightBeta),
              Math.sin(dirLightAlpha),
              Math.cos(dirLightAlpha) * Math.sin(dirLightBeta)
              ];
  var directionalLightColor = [0.1, 1.0, 1.0];


  //For the animation
  var lastUpdateTime = (new Date).getTime();

  var cubeRx = 0.0;
  var cubeRy = 0.0;
  var cubeRz = 0.0;

  //GL
  //Retrieve canvas and GL
  //Add events listener
  canvas.addEventListener("mousedown", doMouseDown, false);
  canvas.addEventListener("mouseup", doMouseUp, false);
  canvas.addEventListener("mousemove", doMouseMove, false);
  canvas.addEventListener("mousewheel", doMouseWheel, false);
  window.onresize = doResize;

  
  if (!gl) {
    document.write("GL context not opened");
    return;
  }
  utils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  //gl.clearColor(0.85, 0.85, 0.85, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  // 3d program definition  ******************************************
  var vertexShader = utils.createShader(gl, gl.VERTEX_SHADER, vs);
  var fragmentShader = utils.createShader(gl, gl.FRAGMENT_SHADER, fs);
  var program = utils.createProgram(gl, vertexShader, fragmentShader);
    
  var positionAttributeLocation = gl.getAttribLocation(program, "inPosition");  
  var normalAttributeLocation = gl.getAttribLocation(program, "inNormal");  
  var matrixLocation = gl.getUniformLocation(program, "matrix");
  var materialDiffColorHandle = gl.getUniformLocation(program, 'mDiffColor');
  var lightDirectionHandle = gl.getUniformLocation(program, 'lightDirection');
  var lightColorHandle = gl.getUniformLocation(program, 'lightColor');
  var normalMatrixPositionHandle = gl.getUniformLocation(program, 'nMatrix');  
  //  ***************************************************************

  //FOR THE PICKING PROGRAM ******************************************
  var vertexShader_Picking = utils.createShader(gl, gl.VERTEX_SHADER, piking_vs);
  var fragmentShader_Picking = utils.createShader(gl, gl.FRAGMENT_SHADER, piking_fs);
  var program_Picking = utils.createProgram(gl, vertexShader_Picking, fragmentShader_Picking);
    
  var Piking_positionAttributeLocation = gl.getAttribLocation(program_Picking, "inPosition");  
  var Piking_matrixLocation = gl.getUniformLocation(program_Picking, "matrix");
  var Piking_colorLocation = gl.getUniformLocation(program_Picking, "u_id");
  //******************************************************************
  
  //gl.useProgram(program);
   
    /*This function draw the objects with a unifomr color if pick=true and with the nice colors otherwise*/
   function drawObjects(pick) {
       if (!pick){
              gl.bindVertexArray(vao);
              var positionBuffer = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
              gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
              gl.enableVertexAttribArray(positionAttributeLocation);
              gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

              var normalBuffer = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
              gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
              gl.enableVertexAttribArray(normalAttributeLocation);
              gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0);

              var indexBuffer = gl.createBuffer();
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
              gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW); 
           
              gl.useProgram(program);
           
               //For each piece
                var nb_indices_triangle=24;
                for (var i=0;i< nb_triangles;i++){
                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i]);
                    var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
                    gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
                    gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

                    gl.uniform3fv(materialDiffColorHandle, cubeMaterialColor[i]);
                    gl.uniform3fv(lightColorHandle,  directionalLightColor);
                    gl.uniform3fv(lightDirectionHandle,  directionalLight);

                    gl.bindVertexArray(vao);
                    gl.drawElements(gl.TRIANGLES,nb_indices_triangle, gl.UNSIGNED_SHORT, i*2*nb_indices_triangle);
                }

                var nb_indices_parall=36;
                for (var i=0; i < nb_parallepipedes;i++){

                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i+nb_triangles]);
                    var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
                    gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
                     gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

                    gl.uniform3fv(materialDiffColorHandle, cubeMaterialColor[i+nb_triangles]);
                    gl.uniform3fv(lightColorHandle,  directionalLightColor);
                    gl.uniform3fv(lightDirectionHandle,  directionalLight);

                    gl.bindVertexArray(vao);
                    gl.drawElements(gl.TRIANGLES,nb_indices_parall, gl.UNSIGNED_SHORT, (nb_indices_triangle*nb_triangles+i*nb_indices_parall)*2);
                }
       }
       else {
              var positionBuffer = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
              gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
              gl.enableVertexAttribArray(Piking_positionAttributeLocation);
              gl.vertexAttribPointer(Piking_positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
                    
              var indexBuffer = gl.createBuffer();
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
              gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW); 
           
              gl.useProgram(program_Picking);
           
               //For each piece
                var nb_indices_triangle=24;
                for (var i=0;i< nb_triangles;i++){
                    gl.uniform4fv(Piking_colorLocation, piecesIdentifiers[i]); 
                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i]);
                    var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
                    
                    gl.uniformMatrix4fv(Piking_matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    gl.drawElements(gl.TRIANGLES,nb_indices_triangle, gl.UNSIGNED_SHORT, i*2*nb_indices_triangle);
                }
                var nb_indices_parall=36;
                for (var i=0;i< nb_parallepipedes;i++){
                    gl.uniform4fv(Piking_colorLocation, piecesIdentifiers[i+nb_triangles]); 
                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i+nb_triangles]);
                    var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
                    
                    gl.uniformMatrix4fv(Piking_matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    gl.drawElements(gl.TRIANGLES,nb_indices_parall, gl.UNSIGNED_SHORT, (nb_indices_triangle*nb_triangles+i*nb_indices_parall)*2);
                }
       }
  }  
    
  var perspectiveMatrix = utils.MakePerspective(90, gl.canvas.width/gl.canvas.height, 0.1, 100.0);
  var viewMatrix = utils.MakeView(3.0, 3.0, 2.5, -45.0, -40.0);
    
  //Bind vertices, normals and indexes to gl
  var vao = gl.createVertexArray();


    
  //Draw everything
  drawScene();

  //Animate the scene
  function animate(){
    var currentTime = (new Date).getTime();

    //Modify the scene's attributes
    if(lastUpdateTime){
      var deltaC = (30 * (currentTime - lastUpdateTime)) / 1000.0;

      
    }

    //Apply the modifications
    lastUpdateTime = currentTime;  

		
  }

  //Draw everything
  function drawScene() {
    //animate();

    //Clear the scene
	//gl.clearColor(0.85, 0.85, 0.85, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //Update perspective matrix (in case canvas size has changed)
    perspectiveMatrix = utils.MakePerspective(90, canvas.width / canvas.height, 0.1, 100.0)

    // update WV matrix
    var rotationX = utils.MakeRotateXMatrix(elevation);
    var rotationY = utils.MakeRotateYMatrix(angle);
    var cameraMatrix= utils.multiplyMatrices(rotationX,rotationY);
    cameraMatrix = utils.multiplyMatrices(cameraMatrix,utils.MakeTranslateMatrix(0, 0, lookRadius));
    viewMatrix = utils.invertMatrix(cameraMatrix);

   /* //For each piece
	var nb_indices_triangle=24;
	for (var i=0;i< nb_triangles;i++){
		var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i]);
		var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
		gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

		var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
		gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

		gl.uniform3fv(materialDiffColorHandle, cubeMaterialColor[i]);
		gl.uniform3fv(lightColorHandle,  directionalLightColor);
		gl.uniform3fv(lightDirectionHandle,  directionalLight);

		gl.bindVertexArray(vao);
		gl.drawElements(gl.TRIANGLES,nb_indices_triangle, gl.UNSIGNED_SHORT, i*2*nb_indices_triangle);
	}
	
	var nb_indices_parall=36;
	for (var i=0; i < nb_parallepipedes;i++){
		
		var worldViewMatrix = utils.multiplyMatrices(viewMatrix, cubeWorldMatrix[i+nb_triangles]);
		var projectionMatrix = utils.multiplyMatrices(perspectiveMatrix, worldViewMatrix);
		gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));

		var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
		 gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

		gl.uniform3fv(materialDiffColorHandle, cubeMaterialColor[i+nb_triangles]);
		gl.uniform3fv(lightColorHandle,  directionalLightColor);
		gl.uniform3fv(lightDirectionHandle,  directionalLight);

		gl.bindVertexArray(vao);
		gl.drawElements(gl.TRIANGLES,nb_indices_parall, gl.UNSIGNED_SHORT, (nb_indices_triangle*nb_triangles+i*nb_indices_parall)*2);
	}*/
      
       drawObjects(true)
      
       // ------ Figure out what pixel is under the mouse and read it

    const pixelX = lastMouseX * gl.canvas.width / gl.canvas.clientWidth;
    const pixelY = gl.canvas.height - lastMouseY * gl.canvas.height / gl.canvas.clientHeight - 1;
    const data = new Uint8Array(4);
    gl.readPixels(
        pixelX,            // x
        pixelY,            // y
        1,                 // width
        1,                 // height
        gl.RGBA,           // format
        gl.UNSIGNED_BYTE,  // type
        data);             // typed array to hold result
      id=data[0] + data[1] * 256 +data[2] * 256*256;
     

	 // ------ Draw the objects to the canvas
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      drawObjects(false)
	 
    window.requestAnimationFrame(drawScene);

  }

}

main();

