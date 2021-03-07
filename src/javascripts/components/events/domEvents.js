import firebase from 'firebase/app';
import 'firebase/auth';
import { deleteBoardPins, pinBoardInfo } from '../../helpers/boardPinData';
import { deletePin } from '../../helpers/pinData';
import boardInfo from '../boardInfo';
import createPins from '../pins';
import buildBoards from '../boards';
import createBoardForm from './createBoardForm';
import { createBoard } from '../../helpers/boardData';
// import firebase from 'firebase';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      console.warn('CLICKED ADD BOARD BUTTON', e.target.id);
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
      deletePin(firebaseKey).then((pinsArray) => createPins(pinsArray));
    }
    // DELETE BOARDS AND ASSOCIATED PINS
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('^^')[1];
      deleteBoardPins(firebaseKey, uid).then((boardsArray) => buildBoards(boardsArray));
    }
  });
};

export default domEvents;
