
import Entity from '../../../Entities/Entity/Entity';
import { IEventActions } from '../../../Interfaces/IEvent';
import { Events } from '../../Abstract/Events';

export class HealEvent implements Events {
  public action(action: IEventActions) {
    const entity: Entity = action.entities.caller;
    entity.health = entity.maxHealth;
  }
}
