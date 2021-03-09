import firebase from 'firebase/app';
import 'firebase/auth';
import { deleteBoardPins, pinBoardInfo } from '../../helpers/boardPinData';
import {
  createPin, deletePin, getSinglePin, updatePin
} from '../../helpers/pinData';
import boardInfo from '../boardInfo';
import createPins from '../pins';
import buildBoards from '../boards';
import createBoardForm from './createBoardForm';
import { createBoard } from '../../helpers/boardData';
import createPinForm from './createPinForm';
import formModal from '../formModal';
import editPinForm from '../editPinForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      createBoardForm();
    }
    // GET BOARD INFO OFF FORM
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        uid: firebase.auth().currentUser.uid,
      };
      createBoard(boardObject, uid).then((boardsArray) => buildBoards(boardsArray));
    }
    // CLICK EVENT FOR SHOWING A BOARD'S PINS
    if (e.target.id.includes('show-pins-btn')) {
      const boardId = e.target.id.split('^^')[1];
      pinBoardInfo(boardId).then((boardInfoObject) => {
        createPins(boardInfoObject.boardPins);
        boardInfo(boardInfoObject.board);
      });
    }
    // DELETE PINS
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('^^')[1];
      deletePin(firebaseKey, uid).then((pinsArray) => createPins(pinsArray));
    }
    // DELETE BOARDS AND ASSOCIATED PINS
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('^^')[1];
      deleteBoardPins(firebaseKey, uid).then((boardsArray) => buildBoards(boardsArray));
    }
    // GET PIN INFO OFF FORM
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        board_id: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid,
      };
      createPin(pinObject, uid).then((pinsArray) => createPins(pinsArray));
    }
    // CLICK EVENT FOR ADDING PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      createPinForm();
    }
    // CLICK EVENT FOR SHOWING MODAL
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('^^')[1];
      formModal();
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }
    // CLICK EVENT FOR EDITING PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('&&')[1];
      e.preventDefault();
      const pinObject = {
        board_id: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject, uid).then((pinsArray) => createPins(pinsArray));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
