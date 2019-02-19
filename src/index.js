import './styles/game.css';// imports css here 
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256); //numbers are w and h 

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
