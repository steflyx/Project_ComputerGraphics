//Parameters for Camera
var cx = 3.0;
var cy = 3.0;
var cz = 2.5;
var elevation = 0.0;
var angle = 90.0;

var lookRadius = 10.0;

var canvas = document.getElementById("my-canvas");
var gl = canvas.getContext("webgl2");

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




var mouseState = false;
var pieceSelected = -1;
var lastMouseX = -100, lastMouseY = -100;

//When you click on a piece, that piece is selected and can be moved
//Otherwise, you can use the mouse to move the scene
function doMouseDown(event) {
  lastMouseX = event.pageX;
  lastMouseY = event.pageY;
  mouseState = true;
  //window.alert("If clicked on piece, pieceSelected = numPiece");
}
function doMouseUp(event) {
  lastMouseX = -100;
  lastMouseY = -100;
  mouseState = false;
}
function doMouseMove(event) {
  if(mouseState) {
    var dx = event.pageX - lastMouseX;
    var dy = lastMouseY - event.pageY;
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
    
    //Only allow a partial rotation
    if((dx != 0) || (dy != 0)) {
      newAngle = angle + 0.5 * dx;
      if(newAngle >= -90.0 && newAngle <= 90.0){
        angle = newAngle;
      }
      newElevation = elevation + 0.5 * dy;
      if(newElevation <= 0.0 && newElevation >= -90.0){
        elevation = newElevation;
      }
    }
  }
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


function main() {

  //UTILITIES
  var program = null;

  var cubeNormalMatrix;
  var cubeWorldMatrix = new Array();    
  //One world matrix for each piece
  cubeWorldMatrix[0] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[1] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[2] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[3] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[4] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[5] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);
  cubeWorldMatrix[6] = utils.MakeWorld( 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.5);


  //define directional light
  var dirLightAlpha = -utils.degToRad(9);
  var dirLightBeta  = -utils.degToRad(90);

  var directionalLight = [Math.cos(dirLightAlpha) * Math.cos(dirLightBeta),
              Math.sin(dirLightAlpha),
              Math.cos(dirLightAlpha) * Math.sin(dirLightBeta)
              ];
  var directionalLightColor = [0.1, 1.0, 1.0];

  //Define material color
  var cubeMaterialColor = new Array();  
  cubeMaterialColor[0]= pieceColors[0];
  cubeMaterialColor[1]= pieceColors[1];
  cubeMaterialColor[2]= pieceColors[2];
  cubeMaterialColor[3]= pieceColors[3];
  cubeMaterialColor[4]= pieceColors[4];
  cubeMaterialColor[5]= pieceColors[5];
  cubeMaterialColor[6]= pieceColors[6];

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
  gl.clearColor(0.85, 0.85, 0.85, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  var vertexShader = utils.createShader(gl, gl.VERTEX_SHADER, vs);
  var fragmentShader = utils.createShader(gl, gl.FRAGMENT_SHADER, fs);
  var program = utils.createProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(program);

  var positionAttributeLocation = gl.getAttribLocation(program, "inPosition");  
  var normalAttributeLocation = gl.getAttribLocation(program, "inNormal");  
  var matrixLocation = gl.getUniformLocation(program, "matrix");
  var materialDiffColorHandle = gl.getUniformLocation(program, 'mDiffColor');
  var lightDirectionHandle = gl.getUniformLocation(program, 'lightDirection');
  var lightColorHandle = gl.getUniformLocation(program, 'lightColor');
  var normalMatrixPositionHandle = gl.getUniformLocation(program, 'nMatrix');;
  
  var perspectiveMatrix = utils.MakePerspective(90, gl.canvas.width/gl.canvas.height, 0.1, 100.0);
  var viewMatrix = utils.MakeView(3.0, 3.0, 2.5, -45.0, -40.0);
    
  //Bind vertices, normals and indexes to gl
  var vao = gl.createVertexArray();

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
  
  console.log(indices.length)
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
	gl.clearColor(0.85, 0.85, 0.85, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //Update perspective matrix (in case canvas size has changed)
    perspectiveMatrix = utils.MakePerspective(90, canvas.width / canvas.height, 0.1, 100.0)

    // update WV matrix
    var rotationX = utils.MakeRotateXMatrix(elevation);
    var rotationY = utils.MakeRotateYMatrix(angle);
    var cameraMatrix= utils.multiplyMatrices(rotationX,rotationY);
    cameraMatrix = utils.multiplyMatrices(cameraMatrix,utils.MakeTranslateMatrix(0, 0, lookRadius));
    viewMatrix = utils.invertMatrix(cameraMatrix);

    //For each piece
	var nb_triangles=5;
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
	
	var nb_parallepipedes=2;
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
	
	
      /*if (i < 3) gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeWorldMatrix[i]));
      else gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));*/
	 
	 
    window.requestAnimationFrame(drawScene);
  }

}

main();

