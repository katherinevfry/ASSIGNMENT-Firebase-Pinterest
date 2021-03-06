const boardInfo = (board) => {
  document.querySelector('#header').innerHTML += `
  <h1>${board.title}</h1>`;
};

export default boardInfo;
