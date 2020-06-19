//Parameters for Camera
var cx = 3.0;
var cy = 3.0;
var cz = 2.5;
var elevation = 0.0;
var angle = 90.0;
var lookRadius = 10.0;


//Parameter for Camera for the task 
var angle_task = 90.0;
var lookRadius_task = 7.0;
var elevation_task = 0.0;

//parameters of pieces of the tangram
var nb_triangles = 5;
var nb_parallepipedes = 2 ;
var nb_objects = nb_parallepipedes+nb_triangles;

var canvas_container = document.getElementById("div-canvas");
var canvas = document.getElementById("my-canvas");
var gl = canvas.getContext("webgl2");

var canvas_container_task = document.getElementById("div-task");
var canvas_task = document.getElementById("my-canvas_task");
var gl_task = canvas_task.getContext("webgl2");

var imageIndex=0;

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
var rightArrow = false;
var leftArrow = false;
var upArrow = false;
var downArrow = false;
var leftRotate = false;
var rightRotate = false;
var last_id = 0;
var xsymmetry = false;
var ysymmetry = false;
var moveTask =false;
var giveUp = false;
var change_Task=false;


//When you click on a piece, that piece is selected and can be moved
//Otherwise, you can use the mouse to move the scene
function doMouseDown(event) {
  lastMouseX = event.pageX;
  lastMouseY = event.pageY;
  mouseState = true;
  console.log(id)
  last_id = id;
}
function doMouseUp(event) {
  mouseState = false;
}

function doMouseMove(event) {
    if (!moveTask){
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;  
    }
    else {
        if(mouseState) {
            console.log("doMouseMove");
            var dx = event.pageX - lastMouseX;
            var dy = lastMouseY - event.pageY;
            lastMouseX = event.pageX;
            lastMouseY = event.pageY;

            if((dx != 0) || (dy != 0)) {
                angle_task = angle_task + 0.5 * dx;
                elevation_task = elevation_task + 0.5 * dy;
            }
	   }
    }
}

function doMouseMoveTask(event){
  if (mouseState && moveTask){
    console.log("doMouseMove");
    var dx = event.pageX - lastMouseX;
    var dy = lastMouseY - event.pageY;
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;

    if((dx != 0) || (dy != 0)) {
      angle_task = angle_task + 0.5 * dx;
      elevation_task = elevation_task + 0.5 * dy;
    }

  }
}

//Zoom in when mouse wheel is used
function doMouseWheel(event) {
 if (!moveTask){
     var nLookRadius = lookRadius + event.wheelDelta/200.0;
     if((nLookRadius > 2.0) && (nLookRadius < 100.0)) {
        lookRadius = nLookRadius;
    }
 }
    else {
     var nLookRadius_task = lookRadius_task + event.wheelDelta/200.0;
     if((nLookRadius_task > 2.0) && (nLookRadius_task < 100.0)) {
        lookRadius_task = nLookRadius_task
    }
 }
 
}

//Resizes the canvas
function doResize() {
    // set canvas dimensions
  utils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    //set task dimensions
  utils.resizeCanvasToDisplaySize(gl_task.canvas);
  gl_task.viewport(0, 0, gl_task.canvas.width, gl_task.canvas.height);
}



//Changes shape
var keyFunctionUp =function(e) {
  if (e.keyCode == 32) {  // Space
      imageIndex=(imageIndex+1)%6;
       change_Task=true;
  } 
  if (e.keyCode == 13) {  // Enter
     console.log("enter");
      window.alert(checkForm())
      console.log(checkForm());
  } 
  if (e.keyCode == 8) {  //Delete
    console.log("Del");
    giveUp = true;
  }
  if (e.keyCode == 39) {
    rightArrow = false;
  }
  if (e.keyCode == 37){
    leftArrow = false;
  }
  if (e.keyCode == 38){
    upArrow = false;
  }
  if (e.keyCode == 40){
    downArrow = false;
  }
  if (e.keyCode == 65){ //a
    leftRotate = false;
  }
  if (e.keyCode == 68){ //d
    rightRotate = false;
  }
  if (e.keyCode == 83){//s
    xsymmetry = false;
  }
  if (e.keyCode == 82){//r
    ysymmetry = false;
  }
  if (e.keyCode == 16){//SHIFT
    moveTask = false;
    angle_task = 90;
	elevation_task = 0;
  }
}
window.addEventListener("keyup", keyFunctionUp, false);

