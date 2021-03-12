import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getPublicPins } from './pinData';

const dbUrl = firebaseConfig.databaseURL;

const getUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
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

const mergeUserPins = () => new Promise((resolve, reject) => {
  const user = getUsers();
  const publicPins = getPublicPins();
  Promise.all([user, publicPins])
    .then(([userResponse, publicPinsResponse]) => resolve(
      { user: userResponse, publicPins: publicPinsResponse }
    )).catch((error) => reject(error));
});

export {
  getUser,
  createUserInfo,
  mergeUserPins,
};
