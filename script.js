let input = document.querySelector('#input-filed');
let button = document.querySelector('button');
let list = document.querySelector('#list-container');
button.addEventListener('click',function(e) {
    if(input.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span. innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveDate();
});

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();