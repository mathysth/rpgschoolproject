import Entity from "../../Entities/Entity/Entity";
import EventActions, { IEventActions } from '../Actions/EventActions';

export default class EventFactory{

    public static formatEvent<E extends Entity>(event: string, caller: E, target?: E): IEventActions<Entity> | boolean{
        for (let i = 0; i < EventActions.listAction.length; i++) {
            if(EventActions.listAction[i].name === event){
                let eventObject = {
                    entities: {
                        caller,
                        target: target? target: undefined,
                    }
                };
                return  {...EventActions.listAction[i], ...eventObject}
            }
        }

        return false;
    }
}
