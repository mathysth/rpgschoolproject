import Entity from '../Entity/Entity';
export default class Mob extends Entity {
  private _isHostile: boolean = true;

  constructor() {
    super();
  }

  public getParent() {
    this.childEntity = this;
    return Object.getPrototypeOf(this);
  }

  public get isHostile(): boolean {
    return this._isHostile;
  }

  public set isHostile(is: boolean) {
    this._isHostile = is;
  }
}
