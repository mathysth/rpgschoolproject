import Entity from '../Entities/Entity/Entity';

export interface IEvent<E extends Entity> {
  action: string;
  caller: E
}