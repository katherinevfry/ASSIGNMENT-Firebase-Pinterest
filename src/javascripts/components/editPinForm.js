import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-form" class="mb-4">
    <div class="form-group" id="select-board">
    </div>
    <button type="button" id="update-pin&&${pinObject.firebaseKey}" class="btn btn-danger">Update Pin</button>`;
  selectBoard(pinObject);
};

export default editPinForm;
