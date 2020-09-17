const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const login = document.querySelector(".login");

function loginCheck() {
    if ((id.value) === "") {
        alert("아이디를 입력해주세요!");
        id.focus();
        return false;
    }
    if ((pw.value) === "") {
        alert("비밀번호를 입력해주세요!");
        pw.focus();
        return false;
    }
    login.submit;
}
function onClicked() {
    loginCheck();
    axios.post('http://13.125.221.189:8000/user/login', {
        "userId": id.value,
        "password": pw.value
    })
    .then ( res => {
        alert("로그인 성공했습니다!")
        console.log(res)
    }
    )
    .catch(error => {
        console.log(error);
    })
  }