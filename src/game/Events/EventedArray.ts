import Entity from './../Entities/Entity/Entity';
import { IEventActions } from './Actions/EventActions';

export default class EventedArray {
  private _stack: IEventActions<Entity>[] = [];


  private useCallback(cb?: Function) {
    if (cb) {
      cb()
    }
  }

  public get(cb?: Function) {
    this.useCallback(cb);
    return this._stack;
  }

  public pop(cb?: Function) {
    this.useCallback(cb);
    return this._stack.pop();
  }

  public push(arr: IEventActions<Entity>, cb?: Function) {
    this.useCallback(cb);
    this._stack.push(arr);
  }


  set stack(value: IEventActions<Entity>[]) {
    this._stack = value;
  }

  get stack(): IEventActions<Entity>[] {
    return this._stack;
  }
}
