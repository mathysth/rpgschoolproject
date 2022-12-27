import Entity from '../../Entities/Entity/Entity';
import { IEventActions } from '../../Interfaces/IEvent';
import { listAction } from '../Actions/Actions';

export class EventFactory {
  public static formatEvent(
    event: string,
    caller: Entity,
    target?: Entity
  ): ({ key: number } & IEventActions) | void {
    //TODO: remettre le referto afin de pointer le controller d'action
    for (let i: number = 0; i < listAction.length; i++) {
      if (listAction[i].name === event) {
        let eventObject = {
          entities: {
            caller,
            //TODO: Ajouter les entity si besoin afin de lancer une action sur la target
            target: target ? target : undefined
          }
        };
        return { key: i, ...listAction[i], ...eventObject };
      }
    }
  }
}
