import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const createUserInfo = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => {
          getUser().then((usersArray) => resolve(usersArray));
        });
    }).catch((error) => reject(error));
});

const getUserPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const mergeUserPins = (uid) => new Promise((resolve, reject) => {
  getUserPins(uid).then((userPinsArray) => {
    const publicPins = userPinsArray.filter((pin) => pin.public.includes(true));
    resolve(...publicPins);
  }).catch((error) => reject(error));
});

export {
  getUser,
  createUserInfo,
  mergeUserPins,
};
