import { createUserInfo } from '../helpers/userData';

const grabUserInfo = (user) => {
  const userObject = {
    name: user.displayName,
    photo: user.photoURL,
    uid: user.uid
  };
  createUserInfo(userObject).then((usersArray) => console.warn(usersArray));
};

export default grabUserInfo;
