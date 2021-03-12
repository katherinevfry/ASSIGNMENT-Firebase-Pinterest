import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET BOARD PINS
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE PINS
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// DELETE PINS
const deletePin = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins(uid).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

// CREATE PINS
const createPin = (pinObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins(uid).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE PINS
const updatePin = (firebaseKey, pinObject, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getPins(uid)).then((pinsArray) => resolve(pinsArray))
    .catch((error) => reject(error));
});

// SEARCH PINS
const searchPins = (uid, searchValue) => new Promise((resolve, reject) => {
  getPins(uid).then((pinsArray) => {
    const returnedPins = pinsArray.filter((pin) => pin.title.toLowerCase().includes(searchValue));
    resolve(returnedPins);
  }).catch((error) => reject(error));
});

const getPublicPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="public"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getPins,
  getBoardPins,
  deletePin,
  createPin,
  updatePin,
  getSinglePin,
  searchPins,
  getPublicPins
};
