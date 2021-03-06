import { deleteBoardPins, pinBoardInfo } from '../../helpers/boardPinData';
import { deletePin } from '../../helpers/pinData';
import boardInfo from '../boardInfo';
import createPins from '../pins';
import createBoards from '../boards';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
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
      deleteBoardPins(firebaseKey).then((boardsArray) => createBoards(boardsArray));
    }
  });
};

export default domEvents;
