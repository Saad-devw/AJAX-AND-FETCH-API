const resultDiv = document.querySelector('.result');

const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts/');

let output = `
      <table border="2px">
          <tr class="head">
            <td>ID</td>
            <td>Title</td>
          </tr>
`;
xhr.onload = function(){
  let response = JSON.parse(this.responseText);
  if( this.status === 200)
  {
    response.forEach( (item) => {
      output += `
        <tr>
          <td> ${item.id}</td>
          <td> ${item.title}</td>
        </tr>
      `;
    });
  }
  resultDiv.innerHTML += output + '</table>';
}
xhr.send();

