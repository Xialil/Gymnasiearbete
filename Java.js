function parseNum(x) {
    var num=x.toString().replace(/,/g,".");
    return""!==num&&parseFloat(num)
}
function gapNum(x){
    var num;
    num = document.getElementById(x).value;
    return ""!==(num=num.toString().replace(/,/g,"."))&&parseFloat(num);
}
function format2dec(x){
    return x%1!=0&&(x=x.toFixed(2)),x}
    function showResults(){
        document.getElementById("allResults").scrollIntoView({behavior:"smooth"})
    }
    var formatSeconds=r=>{
        var a=parseInt(r,10);return[Math.floor(a/3600),Math.floor(a/60)%60,a%60].map(r=>r<10?"0"+r:r).filter((r,a)=>"00"!==r||a>0).join(":")};
        function convertSeconds(x){return new Date(1e3*x).toISOString().substr(11,8)}
        function convertSeconds2(x){var t=parseInt(x,10),o=Math.floor(t/3600),r=Math.floor((t-3600*o)/60),n=t-3600*o-60*r;return o<10&&(o="0"+o),r<10&&(r="0"+r),n<10&&(n="0"+n),o+":"+r+":"+n}
        function addDecimals(num){
            return Math.round(100*num)/100}
            function isNumber(num){
                return!isNaN(num)}
                function ucfirst(str){return str[0].toUpperCase()+str.slice(1)}
                function getRandom(min,max){return Math.random()*(max-min)+min}
                function calcListener(btn,myFunction){document.getElementById(btn).addEventListener("click",myFunction)}
                function calcValidity(id){document.getElementById(id).reportValidity()}
                function invalidField(id){document.getElementById(id).classList.add("red-bg")}
                function validField(id){document.getElementById(id).classList.remove("red-bg")}
                function greenField(id){document.getElementById(id).classList.add("green-bg")}
                function ungreenField(id){document.getElementById(id).classList.remove("green-bg")}
                function prGet(id){return document.getElementById(id)}
                function clearAll(){document.querySelectorAll("input").forEach(input=>{input.value="",input.checked=!1}),document.querySelectorAll("textarea").forEach(textarea=>{textarea.innerHTML="",textarea.value=""})}
                function secondsToDhms(x){
                    var negative=!1;
                    if((x=Number(x))<0){x*=-1;var negative=!0}
                    var days=Math.floor(x/86400),hours=Math.floor(x%86400/3600),minutes=Math.floor(x%3600/60),seconds=Math.floor(x%60);return 1==negative&&(0!==days&&(days*=-1),0!==hours&&(hours*=-1),0!==minutes&&(minutes*=-1),0!==seconds&&(seconds*=-1)),{days:days,hours:hours,minutes:minutes,seconds:seconds}}
                function secondsToHHMMSS(secs){return hours=Math.floor(secs/3600),secs%=3600,minutes=Math.floor(secs/60),seconds=secs%60,seconds=1*seconds.toFixed(0),String(hours).length<1?hours="00":String(hours).length<2&&(hours="0"+hours),String(minutes).length<1?minutes="00":String(minutes).length<2&&(minutes="0"+minutes),String(seconds).length<1?seconds="00":String(seconds).length<2&&(seconds="0"+seconds),hours+":"+minutes+":"+seconds}
                function prFix(number){return void 0===number||0===number?number:number>.01||number<-.01?1*number.toFixed(2):number>1e-4||number<-1e-4?1*number.toFixed(4):number>1e-8||number<-1e-8?1*number.toFixed(8):void 0}
                const addCss=(element,cssCode)=>Object.assign(element.style,cssCode);
                function prFix2(number){return void 0===number||0===number?number:number>.1||number<-.1?1*number.toFixed(2):number>.001||number<-1e-4?1*number.toFixed(4):number>1e-7||number<-1e-7?1*number.toFixed(8):void 0}
