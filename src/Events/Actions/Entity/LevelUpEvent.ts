import Entity from '../../../Entities/Entity/Entity';
import { Human } from '../../../Entities/Human/Human';
import { IEventActions } from '../../../Interfaces/IEvent';
import { DistributePointsEntityScenario } from '../../../Scenario/Entity/DistributePointsEntity';
import { Events } from '../../Abstract/Events';

export class LevelUpEvent implements Events {
  public async action(action: IEventActions) {
    //TODO: dégager le as et forcer le typage sur l'entity human
    const entity: Human = action.entities.caller as Human;
    entity.setLevel(entity.level + 1);
    const healthToRestore = Math.round(entity.health + entity.health * 0.1);
    if(healthToRestore > entity.maxHealth){
      entity.health = entity.maxHealth
    }else{
      entity.health = healthToRestore;
    }
    entity.usebalePoints+= 3;
    
    console.log(`Maitre d'arme: En garde, espèce de vieille pute dégarnie !`);
    console.log(`Maitre d'arme: En garde, ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimbaler !`);
    console.log(`Maitre d'arme: ALLEZ, EN GARDE GROSSE CONNE !`);
    
    const pointDistribution = new DistributePointsEntityScenario(entity);
    await pointDistribution.distribute();
    
    console.log(`Vous avez montez de 1 niveau voici vos nouvelles stats:`);
    console.log(`
      Attaque: ${entity.damage}
      Vie: ${entity.health}
      Bouclier: ${entity.shield}
    `);
  }

  //TODO: décaler dans le round
  public isDead(entity: Entity): boolean {
    return entity.health <= 0;
  }
}
