//3D cube vertex coordinates and indices

function normalVector(positionEdge1,positionEdge2){
	var normalVect= [0.0,-(positionEdge2[2]-positionEdge1[2]), positionEdge2[1]-positionEdge1[1]];
	
	var length = Math.sqrt(normalVect[1]*normalVect[1]+normalVect[2]*normalVect[2]); //calculating length
	normalVect[1] = normalVect[1]/length; //assigning new value to x (dividing x by length of the vector)
	normalVect[2]= normalVect[2]/length; //assigning new value to y
	return normalVect;
}

/**
This function updates the list of vertices "verticesList" by adding the vertices 
of a triangle with a given position for the three edges and a given width

@param verticesList : List of vertices 
@param positionEdge1 : Position of the first edge of the triangle 
@param positionEdge2 : Position of the second edge of the triangle 
@param positionEdge3 : Position of the third edge of the triangle 
@param width : Width of the triangle 


**/
function buildTriangleVertices(verticesList, positionEdge1 , positionEdge2 , positionEdge3, width){
	//front face **************************************************************************
	verticesList.push(width/2+positionEdge1[0],      positionEdge1[1],           positionEdge1[2],   //0
	                width/2+positionEdge2[0],      positionEdge2[1],           positionEdge2[2],     //1
	                width/2+positionEdge3[0],      positionEdge3[1],           positionEdge3[2])     //2
	

	//back face  **************************************************************************
	verticesList.push(-width/2+positionEdge1[0],     positionEdge1[1],           positionEdge1[2],   //3
	                -width/2+positionEdge2[0],     positionEdge2[1],           positionEdge2[2],     //4
	                -width/2+positionEdge3[0],     positionEdge3[1],           positionEdge3[2])     //5	


	//side faces **************************************************************************
	verticesList.push(width/2+positionEdge1[0],       positionEdge1[1],           positionEdge1[2],   //6
	                width/2+positionEdge2[0],       positionEdge2[1],           positionEdge2[2],     //7
	                -width/2+positionEdge1[0],      positionEdge1[1],           positionEdge1[2],     //8
	                -width/2+positionEdge2[0],      positionEdge2[1],           positionEdge2[2],     //9
	
	                width/2+positionEdge2[0],       positionEdge2[1],           positionEdge2[2],     //10
	                width/2+positionEdge3[0],       positionEdge3[1],           positionEdge3[2],     //11
	                -width/2+positionEdge2[0],      positionEdge2[1],           positionEdge2[2],     //12
	                -width/2+positionEdge3[0],      positionEdge3[1],           positionEdge3[2],     //13
	
	                width/2+positionEdge3[0],       positionEdge3[1],           positionEdge3[2],     //14
	                width/2+positionEdge1[0],       positionEdge1[1],           positionEdge1[2],     //15
	                -width/2+positionEdge3[0],      positionEdge3[1],           positionEdge3[2],     //16
	                -width/2+positionEdge1[0],      positionEdge1[1],           positionEdge1[2])     //17	
}

/**
This function updates the list of normal "normList" by adding the normals 
of a triangle with a given position for the three edges

@param normList : List of normals 
@param positionEdge1 : Position of the first edge of the triangle 
@param positionEdge2 : Position of the second edge of the triangle 
@param positionEdge3 : Position of the third edge of the triangle 
**/
function buildTriangleNorms(normList, positionEdge1 , positionEdge2 , positionEdge3){
	//front face **************************************************************************
	normList.push(  1.0,      0.0,           0.0,    //0
					1.0,      0.0,           0.0,    //1
					1.0,      0.0,           0.0)    //2
	
	//back face  **************************************************************************
	normList.push(-1.0,     0.0,           0.0,    //3
				  -1.0,     0.0,           0.0,    //4
				  -1.0,     0.0,           0.0)    //5	
	
	//side faces **************************************************************************
	normList.push(0.0,    normalVector(positionEdge1,positionEdge2)[1],    normalVector(positionEdge1,positionEdge2)[2],    //6
				  0.0,    normalVector(positionEdge1,positionEdge2)[1],    normalVector(positionEdge1,positionEdge2)[2],    //7
				  0.0,    normalVector(positionEdge1,positionEdge2)[1],    normalVector(positionEdge1,positionEdge2)[2],    //8
				  0.0,    normalVector(positionEdge1,positionEdge2)[1],    normalVector(positionEdge1,positionEdge2)[2],    //9
	
				  0.0,    normalVector(positionEdge2,positionEdge3)[1],    normalVector(positionEdge2,positionEdge3)[2],    //10
				  0.0,    normalVector(positionEdge2,positionEdge3)[1],    normalVector(positionEdge2,positionEdge3)[2],    //11
				  0.0,    normalVector(positionEdge2,positionEdge3)[1],    normalVector(positionEdge2,positionEdge3)[2],    //12
				  0.0,    normalVector(positionEdge2,positionEdge3)[1],    normalVector(positionEdge2,positionEdge3)[2],    //13

				  0.0,    normalVector(positionEdge3,positionEdge1)[1],    normalVector(positionEdge3,positionEdge1)[2],    //14
				  0.0,    normalVector(positionEdge3,positionEdge1)[1],    normalVector(positionEdge3,positionEdge1)[2],    //15
				  0.0,    normalVector(positionEdge3,positionEdge1)[1],    normalVector(positionEdge3,positionEdge1)[2],    //16
				  0.0,    normalVector(positionEdge3,positionEdge1)[1],    normalVector(positionEdge3,positionEdge1)[2])    //17	
}

