import selectBoard from './selectBoard';

const formModal = (pinObject) => {
  document.querySelector('#form-container').innerHTML = `
  <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel">Edit Pin</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="modal-body">
          <form id="submit-pin-form" class="mb-4">
            <div class="form-group" id="select-board">
            </div>
          <button type="submit" id="update-pin&&${pinObject.firebaseKey}" class="btn btn-danger">Update Pin</button>
        </div>
      </div>
    </div>
  </div>`;
  selectBoard(pinObject);
};

export default formModal;
