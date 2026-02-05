let font=JSON.parse(localStorage.getItem('fontStr')) || 16;
const para=document.querySelector('#textbox');
    


function setSize(){
   
    para.style.fontSize=font +"px";
}

function increment(){
    if(font<=30){
        font+=2;
    }
    else return;
    
    localStorage.setItem('fontStr', JSON.stringify(font));
    setSize();
}

function decrement(){
    if(font>10){
        font-=2;
    }
    else return;
    localStorage.setItem('fontStr', JSON.stringify(font));
    setSize();
}

function reset(){
    font=16;
    localStorage.removeItem('fontStr');
    setSize();
}
setSize();