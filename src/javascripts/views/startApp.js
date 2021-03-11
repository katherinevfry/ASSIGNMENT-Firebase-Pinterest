import buildBoards from '../components/boards';
import domBuilder from '../components/domBuilder';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import { navBuilder } from '../components/navBuilder';
import { getBoards } from '../helpers/boardData';
import domEvents from '../components/events/domEvents';
import showUserInfo from '../components/showUserInfo';

const startApp = (user) => {
  domBuilder();
  navBuilder();
  showUserInfo(user);
  domEvents(user.uid);
  navEvents(user.uid, user);
  logoutButton();
  getBoards(user.uid).then((boards) => buildBoards(boards));
};

export default startApp;
