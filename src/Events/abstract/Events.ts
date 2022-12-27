import { IEventActions } from '../../Interfaces/IEvent';

export abstract class Events {
  async action(action: IEventActions): Promise<boolean | void | string> {}
}
