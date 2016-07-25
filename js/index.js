/**
 * Created by shichangluo on 2016/7/25.
 */
var can;
var ctx;
var girlPic = new Image()
var starPic = new Image()
var num = 60;
var stars=[];
var lastTime;
var deltaTime;
var switchy = false;
var life =0;
function init(){
  can = document.getElementById('canvas')
  ctx = can.getContext('2d')
    w = can.width
   h = can.height
    girlPic.src = 'imgs/girl.jpg'
    starPic.src = 'imgs/star.png'
    for(var i = 0;i< num;i++){
        var obj = new starObj()
        stars.push(obj)
        stars[i].init();
    }
    lastTime = Date.now()
    gameloop()
}
window.onload=function(){
    init();
}
function gameloop(){

    var now = Date.now()
    deltaTime = now - lastTime;
    lastTime = now
    window.requestAnimationFrame(gameloop)
    drawBackground();
    drawGirl(girlPic)
    drawStars()
}
function drawBackground(){
    ctx.fillStyle = "#393550"
    ctx.fillRect(0,0,w,h)
}
function drawGirl(img){
    //drawImage(img,x,y)
    ctx.drawImage(img,100,150,600,300)

}
