import { IEventActions } from '../../../Interfaces/IEvent';
import { RoundRandomCollection } from '../../../Utils/RamdomCollection';
import { Events } from '../../Abstract/Events';
import Entity from './../../../Entities/Entity/Entity';
import { IAttack } from './../../../Interfaces/IEvent';

export class AttackEvent implements Events {
  private chances = [
    {
      chance: 35,
      name: 'human'
    },
    {
      chance: 65,
      name: 'mob'
    }
  ]

  public async action(action: IEventActions) {
    const firstAttacker = this.defineFirstAttacker();
    let attacker: IAttack = this.getOpponent(firstAttacker, action);
    let continueFigth: Boolean = true;
    let i = 0;
    while(continueFigth){
      if(i > 0){
        if(i%2 == 0){
          attacker = this.getOpponent(firstAttacker, action)
        }else{
          attacker = this.getOpponent(this.getOppositeEntityName(firstAttacker), action);
        }
      }
      continueFigth = await this.handleFigth(attacker, action);
      i++;
    }

    // console.log(action);
    
  }

  private defineFirstAttacker(){
    const gameScenario: {
      meetChance: Array<string>;
      name: Array<string>;
    } = {
      meetChance: [],
      name: []
    };
    for (let i = 0; i < this.chances.length; i++) {
      gameScenario.meetChance.push(this.chances[i].chance.toString());
      gameScenario.name.push(this.chances[i].name);
    }

    return RoundRandomCollection.percentageChance(
      gameScenario.name,
      gameScenario.meetChance
    );
  }

  // les statistiques ont été mis à l'envers car cette fonction retourne toujours l'inverse de sa valeur
  // Exemple si j'ai 65% de chances d'avoir le mob cela voudra dire que j'ai 65% de chances d'avoir son inverse
  private getOpponent(entity: string, action: IEventActions): IAttack{
    if(entity === 'human'){
      return {
        caller: action.entities.target as Entity,
        target: action.entities.caller,
      };
    }
    return {
      caller: action.entities.caller,
      target: action.entities.target as Entity,
    };
  }

  private getOppositeEntityName(entity: string){
    if(entity === 'human'){
      return 'mob';
    }
    return 'human';
  }

  private handleFigth(entities: IAttack, action: IEventActions): boolean {
    const damage = (Math.round(Math.random() * (12 - 1)) + 1) + entities.caller.damage - entities.target.shield;
    console.log(entities.target.constructor.name);
    console.log(entities.target.health);
    entities.target.health -= damage;
    console.log(entities.target.health);
    return this.isDead(entities.target);
  }

  private isDead(entity: Entity): boolean {
    return !(entity.health <= 0);
  }
}
