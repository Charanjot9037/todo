const input=document.getElementById("input-box");
const listcontainer =document.getElementById("list");


function addtask(){
   if(input.value=='')
   {
    alert("Please enter something");
   }
   else{
    
    let li=document.createElement('li');
    li.innerText=(input.value);
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
 
}
   input.value="";
setdata();
  } 
let key="name";

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("check");
    setdata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    setdata();
    }
},false);

function setdata(){
    localStorage.setItem("name",listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML=localStorage.getItem("name");
}
    show();

