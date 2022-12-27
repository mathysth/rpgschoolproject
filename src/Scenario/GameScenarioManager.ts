import { Human } from '../Entities/Human/Human';
import { Round } from '../Rounds/Round';
import { CharactereCreationScenario } from './Entity/CharactereCreation';
import { DistributePointsEntityScenario } from './Entity/DistributePointsEntity';

export class GameScenarioManager {
  private player: Human;
  private round: Round | undefined;

  constructor() {
    const player: Human = new Human();
    this.player = player;
  }

  public async pause() {}

  public async start(round: number) {
    const characterCreation: CharactereCreationScenario = new CharactereCreationScenario(this.player);
    const distributePointsEntityScenario: DistributePointsEntityScenario = new DistributePointsEntityScenario(this.player);
    await characterCreation.initialize();
    await distributePointsEntityScenario.distribute();
    this.startRound(round);
  }

  public async startRound(maxRound: number) {
    this.round = new Round(maxRound, this.player);
    this.round.startRound();
  }

  public async stop() {}
}