/**
This function updates the list of indices "indicesList" by adding the indices of a triangle

@param indicesList : List of indicesList 
@param startVertice : index of the vertice from which we start

**/
function buildTriangleIndices(indicesList,startVertice){

	// front face
	indicesList[j++]=startVertice+0;
	indicesList[j++]=startVertice+2;
	indicesList[j++]=startVertice+1; 

	// back face
	indicesList[j++]=startVertice+3;
	indicesList[j++]=startVertice+4;
	indicesList[j++]=startVertice+5; 
		
	//sides
	for (var k=0; k<3; k++){
		indicesList[j++]=startVertice+6+4*k;
		indicesList[j++]=startVertice+7+4*k;
		indicesList[j++]=startVertice+8+4*k; 
				
		indicesList[j++]=startVertice+8+4*k;
		indicesList[j++]=startVertice+7+4*k;
		indicesList[j++]=startVertice+9+4*k;
	}	
	
}

/**
This function updates the list of vertices "verticesList" by adding the vertices 
of a parallelepiped with a given position for the three edges and a given width

@param verticesList : List of vertices 
@param positionEdge1 : Position of the first edge of the parallelepiped 
@param positionEdge2 : Position of the second edge of the parallelepiped 
@param positionEdge3 : Position of the third edge of the parallelepiped 
@param positionEdge4 : Position of the fourth edge of the parallelepiped 
@param width : Width of the parallelepiped 


**/
function buildParallelepipedeVertices(verticesList, positionEdge1 , positionEdge2 , positionEdge3, positionEdge4, width){
	//front face  ***************************************************************** 
	verticesList.push(width/2+positionEdge1[0],     positionEdge1[1],      positionEdge1[2],    //0
					width/2+positionEdge2[0],     positionEdge2[1],      positionEdge2[2],    //1
					width/2+positionEdge3[0],     positionEdge3[1],      positionEdge3[2],    //2
					width/2+positionEdge4[0],     positionEdge4[1],      positionEdge4[2])    //3

	//back face  ******************************************************************
	verticesList.push(-width/2+positionEdge1[0],    positionEdge1[1],      positionEdge1[2],   //4
					-width/2+positionEdge2[0],    positionEdge2[1],      positionEdge2[2],    //5
					-width/2+positionEdge3[0],    positionEdge3[1],      positionEdge3[2],    //6
					-width/2+positionEdge4[0],    positionEdge4[1],      positionEdge4[2])  //7
	
	//side faces **************************************************************************
	verticesList.push(width/2+positionEdge1[0],       positionEdge1[1],           positionEdge1[2],    //8
					width/2+positionEdge2[0],       positionEdge2[1],           positionEdge2[2],    //9
					-width/2+positionEdge1[0],      positionEdge1[1],           positionEdge1[2],    //10
					-width/2+positionEdge2[0],      positionEdge2[1],           positionEdge2[2],    //11
	
					width/2+positionEdge2[0],       positionEdge2[1],           positionEdge2[2],    //12
					width/2+positionEdge3[0],       positionEdge3[1],           positionEdge3[2],    //13
					-width/2+positionEdge2[0],      positionEdge2[1],           positionEdge2[2],    //14
					-width/2+positionEdge3[0],      positionEdge3[1],           positionEdge3[2],    //15
	
					width/2+positionEdge3[0],       positionEdge3[1],           positionEdge3[2],    //16
					width/2+positionEdge1[0],       positionEdge4[1],           positionEdge4[2],   //17
					-width/2+positionEdge3[0],      positionEdge3[1],           positionEdge3[2],    //18
					-width/2+positionEdge1[0],      positionEdge4[1],           positionEdge4[2],    //19
	
					width/2+positionEdge3[0],       positionEdge4[1],           positionEdge4[2],    //20
					width/2+positionEdge1[0],       positionEdge1[1],           positionEdge1[2],    //21
					-width/2+positionEdge3[0],      positionEdge4[1],           positionEdge4[2],    //22
					-width/2+positionEdge1[0],      positionEdge1[1],           positionEdge1[2])   //23
	
}

