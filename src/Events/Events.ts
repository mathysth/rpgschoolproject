import Entity from "../Entities/Entity/Entity";
import { IEvent, IEventActions } from './../Interfaces/IEvent';
import { listAction } from './Actions/Actions';
import { EventFactory } from './factory/EventFactory';
 
export class Events {

  protected action(action: IEventActions<Entity>) {}

  public emit<E extends Entity>(event: IEvent<E>, callback?: Function) {
    this.triggerAction(event);
 }

  private triggerAction<E extends Entity>(event: IEvent<E>): boolean{
    const eventResult = this.handleAction(event);
    return true;
  }

  private handleAction<E extends Entity>(event: IEvent<E>): void{
    console.log(event );
    
    const test: {key: number} & IEventActions<Entity> | void = EventFactory.formatEvent(event.action, event.caller);        
    if(test){
        const eventAction = new listAction[test.key].referTo();
        console.log(eventAction);
    }
    console.log(test);   
  }
}
