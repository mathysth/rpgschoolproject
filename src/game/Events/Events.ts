import Entity from "../Entities/Entity/Entity";
import { IEvent } from './../Interfaces/IEvent';
import { EventActions, IEventActions } from "./Actions/EventActions";
import EventedArray from './EventedArray';

export class Events<E extends Entity> {
  public readonly events: EventedArray;
  constructor(callback?: Function, event?: EventedArray) {
    this.events = new EventedArray();  
  }

  protected action(action: IEventActions<Entity>) {}

  public emit(event: IEvent<E>, callback?: Function) {
    this.triggerAction(event);
    //this.events.push({ ...event }, callback);
  }

  private triggerAction(event: IEvent<E>): boolean{
    const eventResult = EventActions.handleAction(event);
    //EventFactory.formatEvent(event.name, event.entities.caller, event.entities.target);
    return true;
  }
}
