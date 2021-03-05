import createBoards from '../components/boards';
import domBuilder from '../components/domBuilder';

const startApp = () => {
  domBuilder();
  createBoards();
};

export default startApp;
