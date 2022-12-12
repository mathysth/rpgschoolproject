import Entity from "../../Entities/Entity/Entity";
import { EntityEvent } from "../Entity/EntityEvent";
import { IEvent } from './../../Interfaces/IEvent';
import EventFactory from './../factory/EventFactory';

export default class EventActions{
    public static readonly listAction = [
        {
            name: 'attack',
            referTo: EntityEvent
        }
    ]
    
    public static handleAction<E extends Entity>(event: IEvent<E>): void{
        const test = EventFactory.formatEvent(event.action, event.caller)
        console.log('test');
        console.log(test);
        
    }
    
    public static triggerAction(){
        
    }
}

export interface IEventActions<E extends Entity>{
    name: string
    referTo: any
    entities: {
        caller: E
        target?: E
    }
}
