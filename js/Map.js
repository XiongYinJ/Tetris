(function () {
    //地图的矩阵
    window.Map = function() {
        // console.log(mapGame);
        this.mapCode = [
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,7,8,0,0,0,0,0],
            [1,2,3,4,5,6,0,0,0,0,0,0]
        ]

    }
    Map.prototype.render = function (mapGame) {
        //渲染地图
        for (let i = 0; i < mapGame.row; i++) {
            for (let j = 0; j < mapGame.col; j++) {
                if (this.mapCode[i][j] != 0) {
                    game.setColor(i,j,this.mapCode[i][j])
                }
            }
        }
    } 
})()