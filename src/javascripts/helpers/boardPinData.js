// SHOW PINS ASSOCIATED WITH SINGLE BOARDS

import { getSingleBoard } from './boardData';
import { getBoardPins } from './pinData';

const pinBoardInfo = (authorId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(authorId);
  const boardPins = getBoardPins(authorId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, boardPins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

export default pinBoardInfo;
