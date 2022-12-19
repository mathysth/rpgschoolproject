import Entity from "../../Entities/Entity/Entity";
import { Events } from "../Events";
import { IEventActions } from './EventActions';

export class AttackEvent extends Events{

  protected action(action: IEventActions<Entity>) {
    const target = action.entities.target as Entity;
    let damage = action.entities.caller.damage;
    if (target.shield > 0) {
      const currentShield = target.shield;
      target.shield -= damage;
      damage = action.entities.caller.damage - currentShield;
    }
    if (damage > 0) {
      target.health -= damage;
    }
  }

  //TODO: décaler dans le round
  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }

}
