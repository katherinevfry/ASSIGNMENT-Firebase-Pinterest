import getBoards from '../../helpers/boardData';
import getPins from '../../helpers/pinData';
import createBoards from '../boards';
import createPins from '../pins';

const navEvents = () => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards().then((boardsArray) => createBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins().then((pinsArray) => createPins(pinsArray));
  });
};

export default navEvents;
