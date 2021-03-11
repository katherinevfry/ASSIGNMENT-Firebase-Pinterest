const modifyBoard = (boardObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <button class="btn btn-outline-danger" id="show-pins-btn^^${boardObject.firebaseKey}">Show Pins</button>
      <button class="btn btn-outline-danger" id="delete-board^^${boardObject.firebaseKey}">Delete Board</button>
  `;
};

export default modifyBoard;
