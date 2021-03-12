import { getBoards } from '../../helpers/boardData';
import { getPins, searchPins } from '../../helpers/pinData';
// import showPublicPins from '../../helpers/showPublicPins';
import { mergeUserPins } from '../../helpers/userData';
import buildBoards from '../boards';
import createPins from '../pins';
// import showUserOnPin from '../showUserOnPin';

const navEvents = (uid) => {
  document.querySelector('#boards-link').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => buildBoards(boardsArray));
  });

  document.querySelector('#pins-link').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => createPins(pinsArray));
  });

  document.querySelector('#explore-page').addEventListener('click', () => {
    mergeUserPins().then((userPinsObject) => {
      const pubPins = userPinsObject.publicPins;
      const userInfo = userPinsObject.user;
      const combinedData = pubPins.filter(() => uid === userInfo.uid);
      console.warn(combinedData);
      // showPublicPins(bigObj);
      // showUserOnPin(bigObj);
    });
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
