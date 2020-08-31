function checked(event) {
    const checking = event.target;
    if(checking.nextElementSibling.className !== "checked") {
        checking.nextElementSibling.className = "checked";
    }
    else {
        checking.nextElementSibling.className = "";
    }
}

function init() {
    const checkbtn1 = document.querySelector(".checkbtn1");
    checkbtn1.addEventListener("click", checked);
    const checkbtn2 = document.querySelector(".checkbtn2");
    checkbtn2.addEventListener("click", checked);
    const checkbtn3 = document.querySelector(".checkbtn3");
    checkbtn3.addEventListener("click", checked);
    const checkbtn4 = document.querySelector(".checkbtn4");
    checkbtn4.addEventListener("click", checked);
}
init();