var keyFunctionDown = function(e) {
  if (e.keyCode == 39){
    rightArrow = true;
  }
  if (e.keyCode == 37){
    leftArrow = true;
  }
  if (e.keyCode == 38){
    upArrow = true;
  }
  if (e.keyCode == 40){
    downArrow = true;
  }
  if (e.keyCode == 65){//a
    leftRotate = true;
  }
  if (e.keyCode == 68){//d
    rightRotate = true;
  }
  if (e.keyCode == 83){//s
    xsymmetry = true;
  }
  if (e.keyCode == 82){//r
    ysymmetry = true;
  }
    if (e.keyCode == 16){//SHIFT
    moveTask = true;
  }
}
window.addEventListener("keydown", keyFunctionDown, false);

/**
this function create the right initial position vector for each piece of the tangram
**/
function worldMatrixParams(pieceIndex){
    var tmp_matrice = new Array(); 
    switch (pieceIndex){
          //big triangle 1
    case 0:
        tmp_matrice= [ 0.0, 0.0,-square_size/3-space_between_pieces, 0.0, -90.0, 0.0, 1.0];
        break;
    	
	//big triangle 2
     case 1:
        tmp_matrice= [0.0,square_size/3+space_between_pieces, 0.0, 0.0, 0.0, 0.0, 1.0];
        break;
	
	//small triangle 1
     case 2:
        tmp_matrice= [0.0,-square_size/4-square_size/6-space_between_pieces, -square_size/4 -space_between_pieces , 0.0, 180, 0.0, 1.0];
        break;
	
	//medium triangle 1
     case 3:
        tmp_matrice= [0.0, -square_size/3-space_between_pieces,  square_size/3 +space_between_pieces, 0.0, -45, 0.0,1.0];
        break;
    
	//small triangle 2
     case 4:
        tmp_matrice= [0.0, 0.0, square_size/6 +space_between_pieces, 0.0, 90.0, 0.0, 1.0];
        break;
								
	//Square
     case 5:
        tmp_matrice= [0.0,  -square_size/4-space_between_pieces, 0.0, 0.0, 0.0, 0.0, 1.0];
        break;
				
	//parallelepiped
      case 6:
        tmp_matrice= [0.0,square_size/8 +space_between_pieces, 3*square_size/8 +2*space_between_pieces, 0.0, 90.0, 0.0, 1.0];
           
        break;   
    }
    return tmp_matrice;
}


