let inp=document.querySelector("input")
let btn=document.querySelector("button")
let msgbox=document.querySelector("ul")
let cross=document.querySelector(".clear")
let currentTime = new Date();
let hour=currentTime.getHours()
let minute=currentTime.getMinutes()



const input=("click",(e)=>{
    if(inp.value===" "){
     
    }
    else{
        let p=document.createElement('p')
        let li=document.createElement("li")
        li.innerHTML=inp.value
        li.style.background="grey"
        li.style.color="white"
        li.style.fontSize="16px"
        li.style.paddingTop="10px"
        li.style.paddingBottom="10px"
        li.style.paddingLeft="20px"
        li.style.paddingRight="20px"
        p.style.fontSize="12px"
        p=`${hour}:${minute}`
        li.innerHTML=`${inp.value} ${  p}`;
        msgbox.appendChild(li)
       
    
    }
    inp.value=' '
})



cross.addEventListener("click",(e)=>{
    msgbox.innerHTML=" "
})




