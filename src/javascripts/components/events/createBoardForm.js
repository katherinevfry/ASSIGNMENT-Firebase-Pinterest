const createBoardForm = () => {
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
        <button type="submit" id="submit-board" class="btn btn-danger">Submit Board</button>
      </div>`;
};

export default createBoardForm;
