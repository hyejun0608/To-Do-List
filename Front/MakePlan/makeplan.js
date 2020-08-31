const number = document.querySelector(".count");
const increase = document.querySelector(".plus");
const decrease = document.querySelector('.minus');
const content = doucment.querySelector('.contents');

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

function onButtonClicked() {
  axios.post('http://52.78.41.100:8000/todo', {
      header: {
        "access-token": "access-token"
      },
      data: {
          "content": content
      }
  })
  .then (
      alert("투두 리스트 작성에 성공하셨습니다!")
  )
  .catch(error => {
      console.log(error);
  })
}