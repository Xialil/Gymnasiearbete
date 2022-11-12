

var w,h,g,el,my={}
function reactionMain(){
    this.version='0.88';
    w=500;
    h=500;
    clrs=["red","green"];
    this.MAX=5;
    this.count=0;
    this.times=[];
    var s='';
    s+=`<div style="position:relative; max-width:${w}px;height:${h}px; border-radius: 10px; margin:auto; display:block; background-color: #00bfff; ">`;
    s+='<canvas id="canvasId" width="'+w+'" height="'+h+'" style=""></canvas>';
    sttStr='Klicka för att börja.';
    s+='<div id="instr" style="position: absolute; left:50px; top:100px; width:360px; font:18px Verdana; color: whitesmoke; background-color: #00bfff; border-radius: 10px; padding: 3%; transition: all linear 0.1s;">'+sttStr+'</div>';
    endStr='';
    s+='<div id="circle" style="display: block; background-color: '+clrs[0]+'; position: absolute; left:40%; top:40%; width:100px; height:100px; border-radius:50px; opacity: 0; "></div>';s+='<div id="result" style="position: absolute; left:5%; top:50px; width:90%; font:18px Verdana; color: whitesmoke; text-align: center;"></div>';s+='<div id="click" style="position: absolute; left:0; top:0; width:100%; height:100%; background-color: rgba(0,0,0,0); cursor: pointer;" onmousedown="doClick()"></div>';
    s+='<button id="restart" onclick="restart()" style="position:absolute; right:15px; bottom:15px; width:90px; z-index:2; font: 20px/24px Arial; opacity: 0;"  class="circbtn" />Again</button>';
    s+='<div id="copyrt" style="font: 10px Arial; color: white; position:absolute; left:5px; bottom:3px; user-select: none;">&copy; 2016 MathsIsFun.com  v'+this.version+'</div>';s+='</div>';document.write(s);el=document.getElementById('canvasId');ratio=2;el.width=w*ratio;el.height=h*ratio;el.style.width=w+"px";el.style.height=h+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);status='stt';}
var sttTime;
var timeID;
function circSize(d){
    var div=document.getElementById('circle');
    div.style.left=(((w-d)/2)<<0)+'px';
    div.style.top=(((w-d)/2)<<0)+'px';
    div.style.width=(d<<0)+'px';
    div.style.height=(d<<0)+'px';
    div.style.borderRadius=((d/2)<<0)+'px';
}

function makecircle(){
    circSize(40);
    var time=Math.random();6
    time=1500+time*2500;
    timeID=setTimeout(
        function(){
            document.getElementById('circle')
            .style.backgroundColor=clrs[1];
            if(this.times.length==this.MAX-1){circSize(w*1);
            }

   


status='on';sttTime=performance.now();},time);}
function restart(){status='stt';doClick();}
function doClick(){
    switch(status){case 'stt':circSize(40);
    document.getElementById("circle").style.backgroundColor=clrs[0];
    document.getElementById('circle').style.opacity=1;
    document.getElementById('instr').style.left='-999px';
    document.getElementById('instr').style.opacity=0;
    document.getElementById('restart').style.opacity=0;
    document.getElementById('result').innerHTML='';g.clearRect(0,0,el.width,el.height);
    times=[];
    status='wait';makecircle();
    break;case 'wait':document.getElementById("result").innerHTML="För tidigt";
    clearTimeout(timeID);
    makecircle();break;case 'on':var clickTime=performance.now();
    elapsed=(clickTime-sttTime)/1000;
    if(elapsed<0.1){status='wait';
    document.getElementById("result").innerHTML="Not Yet";
    clearTimeout(timeID);
    makecircle();
}else{times.push(elapsed);drawRTs();doResult();}
document.getElementById("circle").style.backgroundColor=clrs[0];status='wait';if(times.length<this.MAX){makecircle();}else{document.getElementById('circle').style.opacity=0;document.getElementById('instr').style.left='50px';document.getElementById('instr').style.opacity=1;document.getElementById('instr').innerHTML=getResult(false);style.opacity=1;status='done';}
break;default:}}
function doResult(){document.getElementById("result").innerHTML=getResult(true);}
function getResult(simpleQ){var s='';var timesN=this.times.length;var sum=0;for(var i=0;i<timesN;i++){if(i>0)s+=', ';s+=fmt3(this.times[i])+'s';sum+=this.times[i];}
var avg=sum/this.times.length;if(simpleQ)return s;s='';var simpleAvg=avg;do{var prev=avg;avg=calcMean(prev*1.6);}while(Math.abs(avg-prev)>0.001);if(Math.abs(avg-simpleAvg)<0.001){s+='Genomsnitt: '+fmt3(simpleAvg)+' sec';}else{s+='Genomsnitt: '+fmt3(simpleAvg)+' sec';}
var descr='';
s+='<br>'+descr;s+='<br><br>'+endStr;return s;}
function calcMean(out){var sum=0;var n=0;for(i=0;i<this.times.length;i++){if(this.times[i]<out){n++;sum+=this.times[i];}}
return(sum/n);}
function fmt3(v){return Math.round(v*1000)/1000}
function drawRTs(){
    var left=50;
    var top=20;
    var wd=400;g.clearRect(0,0,el.width,el.height);g.strokeStyle='white';g.beginPath();g.moveTo(left,top);g.lineTo(left+wd,top);g.stroke();for(var i=0;i<this.times.length;i++){g.fillStyle='rgba(255,255,0,0.9)';g.beginPath();pos=left+wd*this.times[i];g.arc(pos,top,5,0,Math.PI*2);g.fill();}
}