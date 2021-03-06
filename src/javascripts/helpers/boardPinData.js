import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';
// SHOW PINS ASSOCIATED WITH SINGLE BOARDS
const pinBoardInfo = (authorId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(authorId);
  const boardPins = getBoardPins(authorId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { board: boardResponse, boardPins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});
// DELETE BOARDS AND THEIR PINS
const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId)));
  }).catch((error) => reject(error));
});

export { pinBoardInfo, deleteBoardPins };
