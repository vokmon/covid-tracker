/* eslint-disable */
const keyTechs = [
  'useContext',
  'scss module',
  'Chartjs',
  'Switch language with i18n',
];

export default {
  signToConsole: () => {
    console.log('%cThis website is created by %cvokmon.', 'color:black; font-size: 40px', 'color:#2185d0; font-size: 40px;');
    console.log('%cKey Features', 'color:black; font-size: 15px');
    console.table(keyTechs);
    console.log('%cMore on: %chttps://github.com/vokmon?tab=repositories', 'color:black; font-size: 18px',  'color:#2185d0; font-size: 14px');
  },
};
