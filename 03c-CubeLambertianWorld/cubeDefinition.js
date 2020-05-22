//3D cube vertex coordinates and indices

var square_size=5.0;
var width=0.5;
var space_between_pieces=0.5;

var vertices = [
	//big triangle 1
	width/2,     0.0,            0.0,               //0
	width/2,     square_size/2,  square_size/2,     //1
	width/2,     square_size,    0.0,               //2
	-width/2,    0.0,            0.0,               //3
	-width/2,    square_size/2,  square_size/2,     //4
	-width/2,    square_size,    0.0,                //5	
	
	//big triangle 2
	width/2,     square_size+space_between_pieces,            0.0+space_between_pieces/2,               //0
	width/2,     square_size/2+space_between_pieces,          square_size/2 +space_between_pieces/2,     //1
	width/2,     square_size+space_between_pieces,            square_size +space_between_pieces/2,       //2
	-width/2,    square_size+space_between_pieces,            0.0 +space_between_pieces/2,               //3
	-width/2,    square_size/2+space_between_pieces,          square_size/2 +space_between_pieces/2,     //4
	-width/2,    square_size+space_between_pieces   ,         square_size +space_between_pieces/2,        //5
	
	//small triangle 1
	width/2,     -space_between_pieces,                      0.0,               //0
	width/2,     -space_between_pieces,                      square_size/2,     //1
	width/2,     square_size/4-space_between_pieces,         square_size/4,     //2
	-width/2,     -space_between_pieces,                      0.0,              //3
	-width/2,     -space_between_pieces,                      square_size/2,    //4
	-width/2,     square_size/4-space_between_pieces,         square_size/4,    //5
	
	//medium triangle 1
	width/2,     -space_between_pieces,                      square_size/2+space_between_pieces,   //0
	width/2,     -space_between_pieces,                      square_size+space_between_pieces,     //1
	width/2,     square_size/2-space_between_pieces,         square_size+space_between_pieces,     //2
	-width/2,     -space_between_pieces,                      square_size/2+space_between_pieces,   //3
	-width/2,     -space_between_pieces,                      square_size+space_between_pieces,     //4
	-width/2,     square_size/2-space_between_pieces,         square_size+space_between_pieces,     //5
	
	//small triangle 2
	width/2,     square_size/2,                     square_size/2+space_between_pieces/2,       //0
	width/2,     square_size/4,                     3*square_size/4+space_between_pieces/2,     //1
	width/2,     3*square_size/4,                    3*square_size/4+space_between_pieces/2,     //2
	-width/2,     square_size/2,                     square_size/2+space_between_pieces/2,       //0
	-width/2,     square_size/4,                     3*square_size/4+space_between_pieces/2,     //1
	-width/2,     3*square_size/4,                    3*square_size/4+space_between_pieces/2,     //2
	
	//Square
	width/2,     0-space_between_pieces/2,                     square_size/2+space_between_pieces/2,   //0
	width/2,     square_size/4-space_between_pieces/2,         3*square_size/4+space_between_pieces/2,     //1
	width/2,     square_size/2-space_between_pieces/2,         square_size/2+space_between_pieces/2,     //2
	width/2,     square_size/4-space_between_pieces/2,         square_size/4+space_between_pieces/2,     //3
	-width/2,     0-space_between_pieces/2,                     square_size/2+space_between_pieces/2,   //4
	-width/2,     square_size/4-space_between_pieces/2,         3*square_size/4+space_between_pieces/2,    //5
	-width/2,     square_size/2-space_between_pieces/2,         square_size/2+space_between_pieces/2,     //6
	-width/2,     square_size/4-space_between_pieces/2,         square_size/4+space_between_pieces/2, //7
	
	//parallelepiped
	width/2,      square_size/4,    3*square_size/4 +space_between_pieces,   //0
	width/2,      square_size/2,    square_size +space_between_pieces,     //1
	width/2,	  square_size,      square_size +space_between_pieces,     //2
	width/2,      3*square_size/4,  3*square_size/4+space_between_pieces,     //3
	
	-width/2,      square_size/4,    3*square_size/4 +space_between_pieces,   //0
	-width/2,      square_size/2,    square_size +space_between_pieces,     //1
	-width/2,	   square_size,      square_size +space_between_pieces,     //2
	-width/2,      3*square_size/4,  3*square_size/4+space_between_pieces     //3
	
	
];

////// Creates indices 
nb_triangles=5;
var nb_vert_triangle = 6.0;
	
