import Entity from '../../../Entities/Entity/Entity';
import { IEventActions } from '../../../Interfaces/IEvent';
import { Events } from '../../abstract/Events';

export class AttackEvent implements Events {
  public action(action: IEventActions) {
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

    console.log(action.entities.caller);
    console.log(action.entities.target);
  }

  //TODO: décaler dans le round
  public isDead<F extends Entity>(entity: F): boolean {
    return entity.health <= 0;
  }
}
