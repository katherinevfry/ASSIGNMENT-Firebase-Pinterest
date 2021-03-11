const buildBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <h2>Boards</h2>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-board-btn">Create Board</button>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="board-card">
    <div class="card-body" style="height: 300px;">
      <img id="board-img" src="${item.image}">
      <h5 class="card-title">${item.title}</h5>
      <i id="open-edit-modal^^${item.firebaseKey}" data-toggle="modal" data-target="#formModal" class="far fa-edit"></i>
    </div>
  </div>`;
  });
};

export default buildBoards;
