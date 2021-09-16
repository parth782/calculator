//console.log("hello");
let screenvalue="";
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
for( item of buttons){
    item.addEventListener("click",(e)=>{
        buttontext=e.target.innerText;
        console.log(buttontext);
        if(buttontext=='x'){
            buttontext='*';
            screenvalue+=buttontext
            screen.value=screenvalue;
        }
        else if(buttontext=='='){
           try{
               eval(screenvalue)
               
           }
           catch(err){
               
            screen.value="";
               screenvalue="";
              // console.log("inside catch");
               
           }
           screen.value=eval(screenvalue);
            screenvalue=screen.value;
            
        }
        else if(buttontext=='C'){
            screen.value="";
            screenvalue="";
        }
        else{
            screenvalue+=buttontext
            screen.value=screenvalue;
        }
    })
}
