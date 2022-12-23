import Entity from '../Entities/Entity/Entity';
import { Human } from '../Entities/Human/Human';
import { Round } from '../Rounds/Round';

export class GameScenarioManager<E extends Entity> {
  private player: E | undefined;
  private round: Round<Entity> | undefined;

  public async pause() {}

  public async start() {
    //TODO: fix le le faite que je sois obligé de recupérer le parent sur le généric
    const player: E = new Human().getParent();
    //const pseudo = await prompt("Votre nom", "michel");
    // const maxRound = await prompt("Nombre de round", '20');
    // player.name = pseudo as string;
    this.player = player;
    this.startRound(20, this.player);
  }

  public async startRound(maxRound: number, player: E) {
    this.round = new Round(20, player);
    this.round.startRound();
    //TODO: setup le scenario afin de lancer une partie et tester le systeme de random sur les pourcentages
  }

  public async stop() {}
}
