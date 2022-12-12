import Entity from "../../Entities/Entity/Entity";
import { IEventActions } from "../Actions/EventActions";
import Events from "../Events";

export class EntityEvent extends Events<Entity>{
  protected action(action: IEventActions<Entity>) {
    switch (action.name) {
      case "attack": {
        this.attack(action.entities.caller, action.entities.target as Entity);
        break;
      }
    }
  }

  public attack<F extends Entity>(attacker: F, receiver: F) {
    let damage = attacker.damage;
    if (receiver.shield > 0) {
      const currentShield = receiver.shield;
      receiver.shield -= damage;
      damage = attacker.damage - currentShield;
    }
    if (damage > 0) {
      receiver.health -= damage;
    }
  }

  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }
}
