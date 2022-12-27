import Entity from '../Entities/Entity/Entity';
import { EventFactory } from '../Events/Factory/EventFactory';
import { Human } from './../Entities/Human/Human';
import Mob from './../Entities/Mob/Mob';
import { listAction } from './../Events/Actions/Actions';
import { IEvent, IEventActions } from './../Interfaces/IEvent';
import { RoundRandomCollection } from './../Utils/RamdomCollection';
import { ReadlineUtils } from './../Utils/Readline';

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
  private readonly player: Human;

  constructor(maxRound: number, player: Human) {
    this.maxRound = maxRound;
    this.player = player;
  }

  public async startRound() {
    while (this.currentRound < 1) {
      this.currentRound++;
      console.log(
        `Le round ${this.currentRound} est sur le point de commencer sur un total de ${this.maxRound}`
      );
      await this.handleRoundScenario()
    }
    // this.result();
  }

  public async result() {
    ReadlineUtils.closeReadline();
  }

  private async handleRoundScenario(): Promise<void> {
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

    const handleRoundAction = async () => {
      this.handleRoundAction({
        action: RoundRandomCollection.percentageChance(
          gameScenario.name,
          gameScenario.meetChance
        ),
        caller: this.player
      });
    }

    return new Promise(function (resolve) {
      handleRoundAction().then(() => {
        resolve();
      })
    })
  }

  private handleRoundAction(event: IEvent): Promise<void> {
    console.log(event.action);
    const target: Entity | undefined = this.handleCaseActions(event.action);
    return new Promise(function (resolve) {
      const eventFormatted: ({ key: number } & IEventActions) | void = EventFactory.formatEvent(event.action, event.caller, target);
      if (eventFormatted) {
        const eventAction = new listAction[eventFormatted.key].referTo();
        eventAction.action(eventFormatted).then(() => {
          resolve();
        }).catch((e) => {
          console.log(e);
        });
      }
    })
  }

  private handleCaseActions(action: string): Entity | undefined {
    switch (action) {
      case 'attack': {
        const mob = new Mob();
        mob.name = 'Alfred';
        mob.damage = 12 + this.player.level * 2;
        mob.shield = 12 + this.player.level * 2;
        mob.health = 25 + this.player.level * 2;
        mob.maxHealth = 25 + this.player.level * 2;

        return mob;
      }
    }

    return undefined;
  }
}
