const createBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <h1>Boards</h1>`;
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="board-card">
    <div class="card-body" style="height: 300px;">
      <img id="board-img" src="${item.image}">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <button class="btn btn-outline-danger" id="show-pins-btn^^${item.firebaseKey}">Show Pins</button>
      <button class="btn btn-outline-danger" id="delete-board^^${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

export default createBoards;
