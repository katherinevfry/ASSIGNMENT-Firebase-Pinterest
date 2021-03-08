import { getBoards } from '../../helpers/boardData';
import { getPins } from '../../helpers/pinData';
import buildBoards from '../boards';
import createPins from '../pins';

const navEvents = (uid) => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => buildBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => createPins(pinsArray));
  });
};

export default navEvents;
