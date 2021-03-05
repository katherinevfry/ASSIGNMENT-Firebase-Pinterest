const createPins = (array) => {
  document.querySelector('#header').innerHTML = `
  <h1>Pins</h1>`;
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="pin-card">
    <div class="card-body" style="width: 20rem;">
      <img id="pin-img" src="${item.image}">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <p>${item.description}</p>
      <hr>
      <button class="btn btn-outline-danger" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-outline-danger" id="delete-board--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

export default createPins;