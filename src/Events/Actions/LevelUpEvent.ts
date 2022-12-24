import Entity from '../../Entities/Entity/Entity';
import { IEventActions } from '../../Interfaces/IEvent';
import { Events } from '../Events';
import { Human } from './../../Entities/Human/Human';

export class LevelUpEvent implements Events {
  public action(action: IEventActions<Entity>) {
    //TODO: dégager le as et forcer le typage sur l'entity human
    const entity: Human = action.entities.caller as Human;
    console.log(entity);
    entity.level = entity.level++;
    entity.health = Math.round(entity.health + entity.health * 0.1);
    console.log(entity);
  }

  //TODO: décaler dans le round
  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }
}