var indices = []
j=0
//FOR THE TRIANGLES ********************************************************
for(i = 0; i < nb_triangles; i++) {
	// front face
	indices[j++]= i*nb_vert_triangle+0;
	indices[j++]=i*nb_vert_triangle+2;
	indices[j++]=i*nb_vert_triangle+1; 
	// back face
	indices[j++]=i*nb_vert_triangle+3;
	indices[j++]=i*nb_vert_triangle+4;
	indices[j++]=i*nb_vert_triangle+5; 
	
	//sides
	indices[j++]=i*nb_vert_triangle+0
	indices[j++]=i*nb_vert_triangle+1
	indices[j++]=i*nb_vert_triangle+3;  
	
	indices[j++]=i*nb_vert_triangle+1
	indices[j++]=i*nb_vert_triangle+4
	indices[j++]=i*nb_vert_triangle+3;
	
	indices[j++]=i*nb_vert_triangle+1
	indices[j++]=i*nb_vert_triangle+5
	indices[j++]=i*nb_vert_triangle+4;
	
	indices[j++]=i*nb_vert_triangle+2
	indices[j++]=i*nb_vert_triangle+5
	indices[j++]=i*nb_vert_triangle+1;
	
	indices[j++]=i*nb_vert_triangle+0
	indices[j++]=i*nb_vert_triangle+5
	indices[j++]=i*nb_vert_triangle+2;
	
	indices[j++]=i*nb_vert_triangle+0
	indices[j++]=i*nb_vert_triangle+3
	indices[j++]=i*nb_vert_triangle+5;
}

var normals = [					// Color #:
	 0.0, 0.0,-1.0, 	//  0
	 0.0, 0.0,-1.0,  //  1
	 0.0, 0.0,-1.0,  //  2
	 0.0, 0.0, 1.0,  //  3
	 0.0, 0.0, 1.0,  //  4
	 0.0, 0.0, 1.0,  //  5
	 1.0, 0.0, 0.0,  //  6
	 1.0, 0.0, 0.0,  //  7
	 1.0, 0.0, 0.0,  //  8
	 0.0,-1.0, 0.0,  //  9
	 0.0,-1.0, 0.0,  // 10
	 0.0,-1.0, 0.0,  // 11
	-1.0, 0.0, 0.0,  // 12
	-1.0, 0.0, 0.0,  // 13
	-1.0, 0.0, 0.0,  // 14
	 0.0, 1.0, 0.0,  // 15
	 0.0, 1.0, 0.0,  // 16
	 0.0, 1.0, 0.0,  // 17
	 0.0, 0.0,-1.0,  // 18
	 0.0, 0.0, 1.0,  // 19
	 1.0, 0.0, 0.0,  // 20
	 0.0,-1.0, 0.0,  // 21
	-1.0, 0.0, 0.0,  // 22
	 0.0, 1.0, 0.0,   // 23
	 0.0, 0.0,-1.0, 	//  0
	 0.0, 0.0,-1.0,  //  1
	 0.0, 0.0,-1.0,  //  2
	 0.0, 0.0, 1.0,  //  3
	 0.0, 0.0, 1.0,  //  4
	 0.0, 0.0, 1.0,  //  5
	 1.0, 0.0, 0.0,  //  6
	 1.0, 0.0, 0.0,  //  7
	 1.0, 0.0, 0.0,  //  8
	 0.0,-1.0, 0.0,  //  9
	 0.0,-1.0, 0.0,  // 10
	 0.0,-1.0, 0.0,  // 11
	-1.0, 0.0, 0.0,  // 12
	-1.0, 0.0, 0.0,  // 13
	-1.0, 0.0, 0.0,  // 14
	 0.0, 1.0, 0.0,  // 15
	 0.0, 1.0, 0.0,  // 16
	 0.0, 1.0, 0.0,  // 17
	 0.0, 0.0,-1.0,  // 18
	 0.0, 0.0, 1.0,  // 19
	 1.0, 0.0, 0.0,  // 20
	 0.0,-1.0, 0.0,  // 21
	-1.0, 0.0, 0.0,  // 22
	 0.0, 1.0, 0.0   // 23
];
	  
var pieceColors = [

	[10.0,0.0,0.0], //Red
	[0.0,1.0,0.0],  //Green
	[0.0,0.0,1.0],  //Blue
	[10.0,1.0,0.0], //Yellow
	[10.0,0.0,1.0], //Magenta
	[0.0,0.75,1.0], //Light blue
	[10.0,0.5,0.0]  //Orange

]