// import { Game } from './Game';
import { Human } from './Entities/Human/Human';
import { DistributePointsEntity } from './Scenario/Entity/DistributePointsEntity';

// const game: Game = new Game({
//   round: 20
// });

// game.startGame();

const dist = new DistributePointsEntity(new Human());