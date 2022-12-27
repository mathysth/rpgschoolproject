import Entity from '../Entities/Entity/Entity';
import { Human } from '../Entities/Human/Human';
import { Round } from '../Rounds/Round';
import { CharactereCreationScenario } from './Entity/CharactereCreation';
import { DistributePointsEntityScenario } from './Entity/DistributePointsEntity';

export class GameScenarioManager {
  private player: Human | undefined;
  private round: Round | undefined;

  public async pause() {}

  public async start() {
    const player: Human = new Human();
    this.player = player;
    const characterCreation: CharactereCreationScenario = new CharactereCreationScenario(this.player);
    const distributePointsEntityScenario: DistributePointsEntityScenario = new DistributePointsEntityScenario(this.player);
    await characterCreation.initialize();
    await distributePointsEntityScenario.distribute();
    this.startRound(20, this.player);
  }

  public async startRound(maxRound: number, player: Entity) {
    this.round = new Round(20, player);
    this.round.startRound();
    //TODO: setup le scenario afin de lancer une partie et tester le systeme de random sur les pourcentages
  }

  public async stop() {}
}
