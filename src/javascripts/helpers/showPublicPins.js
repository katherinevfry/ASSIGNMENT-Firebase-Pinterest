const showPublicPins = (array, user) => {
  document.querySelector('#header').innerHTML = `
  <h2>Explore</h2>`;
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="pin-card">
    <div class="card-body" style="height: 300px;;">
      <img id="pin-img" src="${item.image}">
      <h5 class="card-title">${item.title}</h5>
      <p>${item.description}</p>
      <div class="d-flex flex-row">
        <img id="user-img" src="${user.photoURL}">
        <h6 id="user-name">${user.displayName}</h6>
      </div>
    </div>
  </div>`;
  });
};

export default showPublicPins;
