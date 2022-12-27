import Entity from '../Entities/Entity/Entity';

export interface IEvent {
  action: string;
  caller: Entity;
}

export interface IEventActions {
  name: string;
  entities: {
    caller: Entity;
    target?: Entity;
  };
}

export interface IAttack {
  caller: Entity,
  target: Entity
}