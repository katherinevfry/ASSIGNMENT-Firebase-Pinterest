import { getBoards } from '../../helpers/boardData';
import { getPins, searchPins } from '../../helpers/pinData';
import buildBoards from '../boards';
import createPins from '../pins';

const navEvents = (uid) => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => buildBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => createPins(pinsArray));
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (e.keyCode === 13) {
      searchPins(uid, searchValue).then((pinObject) => createPins(pinObject));

      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
