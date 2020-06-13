var solutions=[
    [ //cat
    
        [//sol 0
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 1
            //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]  
        ],
        [ //sol 2
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 3
             //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
             [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ]
    ],
    [ //bird
    
        [//sol 0
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 1
            //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]  
        ],
        [ //sol 2
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 3
             //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
             [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ]
    ],
    [ //fish
    
        [//sol 0
            //big triangle 1
            [ 0.0, square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,135, 0.0, 1.0],
            //big triangle 2
             [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45)))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, Math.sin(utils.degToRad(45.0))*square_size/6,(square_size/4+ square_size/(2*Math.sqrt(2)))- (Math.sin(utils.degToRad(45.0))*square_size/6), 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,0.0,-( square_size/4+(square_size/(6*Math.sqrt(2)))), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/(2*Math.sqrt(2)))-Math.sin(utils.degToRad(45.0))*square_size/6,  (square_size/4+ square_size/(2*Math.sqrt(2)))+Math.sin(utils.degToRad(45.0))*square_size/6, 0.0, 135, 0.0, 1.0],
            //square
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(32),square_size/4+(square_size/(2*Math.sqrt(2))), 0.0, 45.0, 180.0, 1.0]
        ],
        [//sol 1
             //big triangle 1
             [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45)))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,135, 0.0, 1.0],
            //small triangle 1
            [0.0, Math.sin(utils.degToRad(45.0))*square_size/6,(square_size/4+ square_size/(2*Math.sqrt(2)))- (Math.sin(utils.degToRad(45.0))*square_size/6), 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,0.0,-( square_size/4+(square_size/(6*Math.sqrt(2)))), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/(2*Math.sqrt(2)))-Math.sin(utils.degToRad(45.0))*square_size/6,  (square_size/4+ square_size/(2*Math.sqrt(2)))+Math.sin(utils.degToRad(45.0))*square_size/6, 0.0, 135, 0.0, 1.0],
            //square
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(32),square_size/4+(square_size/(2*Math.sqrt(2))), 0.0, 45.0, 180.0, 1.0]
        ],
        [ //sol 2
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
             [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 3
             //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45)))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, square_size/Math.sqrt(2)-((1/3)*square_size*Math.cos(utils.degToRad(45))),-(square_size/4-((1/3)*square_size*Math.cos(utils.degToRad(45)))), 0.0,135, 0.0, 1.0],
            //small triangle 1
             [0.0, (square_size/(2*Math.sqrt(2)))-Math.sin(utils.degToRad(45.0))*square_size/6,  (square_size/4+ square_size/(2*Math.sqrt(2)))+Math.sin(utils.degToRad(45.0))*square_size/6, 0.0, 135, 0.0, 1.0],
            //medium triangle 1
            [0.0,0.0,-( square_size/4+(square_size/(6*Math.sqrt(2)))), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
             [0.0, Math.sin(utils.degToRad(45.0))*square_size/6,(square_size/4+ square_size/(2*Math.sqrt(2)))- (Math.sin(utils.degToRad(45.0))*square_size/6), 0.0, -45.0, 0.0, 1.0],
            //square
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(32),square_size/4+(square_size/(2*Math.sqrt(2))), 0.0, 45.0, 180.0, 1.0]
        ]
    ],
    [ //bunny
    
        [//sol 0
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 1
            //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]  
        ],
        [ //sol 2
            //big triangle 1
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //big triangle 2
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ],
        [//sol 3
             //big triangle 1
            [0.0,-(square_size/Math.sqrt(2)-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))),(square_size/3-((1/3)*square_size*Math.sin(utils.degToRad(45.0)))), 0.0,-45.0, 0.0, 1.0],
            //big triangle 2
            [ 0.0, 0.0,0.0, 0.0,-90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)-(2/3)*square_size/4, 0.0, -90.0, 0.0, 1.0],
            //medium triangle 1
            [0.0,square_size/2-(square_size/(2*Math.sqrt(2))),  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 90.0, 0.0,1.0],
            //small triangle 2
             [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/2,  -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)+(2/3)*square_size/4, 0.0, 90, 0.0, 1.0],
            //square
            [0.0, (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4, -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size), 0.0, 0.0, 0.0, 1.0],
            //parallelepipede
            [0.0,-square_size/Math.sqrt(2)+square_size/(2*Math.sqrt(8)),(2/3)*square_size/2+square_size/Math.sqrt(8), 0.0, -45.0, 0.0, 1.0]
        ]
    ],
];


var delta_image=[ 
     [//cat
       0.0, 
      (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4,
      -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)
     ],
     [//bird
       0.0, 
      (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4,
      -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)
     ],
    [//fish
       0.0, 
      0.0,
      0.0
     ],
    [//bunny
       0.0, 
      (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4,
      -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)
     ]
]


