import Entity from "../../Entities/Entity/Entity";
import { IEvent } from './../../Interfaces/IEvent';
import { EventFactory } from './../factory/EventFactory';
import { HealEvent } from './HealEvent';

export class EventActions{
    public static readonly listAction = [
        {
            name: 'attack',
            referTo: HealEvent
        },
    ]
    
    public static handleAction<E extends Entity>(event: IEvent<E>): void{
        console.log(event );
        
        const test: {key: number} & IEventActions<Entity> | void = EventFactory.formatEvent(event.action, event.caller);        
        if(test){
            const eventAction = new this.listAction[test.key].referTo();
            console.log(eventAction);
        }
        console.log(test);   
    }

}

export interface IEventActions<E extends Entity>{
    name: string
    // referTo: any
    entities: {
        caller: E
        target?: E
    }
}
