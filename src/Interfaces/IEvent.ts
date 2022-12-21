import Entity from '../Entities/Entity/Entity';

export interface IEvent<E extends Entity> {
  action: string;
  caller: E
}

export interface IEventActions<E extends Entity>{
  name: string
  // referTo: any
  entities: {
      caller: E
      target?: E
  }
}