/**
This function updates the list of normal "normList" by adding the normals 
of a parallelepiped with a given position for the four edges

@param normList : List of normals 
@param positionEdge1 : Position of the first edge of the parallelepiped 
@param positionEdge2 : Position of the second edge of the parallelepiped 
@param positionEdge3 : Position of the third edge of the parallelepiped 
@param positionEdge4 : Position of the fourth edge of the parallelepiped 
**/
function buildParallelepipedeNorms(normList, positionEdge1 , positionEdge2 , positionEdge3, positionEdge4){
	//front face  ***************************************************************** (
	normList.push(1.0,      0.0,           0.0,   //0
				  1.0,      0.0,           0.0,   //1
			      1.0,      0.0,           0.0,   //2
				  1.0,      0.0,           0.0)   //3
	
	//back face  ******************************************************************
	normList.push(-1.0,      0.0,           0.0,     //4
				  -1.0,      0.0,           0.0 ,    //5
				  -1.0,      0.0,           0.0 ,    //6
				  -1.0,      0.0,           0.0 )    //7
	
	//side faces ******************************************************************
	var normalFace1= normalVector(positionEdge1,positionEdge2)
	var normalFace2= normalVector(positionEdge2,positionEdge3)
	var normalFace3= normalVector(positionEdge3,positionEdge4)
	var normalFace4= normalVector(positionEdge4,positionEdge1)
	normList.push(0.0,    normalFace1[1],    normalFace1[2],   //8
	              0.0,    normalFace1[1],    normalFace1[2],   //9
	              0.0,    normalFace1[1],    normalFace1[2],   //10
	              0.0,    normalFace1[1],    normalFace1[2],  //11
	 
	              0.0,    normalFace2[1],    normalFace2[2],   //13
	              0.0,    normalFace2[1],    normalFace2[2],   //14
	              0.0,    normalFace2[1],    normalFace2[2],   //15
	              0.0,    normalFace2[1],    normalFace2[2],

	              0.0,    normalFace3[1],    normalFace3[2],   //16
	              0.0,    normalFace3[1],    normalFace3[2],   //17
	              0.0,    normalFace3[1],    normalFace3[2],   //18
	              0.0,    normalFace3[1],    normalFace3[2],   //19
	
	              0.0,    normalFace4[1],    normalFace4[2],   //20
	              0.0,    normalFace4[1],    normalFace4[2],   //21
	              0.0,    normalFace4[1],    normalFace4[2],   //22
	              0.0,    normalFace4[1],    normalFace4[2])   //23

}

/**
This function updates the list of indices "indicesList" by adding the indices of a parallelepiped

@param indicesList : List of indicesList 
@param startVertice : index of the vertice from which we start

**/
function buildParallelepipedeIndices(indicesList,startVertice){

	// front face
	indicesList[j++]=startVertice+0;
	indicesList[j++]=startVertice+2;
	indicesList[j++]=startVertice+1; 
	
	indicesList[j++]=startVertice+0;
	indicesList[j++]=startVertice+3;
	indicesList[j++]=startVertice+2; 

	// back face
	indicesList[j++]=startVertice+4;
	indicesList[j++]=startVertice+5;
	indicesList[j++]=startVertice+6;
	
	indicesList[j++]=startVertice+4;
	indicesList[j++]=startVertice+6;
	indicesList[j++]=startVertice+7; 
		
		
	//sides
	for (var k=0; k<4; k++){
		indicesList[j++]=startVertice+8+4*k;
		indicesList[j++]=startVertice+9+4*k;
		indicesList[j++]=startVertice+10+4*k;  
		
		indicesList[j++]=startVertice+10+4*k;
		indicesList[j++]=startVertice+9+4*k;
		indicesList[j++]=startVertice+11+4*k;
	}	
}

