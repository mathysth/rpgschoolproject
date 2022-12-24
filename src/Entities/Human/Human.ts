import { IGameProfile } from '../../Interfaces/IGame';
import Entity from '../Entity/Entity';
export class Human extends Entity {
  private usebalePoints: number = 0;
  private _level: number = 1;

  private loadProfile(profile: IGameProfile[]) {}

  public getParent() {
    this.childEntity = this;
    return Object.getPrototypeOf(this);
  }

  public get level(): number {
    return this._level;
  }

  public set level(level: number) {
    this._level = level;
  }

  public use() {
    this.usebalePoints--;
  }
}
