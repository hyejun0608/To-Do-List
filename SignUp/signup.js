const signup = document.querySelector('#signup');
const name = document.querySelector('.nameinput');
const id = document.querySelector('.id');
const pw = document.querySelector('.pw');

function valuetest() {
    if ((name.value) === "") {
        alert("이름을 입력해주세요!");
        name.focus();
        return false;
    }
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
    signup.submit;
}

function onButtonClicked() {
    valuetest();
    axios.post('http://52.78.41.100:8000/user/register', {
        data: {
            'name': 'name.value',
            'userId': 'id.value',
            'password': 'pw.value'
        }
    })
    .then (
        alert("회원가입에 성공하셨습니다!")
    )
    .catch(error => {
        console.log(error);
    })
}