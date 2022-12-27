import Entity from '../../Entities/Entity/Entity';
import { IEventActions } from '../../Interfaces/IEvent';
import { listAction } from '../Actions/Actions';

export class EventFactory {
  public static formatEvent(
    event: string,
    caller: Entity,
    target?: Entity
  ): ({ key: number } & IEventActions) | void {
    for (let i: number = 0; i < listAction.length; i++) {
      if (listAction[i].name === event) {
        let eventObject = {
          entities: {
            caller,
            target: target ? target : undefined
          }
        };
        return { key: i, ...listAction[i], ...eventObject };
      }
    }
  }
}
