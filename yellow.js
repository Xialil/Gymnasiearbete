var w,h,g,el,my={}
var firstshapeTime;
var timeID;
var state;

function reactionMain(){
    w=1500;
    h=500;
    clrs=["orange"];
    this.MAX=5;
    this.count=0;
    this.times=[];
    var s='';
    s+=`<div style="position:relative; max-width:${w}px;height:${h}px; border-radius: 10px; margin:auto; display:block; background-color: #00bfff; ">`;
    s+='<canvas id="canvasId" width="'+w+'" height="'+h+'" style=""></canvas>';
    startStr='Klicka för att börja.';
    s+='<div id="instr" style="position: absolute; left:100px; top:100px; width:360px; font:18px Verdana; color: whitesmoke; background-color: #00bfff; border-radius: 10px; padding: 3%; transition: all linear 0.1s;">'+startStr+'</div>';
    s+='<div id="orange" style="display: block; background-color: '+clrs[0]+'; position: absolute; left:40%; top:40%; width:100px; height:100px; border-radius:50px; opacity: 0; "></div>';
    s+='<div id="result" style="position: absolute; left:5%; top:50px; width:90%; font:18px Verdana; color: whitesmoke; text-align: center;"></div>';
    s+='<div id="click" style="position: absolute; left:0; top:0; width:100%; height:100%; background-color: rgba(0,0,0,0); cursor: pointer;" onmousedown="doClick()"></div>';
    s+='</div>';
    document.write(s);
    el=document.getElementById('canvasId');
    ratio=2;el.width=w*ratio;
    el.height=h*ratio;
    el.style.width=w+"px";
    el.style.height=h+"px";
    g=el.getContext("2d");
    g.setTransform(ratio,0,0,ratio,0,0);
    showColor('default',)
    state='start';
}

function showColor(figureName) {
    var orangeDiv = document.getElementById('orange');
    switch(figureName) {
        case 'orange':
            orangeDiv.style.opacity = 1;
            break;
        case 'default':
            orangeDiv.style.opacity = 0;
            break;
    }

}

function doFirstcolor() {
    var time=1500+Math.random()*2000;    
    timeID=setTimeout(
        function() {stateMachine('timeout');},
        time
    ); 
    document.getElementById('instr').innerHTML='Klicka när du ser orange';
    g.clearRect(0,0,el.width,el.height);
    state='firstcolor';
}

function doMeasure() {
    firstshapeTime=performance.now();
    clearTimeout(timeID);
    showColor('orange');
    state='measure';
}

function doTooEarly() {
    document.getElementById("instr").innerHTML="För tidigt, klicka för att försöka igen";
    clearTimeout(timeID);
    showColor('default');
    state = 'tooearly';
}

function doResult() {
    var clickTime=performance.now();
    elapsed=(clickTime-firstshapeTime)/1000;
    times.push(elapsed);
    document.getElementById("result").innerHTML=showResult();
    document.getElementById('instr').innerHTML="Bra jobbat! Klicka för nästa mätning";
    this.count++;
    showColor('default');
    if(this.count==this.MAX) {
        doFinished();
    } else {
        state='result';
    }
}

function doFinished() {
    document.getElementById('instr').innerHTML="Mätningen avklarad, tack för din medverkan!<br>"+showAverage();
}

function stateMachine(eventName){
    console.log('stateMachine(' + eventName + ')');
    switch(state){
        case 'start':
            if(eventName == 'click') {
                doFirstcolor();
            }
            break;
        case 'firstcolor':
            if(eventName == 'timeout') {
                doMeasure();
            } else if(eventName == 'click') {
                doTooEarly();
            }
            break;
        case 'tooearly':
            if(eventName == 'click') {
                doFirstcolor();
            }
            break;   
        case 'measure':
            if(eventName == 'click') {
                doResult();
            }
            break;
        case 'result':
            if(eventName == 'click') {
                doFirstcolor();
            }
            break;
        default:
    }
}

function doClick() {
    stateMachine('click');
}

function showResult(){
    var s='';
    var timesN=this.times.length;
    for(var i=0;i<timesN;i++) {
        if(i>0)s+=', ';
        s+=fmt3(this.times[i])+'s';
    }
    return s;
}

function showAverage() {
    var s='';
    var timesN=this.times.length;
    var sum=0;
    for(var i=0;i<timesN;i++) {
        sum+=this.times[i];
    }
    var avg=sum/this.times.length;
    s+='Genomsnitt: '+fmt3(avg)+' sec';
    return s;
}

function fmt3(v){return Math.round(v*1000)/1000}

