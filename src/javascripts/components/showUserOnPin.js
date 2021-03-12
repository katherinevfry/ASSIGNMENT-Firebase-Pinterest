const showUserOnPin = (array) => {
  array.forEach((user) => {
    document.querySelector('#user-display-pins').innerHTML += `
    <img src=${user.pictureURL}>
    <h6>${user.displayName}</h6>`;
  });
};

export default showUserOnPin;
