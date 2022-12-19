import Entity from "../../Entities/Entity/Entity";
import { Events } from "../Events";
import { IEventActions } from './EventActions';

export class HealEvent extends Events{
  constructor(){
    super();
  }
  
  protected action(action: IEventActions<Entity>) {
    throw new Error("to implement")
  }
}
