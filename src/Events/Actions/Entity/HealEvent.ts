
import Entity from '../../../Entities/Entity/Entity';
import { IEventActions } from '../../../Interfaces/IEvent';
import { Events } from '../../Abstract/Events';

export class HealEvent implements Events {
  public async action(action: IEventActions) {
    const entity: Entity = action.entities.caller;
    entity.health = entity.maxHealth;
    console.log(`Merlin t'a restaurĂ© 100% de tes hp : ${entity.health}`);
  }
}