function buildVertices(){
	vert=[]
	//big triangle 1
	buildTriangleVertices(vert, [0.0,  square_size/6,  -square_size/2] , 
								[0.0,  -square_size/3,  0.0] ,
								[0.0,  square_size/6,  square_size/2], 
								width)
		
	//big triangle 2
	buildTriangleVertices(vert, [0.0,  square_size/6,  -square_size/2] , 
								[0.0,  -square_size/3,  0.0] ,
								[0.0,  square_size/6,  square_size/2], 
								width)
	
	//small triangle 1
	buildTriangleVertices(vert, [0.0,  square_size/12,  -square_size/4] , 
								[0.0,  -square_size/6,  0.0] ,
								[0.0,  square_size/12,  square_size/4], 
								width)
	
	//medium triangle 1
	buildTriangleVertices(vert,	[0.0,   Math.sqrt(2) * square_size/12,  -Math.sqrt(2) * square_size/4] , 
								[0.0,   -Math.sqrt(2) * square_size/6, 0.0] , 
								[0.0,   Math.sqrt(2) * square_size/12,  Math.sqrt(2) * square_size/4],
								width)

	//small triangle 2
	buildTriangleVertices(vert, [0.0,  square_size/12,  -square_size/4] , 
								[0.0,  -square_size/6,  0.0] ,
								[0.0,  square_size/12,  square_size/4], 
								width)
								
	//Square
	buildParallelepipedeVertices(vert,	
								[0.0,   0.0, -square_size/4] , 
								[0.0,   square_size/4,  0.0] , 
								[0.0,   0.0,  square_size/4],
								[0.0,   -square_size/4, 0.0],
								width)
							
	
	//parallelepiped
	buildParallelepipedeVertices(vert,	
								[0.0,   square_size/8,  -3*square_size/8] , 
								[0.0,   square_size/8,  square_size/8], 
								[0.0,   -square_size/8, 3*square_size/8],
								[0.0,   -square_size/8, -square_size/8],
								width)

	return vert;
}


function buildNorms(){
	norm=[]
	//big triangle 1
	buildTriangleNorms(norm, [0.0,  square_size/6,  -square_size/2] , 
								[0.0,  -square_size/3,  0.0] ,
								[0.0,  square_size/6,  square_size/2], 
								)
		
	//big triangle 2
	buildTriangleNorms(norm, [0.0,  square_size/6,  -square_size/2] , 
								[0.0,  -square_size/3,  0.0] ,
								[0.0,  square_size/6,  square_size/2] ,
								)
	
	//small triangle 1
	buildTriangleNorms(norm, [0.0,  square_size/12,  -square_size/4] , 
								[0.0,  -square_size/6,  0.0] ,
								[0.0,  square_size/12,  square_size/4],
								)
	
	//medium triangle 1
	buildTriangleNorms(norm,	[0.0,   Math.sqrt(2) * square_size/12,  -Math.sqrt(2) * square_size/4] , 
								[0.0,   -Math.sqrt(2) * square_size/6, 0.0] , 
								[0.0,   Math.sqrt(2) * square_size/12,  Math.sqrt(2) * square_size/4],
								)

	//small triangle 2
	buildTriangleNorms(norm, [0.0,  square_size/12,  -square_size/4] , 
								[0.0,  -square_size/6,  0.0] ,
								[0.0,  square_size/12,  square_size/4],
								)
								
	//Square
	buildParallelepipedeNorms(norm,	
								[0.0,   0.0, -square_size/4] , 
								[0.0,   square_size/4,  0.0] , 
								[0.0,   0.0,  square_size/4],
								[0.0,   -square_size/4, 0.0],
								)
							
	
	//parallelepiped
	buildParallelepipedeNorms(norm,	
								[0.0,   square_size/8,  -3*square_size/8] , 
								[0.0,   square_size/8,  square_size/8], 
								[0.0,   -square_size/8, 3*square_size/8],
								[0.0,   -square_size/8, -square_size/8],
								)
	return norm

}

///// Creates vertices and Norms *************************************************************************************
square_size=5.0;
width=0.5;
space_between_pieces=0.2;
v=0
n=0
var vertices=buildVertices();
var normals=buildNorms();
	
///// Creates indices ************************************************************************************************ 
var nb_triangles=5;
var nb_parallepipedes=2;
var nb_vert_triangle = 18.0;
var nb_vert_parallepipede = 24.0;
var indices = []
j=0
//TRIANGLES 
for(i = 0; i < nb_triangles; i++) {		
	buildTriangleIndices(indices,i*nb_vert_triangle)
}
	
//PARALLELEPIPEDES
for(i = 0; i < nb_parallepipedes; i++) {
	buildParallelepipedeIndices(indices,nb_triangles*nb_vert_triangle+i*nb_vert_parallepipede)
}

 
var pieceColors = [

	[10.0,0.0,0.0], //Red
	[0.0,1.0,0.0],  //Green
	[0.0,0.0,1.0],  //Blue
	[10.0,1.0,0.0], //Yellow
	[10.0,0.0,1.0], //Magenta
	[0.0,0.75,1.0], //Light blue
	[10.0,0.5,0.0]  //Orange

]

var selectedColors =[
    [10.0,0.7,0.7], //Red
	[7.0,1.0,0.7],  //Green
	[6.0,0.6,1.0],  //Blue
	[10.0,1.0,0.8], //Yellow
	[10.0,0.7,1.0], //Magenta
	[7.0,0.95,1.0], //Light blue
	[10.0,0.9,0.7]  //Orange
]

var TaskColors =[
    [5.0,0.5,0.5], //Grey
]
