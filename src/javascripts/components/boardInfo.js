const boardInfo = (board) => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#header').innerHTML += `
  <h2>${board.title}</h2>`;
};

export default boardInfo;
