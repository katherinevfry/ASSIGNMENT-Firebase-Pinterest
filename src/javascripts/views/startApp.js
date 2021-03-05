import createBoards from '../components/boards';
import domBuilder from '../components/domBuilder';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import { navBuilder } from '../components/navBuilder';
import getBoards from '../helpers/boardData';

const startApp = () => {
  domBuilder();
  navBuilder();
  navEvents();
  logoutButton();
  getBoards().then((boards) => createBoards(boards));
};

export default startApp;
