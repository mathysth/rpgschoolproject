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
    entity.health = Math.round(entity.health + entity.health * 0.1);
    entity.usebalePoints+= 3;

    const pointDistribution = new DistributePointsEntityScenario(entity);
    await pointDistribution.distribute();
  }

  //TODO: décaler dans le round
  public isDead(entity: Entity): boolean {
    return entity.health <= 0;
  }
}
