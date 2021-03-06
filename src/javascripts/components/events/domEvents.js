import pinBoardInfo from '../../helpers/boardPinData';
import boardInfo from '../boardInfo';
import createPins from '../pins';

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
  });
};

export default domEvents;
