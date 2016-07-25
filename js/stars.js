/**
 * Created by shichangluo on 2016/7/25.
 */
var starObj = function(){
    this.x;
    this.y;
    this.n;
    this.timer;
    this.xSpd;
    this.ySpd;
}
starObj.prototype.init = function(){
    this.x = Math.random()*600+ 100 ;
    this.y = Math.random()*300+150;
    this.n = Math.floor(Math.random()*7);
    this.timer = 0;
    this.xSpd = Math.random() * 3;
    this.ySpd = Math.random() * 3;
    this.beta = Math.random() * Math.PI * 0.5;
}
starObj.prototype.update = function(){
    this.x +=this.xSpd * deltaTime *0.01;
    this.y +=this.ySpd * deltaTime *0.01;
    //重生星星
    if(this.x <100 || this.x >700){
        this.init();
        return
    }
    if(this.y <150 || this.y >450){
        this.init();
        return
    }
    this.timer +=deltaTime
    if(this.timer >60){
        this.n += 1;
        this.n %= 7;
        this.timer = 0;
    }
}
starObj.prototype.draw = function(){
    //ctx.save
    //globalAlpha 全局透明度
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(starPic,this.n*7,0,7,7,this.x,this.y,7,7)
    //ctx.restore()
}
function drawStars(){
    for(var i = 0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
