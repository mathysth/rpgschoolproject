import Entity from "../../Entities/Entity/Entity";
import { IEvent } from './../../Interfaces/IEvent';
import { EventFactory } from './../factory/EventFactory';
import { AttackEvent } from './AttackEvent';

export class EventActions{
    public static readonly listAction = [
        {
            name: 'attack',
            //TODO: comprendre pourquoi lorsque je met EntityEvent le processus crash
            referTo: AttackEvent
        },
    ]
    
    public static handleAction<E extends Entity>(event: IEvent<E>): void{
        console.log(event );
        
        const test: {key: number} & IEventActions<Entity> | void = EventFactory.formatEvent(event.action, event.caller);        
        if(test){
            const mon = new this.listAction[test.key].referTo();
            console.log('mon');
            console.log(mon);
            
        }
        console.log('test');
        console.log(test);
        
    }
    
    public static triggerAction(){
        
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
