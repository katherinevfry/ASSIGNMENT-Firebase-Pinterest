const createPins = (array) => {
  document.querySelector('#header').innerHTML = `
  <h2>Pins</h2>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-pin-btn">Create Pin</button>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="pin-card">
    <div class="card-body">
      <img id="pin-img" src="${item.image}">
      <h5 class="card-title">${item.title}</h5>
      <p>${item.description}</p>
      <i class="far fa-edit" data-toggle="modal" data-target="#formModal" id="edit-pin-btn^^${item.firebaseKey}"></i>
      <i class="far fa-trash-alt" id="delete-pin^^${item.firebaseKey}"></i>
    </div>
  </div>`;
  });
};

export default createPins;
