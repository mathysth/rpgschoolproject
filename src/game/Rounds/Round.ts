import Entity from "../Entities/Entity/Entity";
import Events from "../Events/Events";

export default class Round<E extends Entity> {
  private currentRound: number = 0;
  private readonly event: Events<E> = new Events();
  private readonly gameScenario = [
    {
      meetChance: 50,
      name: "attack"
    },
    {
      meetChance: 25,
      name: "healer"
    },
    {
      meetChance: 25,
      name: "levelUp"
    }
  ];
  private maxRound: number;
  private readonly player: E;
  constructor(maxRound: number, player: E) {
    this.maxRound = maxRound;
    this.player = player;
  }

  private handleRoundScenario() {
    const gameScenario: {
      meetChance: Array<string>,
      name: Array<string>,
    } = {
      meetChance: [],
      name: [],
    }
    for (let i = 0; i < this.gameScenario.length; i++) {
      gameScenario.meetChance.push(this.gameScenario[i].meetChance.toString());
      gameScenario.name.push(this.gameScenario[i].name);
    }

    //this.event.emit({action: RandomCollection.percentageChance(gameScenario.name, gameScenario.meetChance), caller: this.player});
  }

  public startRound() {
    this.currentRound++;
    console.log(`Le round ${this.currentRound} est sur le point de commencer`)
    this.handleRoundScenario();
  }
}
