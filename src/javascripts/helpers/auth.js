import firebase from 'firebase/app';
import 'firebase/auth';
import grabUserInfo from '../components/grabUserInfo';
import loginButton from '../components/loginButton';
import { loggedOutNav } from '../components/navBuilder';
import startApp from '../views/startApp';
import firebaseConfig from './apiKeys';
import { getUser } from './userData';
// import { checkIfUserExists } from './userData';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      getUser(user.uid).then((response) => {
        if (Object.values(response.data).length === 0) {
          grabUserInfo(user);
        }
      });
      startApp(user);
    } else {
      // person is NOT logged in
      loggedOutNav();
      loginButton();
    }
  });
};

export default checkLoginStatus;
