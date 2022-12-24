import Entity from '../../Entities/Entity/Entity';
import { IEventActions } from '../../Interfaces/IEvent';

export abstract class Events {
  action(action: IEventActions<Entity>) {}
}