function main() {

  //UTILITIES
  var program = null;

  var cubeNormalMatrix;
  var cubeWorldMatrix = new Array(); //Define world matrice for each piece of the tangram
  var cubeMaterialColor = new Array(); //Define material color for each piece
  var piecesIdentifiers= new Array();  //Define an id for each piece
    
  /***FOR THE TASK ***/
  var taskWorldMatrix = new Array(); //Define world matrice for each piece of the tangram
  var taskMaterialColor = new Array(); //Define material color for each piece
    

    for (var i=0; i< nb_objects; i++){
        cubeWorldMatrix[i] = utils.MakeWorld( worldMatrixParams(i)[0],worldMatrixParams(i)[1],worldMatrixParams(i)[2],worldMatrixParams(i)[3],worldMatrixParams(i)[4],worldMatrixParams(i)[5],worldMatrixParams(i)[6]);
        cubeMaterialColor[i]= pieceColors[i];
        piecesIdentifiers[i]=[
            ((i+1 & 0x000000FF) >>  0)/255.0,
            ((i+1 & 0x0000FF00) >>  8)/255.0,
            ((i+1 & 0x00FF0000) >> 16)/255.0,
            1.0,
        ];  
    }


  //Positions for animations purposes
   positions = new Array();
  for (var i=0; i<nb_objects;i++){
    positions[i] = [worldMatrixParams(i)[0],worldMatrixParams(i)[1],worldMatrixParams(i)[2],worldMatrixParams(i)[4]];
  }

  //Symmetry around x and y
   Rx = new Array();
   Ry = new Array();
  for (var i=0; i<nb_objects;i++){
    Rx[i] = [worldMatrixParams(i)[3]];
    Ry[i] = [worldMatrixParams(i)[5]];
  }


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
  window.addEventListener("mousedown", doMouseDown, false);
  window.addEventListener("mouseup", doMouseUp, false);
  canvas.addEventListener("mousemove", doMouseMove, false);
  window.addEventListener("mousemove", doMouseMoveTask, false);
  window.addEventListener("mousewheel", doMouseWheel, false);
  canvas.width  = canvas_container.innerWidth-16;
  canvas.height = canvas_container.innerHeight-180;
  window.onresize = doResize;  

  
  if (!gl) {
    document.write("GL context not opened");
    return;
  }
  utils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST)

  utils.resizeCanvasToDisplaySize(gl_task.canvas);
  gl_task.viewport(0, 0, gl_task.canvas.width, gl_task.canvas.height);
  gl_task.clear(gl_task.COLOR_BUFFER_BIT | gl_task.DEPTH_BUFFER_BIT);
  gl_task.enable(gl_task.DEPTH_TEST);
 
    
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
    
    
  // FOR THE TASK PROGRAM  ******************************************
  var vertexShader_task = utils.createShader(gl_task, gl_task.VERTEX_SHADER, vs);
  var fragmentShader_task = utils.createShader(gl_task, gl_task.FRAGMENT_SHADER, fs);
  var program_task = utils.createProgram(gl_task, vertexShader_task, fragmentShader_task);
    
  var positionAttributeLocation_task = gl_task.getAttribLocation(program_task, "inPosition");  
  var normalAttributeLocation_task = gl_task.getAttribLocation(program_task, "inNormal");  
  var matrixLocation_task = gl_task.getUniformLocation(program_task, "matrix");
  var materialDiffColorHandle_task = gl_task.getUniformLocation(program_task, 'mDiffColor');
  var lightDirectionHandle_task = gl_task.getUniformLocation(program_task, 'lightDirection');
  var lightColorHandle_task = gl_task.getUniformLocation(program_task, 'lightColor');
  var normalMatrixPositionHandle_task = gl_task.getUniformLocation(program_task, 'nMatrix');  
  //  ***************************************************************
  
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
                    if (i==last_id-1){
                        cubeMaterialColor[i]=selectedColors[i]
                    }
                    else {
                         cubeMaterialColor[i]=pieceColors[i]
                    }
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
                    if (i+nb_triangles==last_id-1){
                     cubeMaterialColor[i+nb_triangles]=selectedColors[i+nb_triangles]
                    }
                    else {
                      cubeMaterialColor[i+nb_triangles]=pieceColors[i+nb_triangles]
                    }    
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
    
    function drawTask() {
         for (var i=0; i< nb_objects; i++){
            taskWorldMatrix[i] = utils.MakeWorld(solutions[imageIndex][0][i][0], solutions[imageIndex][0][i][1],  solutions[imageIndex][0][i][2],  solutions[imageIndex][0][i][3],  solutions[imageIndex][0][i][4],  solutions[imageIndex][0][i][5],  solutions[imageIndex][0][i][6]);
            taskMaterialColor[i]= TaskColors[0];      
            }

            gl_task.bindVertexArray(vao_task);
              var positionBuffer = gl_task.createBuffer();
              gl_task.bindBuffer(gl_task.ARRAY_BUFFER, positionBuffer);
              gl_task.bufferData(gl_task.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
              gl_task.enableVertexAttribArray(positionAttributeLocation_task);
              gl_task.vertexAttribPointer(positionAttributeLocation_task, 3, gl.FLOAT, false, 0, 0);

              var normalBuffer = gl_task.createBuffer();
              gl_task.bindBuffer(gl_task.ARRAY_BUFFER, normalBuffer);
              gl_task.bufferData(gl_task.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
              gl_task.enableVertexAttribArray(normalAttributeLocation_task);
              gl_task.vertexAttribPointer(normalAttributeLocation_task, 3, gl.FLOAT, false, 0, 0);

              var indexBuffer = gl_task.createBuffer();
              gl_task.bindBuffer(gl_task.ELEMENT_ARRAY_BUFFER, indexBuffer);
              gl_task.bufferData(gl_task.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW); 
           
              gl_task.useProgram(program_task);
           
               //For each piece
                var nb_indices_triangle=24;
                for (var i=0;i< nb_triangles;i++){
                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix_task, taskWorldMatrix[i]);
                    var projectionMatrix = utils.multiplyMatrices( perspectiveMatrix_task, worldViewMatrix);
                    gl_task.uniformMatrix4fv(matrixLocation_task, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
                    gl_task.uniformMatrix4fv(normalMatrixPositionHandle_task, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

                    gl_task.uniform3fv(materialDiffColorHandle_task, taskMaterialColor[i]);
                    gl_task.uniform3fv(lightColorHandle_task,  directionalLightColor);
                    gl_task.uniform3fv(lightDirectionHandle_task,  directionalLight);

                    gl_task.bindVertexArray(vao_task);
                    gl_task.drawElements(gl.TRIANGLES,nb_indices_triangle, gl.UNSIGNED_SHORT, i*2*nb_indices_triangle);
                }

                var nb_indices_parall=36;
                for (var i=0; i < nb_parallepipedes;i++){
                    var worldViewMatrix = utils.multiplyMatrices(viewMatrix_task, taskWorldMatrix[i+nb_triangles]);
                    var projectionMatrix = utils.multiplyMatrices( perspectiveMatrix_task, worldViewMatrix);
                    gl_task.uniformMatrix4fv(matrixLocation_task, gl.FALSE, utils.transposeMatrix(projectionMatrix));

                    var cubeNormalMatrix = utils.invertMatrix(utils.transposeMatrix(worldViewMatrix));
                     gl_task.uniformMatrix4fv(normalMatrixPositionHandle_task, gl.FALSE, utils.transposeMatrix(cubeNormalMatrix));

                    gl_task.uniform3fv(materialDiffColorHandle_task, taskMaterialColor[i+nb_triangles]);
                    gl_task.uniform3fv(lightColorHandle_task,  directionalLightColor);
                    gl_task.uniform3fv(lightDirectionHandle_task,  directionalLight);

                    gl_task.bindVertexArray(vao_task);
                    gl_task.drawElements(gl_task.TRIANGLES,nb_indices_parall, gl.UNSIGNED_SHORT, (nb_indices_triangle*nb_triangles+i*nb_indices_parall)*2);
                } 
  }  
    
  var perspectiveMatrix = utils.MakePerspective(90, gl.canvas.width/gl.canvas.height, 0.1, 100.0);
  var viewMatrix = utils.MakeView(5.0, 3.0, 2.5, -45.0, -40.0);

  var perspectiveMatrix_task = utils.MakePerspective(90, gl_task.canvas.width/gl_task.canvas.height, 0.1, 100.0);
  var viewMatrix_task= utils.MakeView(5.0, 5.0, 2.5, -45.0, -40.0);

    
  //Bind vertices, normals and indexes to gl
  var vao = gl.createVertexArray();
  var vao_task = gl_task.createVertexArray();

    
  //Draw everything
  drawScene();

  //Animate the scene
  function animate(){
    var currentTime = (new Date).getTime();

    dx = 0.05;
    dy = 0.05;
    dz = 0.05;
    dl = 1.0;

    //Modify the scene's attributes
    if(lastUpdateTime && !giveUp && !change_Task){
      var deltaC = (30 * (currentTime - lastUpdateTime)) / 1000.0;
      if (last_id != 0 && (rightArrow || leftArrow || upArrow || downArrow || leftRotate || rightRotate ||xsymmetry)){

        positions[last_id-1][1] += (dy * upArrow) - (dy * downArrow);
        positions[last_id-1][2] += (dz * rightArrow) - (dz * leftArrow);
        positions[last_id-1][3] += (dl * leftRotate) - (dl * rightRotate);
       // Rx[last_id-1] += (180 * xsymmetry);
        //Rx[last_id-1] %= 360;
        
        cubeWorldMatrix[last_id-1] = utils.MakeWorld(positions[last_id-1][0], positions[last_id-1][1], positions[last_id-1][2],  Rx[last_id-1], positions[last_id-1][3], Ry[last_id-1], 1.0);

      }
	  /*X SYMMETRY *************************/
	    //If the user pressed the xsymmetry, rotate the selected piece of 180°
      if (last_id != 0 && ((xsymmetry) || (Rx[last_id-1] % 180 != 0))){
        Rx[last_id-1] = (Rx[last_id-1]+5)%360
        console.log("animate xsymmetry Rx[last_id]="+Rx[last_id-1])
        cubeWorldMatrix[last_id-1] = utils.MakeWorld(positions[last_id-1][0], positions[last_id-1][1], positions[last_id-1][2],Rx[last_id-1],positions[last_id-1][3], Ry[last_id-1], 1.0);
      }
      //If the user pressed selected a new piece while the rotation animation, we continue rotating the piece that are in the midlle of a rotation 
      //Without this piece of code, if the user click on a new piece before the end of the symetry animation, the piece stay stuck.
      for (var i=0; i< nb_objects; i++){
        if ((Rx[i] % 180 != 0)){
        Rx[i] = (Rx[i]+5)%360
        console.log("animate xsymmetry Rx[last_id]="+Rx[last_id-1])
        cubeWorldMatrix[i] = utils.MakeWorld(positions[i][0], positions[i][1], positions[i][2],Rx[i], positions[i][3], Ry[i], 1.0);
        }
      }  
        
       /*Y SYMMETRY *************************/ 
     if (last_id != 0 && ((ysymmetry) || (Ry[last_id-1] % 180 != 0))){
        Ry[last_id-1] = (Ry[last_id-1]+5)%360
        console.log("animate xsymmetry Rx[last_id]="+Ry[last_id-1])
        cubeWorldMatrix[last_id-1] = utils.MakeWorld(positions[last_id-1][0], positions[last_id-1][1], positions[last_id-1][2],Rx[last_id-1],positions[last_id-1][3], Ry[last_id-1], 1.0);
      }
      //If the user pressed selected a new piece while the rotation animation, we continue rotating the piece that are in the midlle of a rotation 
      //Without this piece of code, if the user click on a new piece before the end of the symetry animation, the piece stay stuck.
      for (var i=0; i< nb_objects; i++){
        if ((Ry[i] % 180 != 0)){
        Ry[i] = (Ry[i]+5)%360
        console.log("animate xsymmetry Rx[last_id]="+Ry[last_id-1])
        cubeWorldMatrix[i] = utils.MakeWorld(positions[i][0], positions[i][1], positions[i][2],Rx[i], positions[i][3], Ry[i], 1.0);
        }
      }   
      //xsymmetry = false;
    }
    if (giveUp){

      console.log("give up");
      for (var i = 0; i < nb_objects; i++) {
        var solution_values = solutions[imageIndex][0][i];
        cubeWorldMatrix[i] = utils.MakeWorld(solution_values[0], solution_values[1], solution_values[2], solution_values[3], solution_values[4], solution_values[5], solution_values[6]);
          
        positions[i] = [solution_values[0],solution_values[1],solution_values[2],solution_values[4]];
            
        Rx[i] = [solution_values[3]];
        Ry[i] = [solution_values[5]];
      };

      giveUp = false;
    }
      console.log(change_Task)
    if (change_Task){
        for (var i = 0; i < nb_objects; i++) {      
            cubeWorldMatrix[i] =utils.MakeWorld( worldMatrixParams(i)[0],worldMatrixParams(i)[1],worldMatrixParams(i)[2],worldMatrixParams(i)[3],worldMatrixParams(i)[4],worldMatrixParams(i)[5],worldMatrixParams(i)[6]);
            
             positions[i] = [worldMatrixParams(i)[0],worldMatrixParams(i)[1],worldMatrixParams(i)[2],worldMatrixParams(i)[4]];
            
             Rx[i] = [worldMatrixParams(i)[3]];
            Ry[i] = [worldMatrixParams(i)[5]];
        };
        change_Task = false;       
    }

    //Apply the modifications
    lastUpdateTime = currentTime;  

    
  }

  //Draw everything
  function drawScene() {
    animate();

    //Clear the scene
  //gl.clearColor(0.85, 0.85, 0.85, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //Update perspective matrix (in case canvas size has changed)
    perspectiveMatrix = utils.MakePerspective(90, canvas.width / canvas.height, 0.1, 100.0)
    perspectiveMatrix_task = utils.MakePerspective(90, canvas_task.width / canvas_task.height, 0.1, 100.0)  

    // update WV matrix
    var rotationX = utils.MakeRotateXMatrix(elevation);
    var rotationY = utils.MakeRotateYMatrix(angle);
    var cameraMatrix= utils.multiplyMatrices(rotationX,rotationY);
    cameraMatrix = utils.multiplyMatrices(cameraMatrix,utils.MakeTranslateMatrix(0, 0, lookRadius));
    viewMatrix = utils.invertMatrix(cameraMatrix);
      
    var rotationX_task = utils.MakeRotateXMatrix(elevation_task);
    var rotationY_task = utils.MakeRotateYMatrix(angle_task);
    var cameraMatrix_task= utils.multiplyMatrices(rotationX_task,rotationY_task);
    cameraMatrix_task = utils.multiplyMatrices(cameraMatrix_task,utils.MakeTranslateMatrix(0, 0, lookRadius_task));
    viewMatrix_task = utils.invertMatrix(cameraMatrix_task);  
    
      

       drawObjects(true)
      
       // ------ Figure out what pixel is under the mouse and read it
    const pixelX = lastMouseX * gl.canvas.width / gl.canvas.clientWidth ;
    const pixelY = gl.canvas.height - (lastMouseY) * gl.canvas.height / gl.canvas.clientHeight - 1;
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
  
      gl_task.clear(gl_task.COLOR_BUFFER_BIT | gl_task.DEPTH_BUFFER_BIT);
      drawTask()

    window.requestAnimationFrame(drawScene);

  }

}

main();

