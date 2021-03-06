import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import { loggedOutNav } from '../components/navBuilder';
// import logoutButton from '../components/logoutButton';
// import navBuilder from '../components/navBuilder';
import startApp from '../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      // person is NOT logged in
      loggedOutNav();
      loginButton();
    }
  });
};

export default checkLoginStatus;
