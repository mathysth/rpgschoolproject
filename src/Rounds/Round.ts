import Entity from '../Entities/Entity/Entity';
import { EventFactory } from '../Events/Factory/EventFactory';
import { listAction } from './../Events/Actions/Actions';
import { IEvent, IEventActions } from './../Interfaces/IEvent';
import { RoundRandomCollection } from './../Utils/RamdomCollection';

export class Round {
  private currentRound: number = 0;
  private readonly gameScenario = [
    {
      meetChance: 50,
      name: 'attack'
    },
    {
      meetChance: 25,
      name: 'healer'
    },
    {
      meetChance: 25,
      name: 'levelUp'
    }
  ];
  private maxRound: number;
  private readonly player: Entity;

  constructor(maxRound: number, player: Entity) {
    this.maxRound = maxRound;
    this.player = player;
  }

  public startRound() {
    this.currentRound++;
    console.log(
      `Le round ${this.currentRound} est sur le point de commencer sur un total de ${this.maxRound}`
    );
    this.handleRoundScenario();
  }

  private handleRoundScenario() {
    const gameScenario: {
      meetChance: Array<string>;
      name: Array<string>;
    } = {
      meetChance: [],
      name: []
    };
    for (let i = 0; i < this.gameScenario.length; i++) {
      gameScenario.meetChance.push(this.gameScenario[i].meetChance.toString());
      gameScenario.name.push(this.gameScenario[i].name);
    }

    this.handleRoundAction({
      action: RoundRandomCollection.percentageChance(
        gameScenario.name,
        gameScenario.meetChance
      ),
      caller: this.player
    });
  }

  private handleRoundAction(event: IEvent): void {
    console.log(event.action);

    const test: ({ key: number } & IEventActions) | void =
      EventFactory.formatEvent(event.action, event.caller);
    if (test) {
      const eventAction = new listAction[test.key].referTo();
      eventAction.action(test);
      console.log(test.entities.caller)
    }
  }
}
