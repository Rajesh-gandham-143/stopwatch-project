
var id = null;
var[hrs,min,sec,mil]=[0,0,0,0];
var displaytime=document.getElementById('displaytime');
function func(){
    mil=mil+10;
    if(mil==1000){
        sec=sec+1;
        mil=0;
    }
    if(sec==60){
        min=min+1;
        sec=0;
    if(min==60){
        hrs=hrs+1;
        min=0;
    }    
    }
    let h= hrs <10? "0" +hrs:hrs;
    let m= min <10? "0" +min:min;
    let s= sec <10? "0" +sec:sec;
    let mi= mil <10? "0" +mil:mil;
    displaytime.innerHTML = h+":"+m+":"+s+":"+mi;
}
function setint(){
    id=setInterval(func,10);
    document.getElementById('temp').innerHTML="you have start your timer";
}
function clearint(){
    clearInterval(id);
    document.getElementById('temp').innerHTML="you have stop your timer";
}
function resetint(){
    clearInterval(id);
    displaytime.innerHTML="00:00:00:00";
    [hrs,min,sec,mil]=[0,0,0,0];
    document.getElementById('temp').innerHTML="you have reset your timer";
    window.clearTimeout(id);
}