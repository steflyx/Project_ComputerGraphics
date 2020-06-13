function checkForm(){
    res=false;
    var translation = getDiffToSquare(positions[5],delta_image[imageIndex]);
    var user_matrice = new Array();
    for (var i=0; i<nb_objects;i++){
        user_matrice[i] = [positions[i][0]+translation[0], positions[i][1]+translation[1], positions[i][2]+translation[2],Rx[i], positions[i][3], Ry[i], 1.0];
        };
    var solutions_list = solutions[imageIndex];
    var nb_sol = solutions_list.length;
    var index_sol = 0;
    
    var rotation_tolerance = 10; //degrees
    var distance_tolerance = 1; 
    
    while(!res & index_sol < nb_sol ){
        console.log("SOLUTION N° ="+index_sol)
        var solution = solutions_list[index_sol];
        for(var index_obj =0; index_obj < nb_objects;index_obj++){
            console.log(typePiece[index_obj])
            if(!isWellPlaced(user_matrice[index_obj],solution[index_obj], typePiece[index_obj],rotation_tolerance, distance_tolerance)){
                console.log("missplaced : "+index_obj)
                break
            }
            console.log("correctly_placed : "+index_obj)
            if(index_obj == (nb_objects-1)){
                res = true;
            }
        }
        index_sol ++;
    }
    return(res);
    
}


function getDiffToSquare(user_square_position, solution_square_position){
    return([solution_square_position[0]-user_square_position[0],
            solution_square_position[1]-user_square_position[1],
            solution_square_position[2]-user_square_position[2]])
   
}

function isWellPlaced(userMatrice, solutionMatrice,type,rotation_tolerance, distance_tolerance){
    switch (type){
    case "TRIANGLE":
        var valid_rotation = isTriangleWellRotated(userMatrice, solutionMatrice,rotation_tolerance);
        break;
    case "SQUARE":
        var valid_rotation = isSquareWellRotated(userMatrice, solutionMatrice,rotation_tolerance);
        break;
    case "PARALLELEPIPED":
        var valid_rotation = isParallepipedWellRotated(userMatrice, solutionMatrice,rotation_tolerance);
        break;
    }
    var valid_position = isPieceWellPositioned(userMatrice, solutionMatrice,distance_tolerance );
    return(valid_position && valid_rotation)
}

function isTriangleWellRotated(userMatrice, solutionMatrice,rotation_tolerance){
    var valid_rotation =false;
    
    if (equalAngleWithTolerance(rotation_tolerance,parseFloat(userMatrice[4])+parseFloat(userMatrice[5]),solutionMatrice[4])){
        valid_rotation=true;
    }
    
    
    console.log("isTriangleWellRotated : "+valid_rotation )
    return(valid_rotation);
}

function isSquareWellRotated(userMatrice, solutionMatrice,rotation_tolerance){
    var valid_rotation =false;
    if (equalAngleWithTolerance(rotation_tolerance,userMatrice[4],solutionMatrice[4])){
        valid_rotation=true;
    } 
    console.log("isSquareWellRotated : "+valid_rotation )
    return(valid_rotation); 
}

function isParallepipedWellRotated(userMatrice, solutionMatrice,rotation_tolerance){
    var valid_rotation =false;
    var valid_symetry = false;
    if (utils.mod(parseFloat(userMatrice[3])+parseFloat(userMatrice[5]),360)==utils.mod(solutionMatrice[3]+solutionMatrice[5],360)){
        valid_symetry = true;
    } 
    if (equalAngleWithTolerance(rotation_tolerance, userMatrice[4], solutionMatrice[4])){
        valid_rotation=true;
    } 
    console.log("isParallepipedWellRotated : "+(valid_rotation && valid_symetry ))
    return(valid_rotation && valid_symetry);   
}

function isPieceWellPositioned(userMatrice, solutionMatrice,distance_tolerance ){
   // console.log(((userMatrice[0]-solutionMatrice[0])**2));
  //  console.log(((userMatrice[1]-solutionMatrice[1])**2));
  //  console.log(((userMatrice[2]-solutionMatrice[2])**2));

   var distance = Math.sqrt(((userMatrice[0]-solutionMatrice[0])**2) + ((userMatrice[1]-solutionMatrice[1])**2) + ((userMatrice[2]-solutionMatrice[2])**2))
    console.log("isPieceWellPositioned distance : "+ distance )
   return(distance <= distance_tolerance);
}
 
function equalAngleWithTolerance(tolerance,user_angle,solution_angle){
    res=false;
    user_angle=utils.mod(user_angle,360);
    solution_angle=utils.mod(solution_angle,360);
    
  //  console.log("user_angle = "+user_angle)
//    console.log("solution_angle = "+solution_angle)
    
    if(solution_angle-tolerance>=0 && solution_angle+tolerance<=360  ){
        console.log("equalAngleWithTolerance first if")
        return((user_angle >= solution_angle-tolerance ) && (user_angle <= solution_angle+tolerance ) );
    }
    else {
        console.log("equalAngleWithTolerance second if")
        var angle_1= utils.mod(solution_angle-tolerance,360);
        var angle_2= utils.mod(solution_angle+tolerance,360);
       // console.log("angle_1 = "+angle_1)
        //console.log("angle_2 = "+angle_2)
        return( (user_angle >= Math.max(angle_1,angle_2)) || (user_angle <= Math.min(angle_1,angle_2)) )     
    }
}

var typePiece=["TRIANGLE","TRIANGLE","TRIANGLE","TRIANGLE","TRIANGLE","SQUARE","PARALLELEPIPED"]














