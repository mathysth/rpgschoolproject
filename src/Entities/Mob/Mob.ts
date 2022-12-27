import Entity from '../Entity/Entity';
export default class Mob extends Entity {
  private _isHostile: boolean = true;

  public get isHostile(): boolean {
    return this._isHostile;
  }

  constructor() {
    super();
  }

  public set isHostile(is: boolean) {
    this._isHostile = is;
  }
}
