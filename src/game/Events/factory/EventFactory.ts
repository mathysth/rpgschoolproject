import Entity from "../../Entities/Entity/Entity";
import EventActions, { IEventActions } from '../Actions/EventActions';

export default class EventFactory{

    public static formatEvent<E extends Entity>(event: string, caller: E, target?: E): {key: number} &  IEventActions<Entity> | void{
        //TODO: remettre le referto afin de pointer le controller d'action
        for (let i: number = 0; i < EventActions.listAction.length; i++) {
            if(EventActions.listAction[i].name === event){
                let eventObject = {
                    entities: {
                        caller,
                        //TODO: Ajouter les entity si besoin afin de lancer une action sur la target 
                        target: target? target: undefined,
                    }
                };
                return  {key: i, ...EventActions.listAction[i], ...eventObject}
            }
        }
    }
}
