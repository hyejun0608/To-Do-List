axios.get('http://52.78.41.100:8000/todo', {
    header: {
      "access-token": "access-token"
    }
})
.then (
    newElement()
)
.catch(error => {
    console.log(error);
})

function checked(event) {
    const checking = event.target;
    if(checking.nextElementSibling.className !== "checked") {
        checking.nextElementSibling.className = "checked";
    }
    else {
        checking.nextElementSibling.className = "";
    }
}

function removedclick() {
    axios.delete('http://52.78.41.100:8000/todo'. {
        path : {
            "id": id
        },
        header : {
            "access-token": "access-token"
        }
    })
    .then (
        removed()
    )
    .catch(error => {
        console.log(error);
    })
}

function removed(event) {
    const btn = event.target;
    const removelist = btn.parentElement;
    removelist.remove();
}


function newElement() {
    const li = document.createElement("li");
    //newspan
    const newspan = document.createElement("span");
    li.appendChild(newspan);
    // removebtn
    const removebtn = document.createElement("button");
    removebtn.innerText = "X";
    removebtn.className = "deletebtn";
    li.appendChild(removebtn);
    removebtn.addEventListener("click", removedclick);
    const checkbtn = document.createElement("button");
    checkbtn.innerText = "✔";
    checkbtn.className = "checkebtn";
    li.appendChild(checkbtn);
    checkbtn.addEventListener("click", checked);
}