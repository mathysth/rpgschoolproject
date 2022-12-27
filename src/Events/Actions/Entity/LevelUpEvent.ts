import Entity from '../../../Entities/Entity/Entity';
import { Human } from '../../../Entities/Human/Human';
import { IEventActions } from '../../../Interfaces/IEvent';
import { DistributePointsEntityScenario } from '../../../Scenario/Entity/DistributePointsEntity';
import { Events } from '../../abstract/Events';

export class LevelUpEvent implements Events {
  public action(action: IEventActions) {
    //TODO: dégager le as et forcer le typage sur l'entity human
    const entity: Human = action.entities.caller as Human;
    entity.level = entity.level+= 1;
    entity.health = Math.round(entity.health + entity.health * 0.1);
    entity.usebalePoints+= 3;

    const test = new DistributePointsEntityScenario(entity);
    test.distribute();
  }

  //TODO: décaler dans le round
  public isDead(entity: Entity): boolean {
    return entity.health <= 0;
  }
}
