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

  private handleRoundAction(event: IEvent): Promise<void | string> {
    console.log(event.action);
    const target: Entity | undefined = this.handleCaseActions(event.action);
    return new Promise(function (resolve) {
      const eventFormatted: ({ key: number } & IEventActions) | void = EventFactory.formatEvent(event.action, event.caller, target);
      if (eventFormatted) {
        const eventAction = new listAction[eventFormatted.key].referTo();
        eventAction.action(eventFormatted).then((data) => {
          resolve(data);
        }).catch((e) => {
          console.log(e);
        });
      }
    })
  }

  private async handleRoundScenario(): Promise<string | void> {
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
      return this.handleRoundAction({
        action: RoundRandomCollection.percentageChance(
          gameScenario.name,
          gameScenario.meetChance
        ),
        caller: this.player
      });
    }

    return new Promise(function (resolve) {
      return handleRoundAction().then((data) => {
        resolve(data);
      })
    })
  }

  public async result() {
    ReadlineUtils.closeReadline();
  }

  public async startRound() {
    while (this.currentRound < this.maxRound) {
      this.currentRound++;
      console.log(
        `Le round ${this.currentRound} est sur le point de commencer sur un total de ${this.maxRound}`
      );
      const roundStatus = await this.handleRoundScenario()
      
      if(roundStatus === 'lost'){
        this.currentRound = this.maxRound;
        console.log('Tu as perdu pd');
        ReadlineUtils.closeReadline();
      }
    }
  }
}
