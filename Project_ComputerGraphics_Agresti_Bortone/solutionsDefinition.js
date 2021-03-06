
  
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
    
    [//turtle

        [//sol 0
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //big triangle 2
            [0.0, -(square_size/6), square_size/2, 0.0, 180.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -(5*square_size/12), 3*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -square_size/6, -square_size/3, 0.0, 45.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -(5*square_size/12), -1*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //square
            [0.0, Math.sqrt(2) *square_size/8 + 0.1, -(1.75*Math.sqrt(5) + 7 + 4*Math.sqrt(2))*square_size/16, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, 0.1, -(1.75*Math.sqrt(5) + 7)*square_size/16, 0.0, 45.0, 0.0, 1.0]

        ],


        [//sol 1
            //big triangle 1
            [0.0, -(square_size/6), square_size/2, 0.0, 180.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -(5*square_size/12), 3*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -square_size/6, -square_size/3, 0.0, 45.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -(5*square_size/12), -1*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //square
            [0.0, Math.sqrt(2) *square_size/8 + 0.1, -(1.75*Math.sqrt(5) + 7 + 4*Math.sqrt(2))*square_size/16, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, 0.1, -(1.75*Math.sqrt(5) + 7)*square_size/16, 0.0, 45.0, 0.0, 1.0]

        ],

        [//sol 2
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //big triangle 2
            [0.0, -(square_size/6), square_size/2, 0.0, 180.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -(5*square_size/12), -1*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -square_size/6, -square_size/3, 0.0, 45.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -(5*square_size/12), 3*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //square
            [0.0, Math.sqrt(2) *square_size/8 + 0.1, -(1.75*Math.sqrt(5) + 7 + 4*Math.sqrt(2))*square_size/16, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, 0.1, -(1.75*Math.sqrt(5) + 7)*square_size/16, 0.0, 45.0, 0.0, 1.0]

        ],

        [//sol 3
            //big triangle 1
            [0.0, -(square_size/6), square_size/2, 0.0, 180.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -(5*square_size/12), -1*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -square_size/6, -square_size/3, 0.0, 45.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -(5*square_size/12), 3*square_size/4, 0.0, 0.0, 0.0, 1.0],
            //square
            [0.0, Math.sqrt(2) *square_size/8 + 0.1, -(1.75*Math.sqrt(5) + 7 + 4*Math.sqrt(2))*square_size/16, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, 0.1, -(1.75*Math.sqrt(5) + 7)*square_size/16, 0.0, 45.0, 0.0, 1.0]

        ]

    ],

    [//Runner

        [//sol 0
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //big triangle 2
            [0.0, -5*square_size/12, -square_size/4, 0.0, 180.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -17*square_size/16 - 0.1, square_size/8, 0.0, 45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -3*square_size/4, 0.4, 0.0, -135.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -7*square_size/8, -17*square_size/16, 0.0, 135.0, 0.0, 1.0],
            //square
            [0.0, 7*square_size/16, -square_size/8, 0.0, 0.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -3*square_size/4 - 0.05, -5*square_size/8 -0.1, 0.0, -45.0, 0.0, 1.0]

        ],

        [//sol 1
            //big triangle 1
            [0.0, -5*square_size/12, -square_size/4, 0.0, 180.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -17*square_size/16 - 0.1, square_size/8, 0.0, 45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -3*square_size/4, 0.4, 0.0, -135.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -7*square_size/8, -17*square_size/16, 0.0, 135.0, 0.0, 1.0],
            //square
            [0.0, 7*square_size/16, -square_size/8, 0.0, 0.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -3*square_size/4 - 0.05, -5*square_size/8 -0.1, 0.0, -45.0, 0.0, 1.0]

        ],

        [//sol 2
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //big triangle 2
            [0.0, -5*square_size/12, -square_size/4, 0.0, 180.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -7*square_size/8, -17*square_size/16, 0.0, 135.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -3*square_size/4, 0.4, 0.0, -135.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -17*square_size/16 - 0.1, square_size/8, 0.0, 45.0, 0.0, 1.0],
            //square
            [0.0, 7*square_size/16, -square_size/8, 0.0, 0.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -3*square_size/4 - 0.05, -5*square_size/8 -0.1, 0.0, -45.0, 0.0, 1.0]

        ],

        [//sol 3
            //big triangle 1
            [0.0, -5*square_size/12, -square_size/4, 0.0, 180.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -7*square_size/8, -17*square_size/16, 0.0, 135.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -3*square_size/4, 0.4, 0.0, -135.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -17*square_size/16 - 0.1, square_size/8, 0.0, 45.0, 0.0, 1.0],
            //square
            [0.0, 7*square_size/16, -square_size/8, 0.0, 0.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -3*square_size/4 - 0.05, -5*square_size/8 -0.1, 0.0, -45.0, 0.0, 1.0]

        ],

    ],

    [//Ship

        [//Sol 0
            //big triangle 1
            [0.0, square_size/32, -square_size/2, 0.0, 60.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/32, Math.sqrt(2)*square_size/4, 0.0, 60.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -9*square_size/16, square_size/16, 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -7*square_size/16, -3*square_size/16 + 0.1, 0.0, 0.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -7.1*square_size/16, Math.sqrt(2)*square_size/2 - 0.3, 0.0, 135.0, 0.0, 1.0],
            //square
            [0.0, -square_size/2, Math.sqrt(2)*square_size/4, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2, -square_size/2, 0.0, 45.0, -180.0, 1.0]

        ],

        [//Sol 1
            //big triangle 1
            [0.0, square_size/32, Math.sqrt(2)*square_size/4, 0.0, 60.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/32, -square_size/2, 0.0, 60.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -9*square_size/16, square_size/16, 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -7*square_size/16, -3*square_size/16 + 0.1, 0.0, 0.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -7.1*square_size/16, Math.sqrt(2)*square_size/2 - 0.3, 0.0, 135.0, 0.0, 1.0],
            //square
            [0.0, -square_size/2, Math.sqrt(2)*square_size/4, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2, -square_size/2, 0.0, 45.0, -180.0, 1.0]

        ],

        [//Sol 2
            //big triangle 1
            [0.0, square_size/32, -square_size/2, 0.0, 60.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/32, Math.sqrt(2)*square_size/4, 0.0, 60.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -7.1*square_size/16, Math.sqrt(2)*square_size/2 - 0.3, 0.0, 135.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -7*square_size/16, -3*square_size/16 + 0.1, 0.0, 0.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -9*square_size/16, square_size/16, 0.0, -45.0, 0.0, 1.0],
            //square
            [0.0, -square_size/2, Math.sqrt(2)*square_size/4, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2, -square_size/2, 0.0, 45.0, -180.0, 1.0]

        ],

        [//Sol 3
            //big triangle 1
            [0.0, square_size/32, Math.sqrt(2)*square_size/4, 0.0, 60.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/32, -square_size/2, 0.0, 60.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -7.1*square_size/16, Math.sqrt(2)*square_size/2 - 0.3, 0.0, 135.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, -7*square_size/16, -3*square_size/16 + 0.1, 0.0, 0.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -9*square_size/16, square_size/16, 0.0, -45.0, 0.0, 1.0],
            //square
            [0.0, -square_size/2, Math.sqrt(2)*square_size/4, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2, -square_size/2, 0.0, 45.0, -180.0, 1.0]

        ]

    ],

    [//Horse

        [//Sol 0
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, -90.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/3 - 0.36, -square_size/3 - 0.355, 0.0, -135.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -5*square_size/8, -square_size/3 + 0.2, 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, square_size - 0.2,-Math.sqrt(2)*square_size/4 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //small triangle 2
            [0.0, square_size/3,-Math.sqrt(2)*square_size/2 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //square
            [0.0, 2*square_size/3, -Math.sqrt(2)*square_size/4 + 0.05, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2 + 0.5, square_size/4 + 0.5, 0.0, 70.0, 0.0, 1.0]

        ],

        [//Sol 1
            //big triangle 1
            [0.0, square_size/3 - 0.36, -square_size/3 - 0.355, 0.0, -135.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, -90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, -5*square_size/8, -square_size/3 + 0.2, 0.0, -45.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, square_size - 0.2,-Math.sqrt(2)*square_size/4 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //small triangle 2
            [0.0, square_size/3,-Math.sqrt(2)*square_size/2 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //square
            [0.0, 2*square_size/3, -Math.sqrt(2)*square_size/4 + 0.05, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2 + 0.5, square_size/4 + 0.5, 0.0, 70.0, 0.0, 1.0]

        ],

        [//Sol 2
            //big triangle 1
            [0.0, 0.0, 0.0, 0.0, -90.0, 0.0, 1.0],
            //big triangle 2
            [0.0, square_size/3 - 0.36, -square_size/3 - 0.355, 0.0, -135.0, 0.0, 1.0],
            //small triangle 1
            [0.0, square_size/3,-Math.sqrt(2)*square_size/2 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, square_size - 0.2,-Math.sqrt(2)*square_size/4 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -5*square_size/8, -square_size/3 + 0.2, 0.0, -45.0, 0.0, 1.0],
            //square
            [0.0, 2*square_size/3, -Math.sqrt(2)*square_size/4 + 0.05, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2 + 0.5, square_size/4 + 0.5, 0.0, 70.0, 0.0, 1.0]

        ],

        [//Sol 3
            //big triangle 1
            [0.0, square_size/3 - 0.36, -square_size/3 - 0.355, 0.0, -135.0, 0.0, 1.0],
            //big triangle 2
            [0.0, 0.0, 0.0, 0.0, -90.0, 0.0, 1.0],
            //small triangle 1
            [0.0, square_size/3,-Math.sqrt(2)*square_size/2 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //medium triangle 1
            [0.0, square_size - 0.2,-Math.sqrt(2)*square_size/4 - 0.8, 0.0, 180.0, 0.0, 1.0],
            //small triangle 2
            [0.0, -5*square_size/8, -square_size/3 + 0.2, 0.0, -45.0, 0.0, 1.0],
            //square
            [0.0, 2*square_size/3, -Math.sqrt(2)*square_size/4 + 0.05, 0.0, 45.0, 0.0, 1.0],
            //parallelepiped
            [0.0, -square_size/2 + 0.5, square_size/4 + 0.5, 0.0, 70.0, 0.0, 1.0]

        ]

    ]
];


var delta_image=[ 
     [//cat
       0.0, 
      (square_size/2-(square_size/(2*Math.sqrt(2))))+(2*square_size/(6*Math.sqrt(2)))+square_size/4,
      -(1/3*(square_size/(2*Math.sqrt(2)))+(1/6)*square_size)
     ],
    [//fish
       0.0, 
      0.0,
      0.0
     ],
     [//turtle
       0.0, 
       Math.sqrt(2) *square_size/8 + 0.1,
      -(1.75*Math.sqrt(5) + 7 + 4*Math.sqrt(2))*square_size/16
     ],
    [//Runner
       0.0, 
      7*square_size/16,
       -square_size/8
     ],
    [//Ship
       0.0, 
     -square_size/2,
     Math.sqrt(2)*square_size/4
     ],
    [//Horse
       0.0, 
      2*square_size/3,
     -Math.sqrt(2)*square_size/4 + 0.05
     ]
]


