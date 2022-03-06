

let ist = document.getElementById("increasesessiontime");
let dst = document.getElementById("decreasesessiontime");
let ibt = document.getElementById("increasebreaktime");
let dbt = document.getElementById("decreasebreaktime");
let st = document.getElementById("sessiontimer");
let bt = document.getElementById("breaktimer");
let start = document.getElementById("start");
// let start1 = document.getElementById("start1");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
// let pause1 = document.getElementById("pause1");
// let csess = document.getElementById("session");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let timing = document.getElementById("stopwatch");
let display = document.getElementById("display");
let studying = document.getElementById("studying");
let playing = document.getElementById("playing");
// let heading = document.getElementById("heading");
let cst = 0;
let cbt = 0;
// let session = 1;
let cm = 0;
let cm1 = 0;
let cs = 0;
let cs1 = 0;
let working = false;
let minstr = "";
let secstr = "";
let interval;
let interval1;
const timesup=new Audio('sound.mp3');
let updatec=setInterval(() => {
    updateClock();
    
}, 1000);



ist.addEventListener("click",function(){
 cst++;
 st.innerHTML=cst;   
})
dst.addEventListener("click",function(){
    if(cst>=1)
    {
 cst--;
 st.innerHTML=cst;
    }   
})
ibt.addEventListener("click",function(){
 cbt++;
 bt.innerHTML=cbt;   
})
dbt.addEventListener("click",function(){
    if(cbt>=1)
    {
 cbt--;
 bt.innerHTML=cbt;
    }   
})

start.addEventListener("click",function(){
    if(cst!=0 && cbt!=0)
    {
    // start.style.display="none";
    // pause.style.display="inline-block";
    start.disabled=true;
    // console.log("hello")
    working=true;
    cm=cst;
    cs=60;
    cm1=cbt;
    cs1=60;
    ist.disabled=true;
    dst.disabled=true;
    ibt.disabled=true;
    dbt.disabled=true;
    
    start1();
}
})
// pause.addEventListener("click",function(){
//     pause.style.display="none";
//     start.style.display="inline-block";

// })
reset.addEventListener("click",function(){
    cst=0;
    cbt=0;
    st.innerHTML=0;
    bt.innerHTML=0;
    working=false;
    clearInterval(interval);
    clearInterval(interval1);
    min.innerHTML="00";
    sec.innerHTML="00";
    stopwatch.style.color="teal";
    display.style.borderColor="teal";
    start.disabled=false;
    ist.disabled=false;
    dst.disabled=false;
    ibt.disabled=false;
    dbt.disabled=false;
})

function start1(){
    display.style.borderColor="teal";
    stopwatch.style.color="teal";
    working=true;
    cs=60;
    // cst--;
    cm=cst;
    cm--;
    if(working){      
         interval= setInterval(() => {   
         cs--;
          if(cm<10)
          {
              minstr="0"+cm;
              min.innerHTML=minstr;
            }
            else{
              min.innerHTML=cm;
          }
          if(cs<10)
          {
              secstr="0"+cs;
              sec.innerHTML=secstr;
          }
          else{
              sec.innerHTML=cs;
          }
          
          if(cm==0 && cs==0)
          {
              working=false;
              clearInterval(interval);
              timesup.play();
              break1();
            }
            else if(cs==0)
          {
              cs=60;
              cm--;
            }
            
    },1000);
    }
}
function break1(){
    display.style.borderColor="red";
    stopwatch.style.color="red";
    cs1=60;
    // cbt--;
    cm1=cbt;
    cm1--;
    working=true;
    if(working){      
         interval1= setInterval(() => {   
         cs1--;
         if(cm1<10)
          {
              minstr="0"+cm1;
              min.innerHTML=minstr;
          }
          else{
              min.innerHTML=cm1;
          }
          if(cs1<10)
          {
              secstr="0"+cs1;
              sec.innerHTML=secstr;
          }
          else{
              sec.innerHTML=cs1;
          }
          
          if(cm1==0 && cs1==0)
          {
              working=false;
              clearInterval(interval1);
              timesup.play();
              start1();
          }
          else if(cs1==0)
          {
              cs1=60;
              cm1--;
            }
            
        },1000);
    }
}

function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute or second is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 
    
    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    
    currentHour = (currentHour < 10 ? "0": "") + currentHour; 
    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentTime.getHours < 12 ) ? "AM" : "PM";

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById("currtime").innerHTML = currentTimeStr;

}












