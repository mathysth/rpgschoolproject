import Entity from '../../../Entities/Entity/Entity';
import { Human } from '../../../Entities/Human/Human';
import { IEventActions } from '../../../Interfaces/IEvent';
import { Events } from '../../abstract/Events';

export class LevelUpEvent implements Events {
  public action(action: IEventActions<Entity>) {
    //TODO: dégager le as et forcer le typage sur l'entity human
    const entity: Human = action.entities.caller as Human;
    entity.level = entity.level+= 1;
    entity.health = Math.round(entity.health + entity.health * 0.1);
  }

  //TODO: décaler dans le round
  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }
}
