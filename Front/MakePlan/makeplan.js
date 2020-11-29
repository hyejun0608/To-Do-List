const content = document.querySelector('.plan');

function onButtonClicked() {
  axios.post('http://52.78.41.100:8000/todo', {
      body: {
          "content": content.value
      },
      header: {
        "access-token": localStorage.getItem("access-token")
      }
  })
  .then (
      alert("투두 리스트 작성에 성공하셨습니다!")
  )
  .catch(error => {
      console.log(error);
  })
}