import Entity from '../../../Entities/Entity/Entity';
import { IEventActions } from '../../../Interfaces/IEvent';
import { Events } from '../../Abstract/Events';

export class AttackEvent implements Events {
  public async action(action: IEventActions) {
    console.log(action.entities.caller);
    console.log(action.entities.target);
  }

  //TODO: décaler dans le round
  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }
}
