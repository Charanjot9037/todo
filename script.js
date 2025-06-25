
const input = document.getElementById("input-box");
const listcontainer = document.getElementById("list");

function addtask() {
    if (input.value === '') {
        alert("Please enter something");
    } else {
        let li = document.createElement('li');
    
        
        li.innerText = input.value.toUpperCase();
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("bk");
        li.appendChild(span);

        let btn = document.createElement("button");
        btn.innerText = "Update";
        btn.classList.add("btn2");
        li.appendChild(btn);

        let inp2 = document.createElement("input");
        inp2.classList.add("inp2");
        inp2.value = input.value;
        inp2.style.display = "none"; // hidden by default
        li.appendChild(inp2);
    }

    input.value = "";
    setdata();
}

let key = "name";

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        setdata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        setdata();
    } else if (e.target.tagName === "BUTTON") {
        const li = e.target.parentElement;
        const inp2 = li.querySelector(".inp2");

        if (e.target.innerText.toLowerCase() === "update") {
        
            inp2.style.display = "flex";
            inp2.focus();
            li.childNodes[0].nodeValue = ""; 
            e.target.innerText = "Save";
        } else {
            if(inp2.value=='')
            {
                alert("Enter something");
            }
            else{
            const newValue = inp2.value.toUpperCase();
            li.childNodes[0].nodeValue = newValue; 
            inp2.style.display = "none";
            e.target.innerText = "Update";
            setdata();
            }
        }
    }
}, false);

function setdata() {
    localStorage.setItem("name", listcontainer.innerHTML);
}

function show() {
    listcontainer.innerHTML = localStorage.getItem("name");
}
show();

