const buildBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <h1>Boards</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create Board</button>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

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

export default buildBoards;
