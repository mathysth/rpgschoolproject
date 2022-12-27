import { IGameProfile } from '../../Interfaces/IGame';
import Entity from '../Entity/Entity';
export class Human extends Entity {
  private _level: number = 1;
  private _usebalePoints: number = 0;

  public get level(): number {
    return this._level;
  }

  public get usebalePoints(): number {
    return this._usebalePoints;
  }

  constructor(){
    super();
    this.usebalePoints = 12;
  }

  private loadProfile(profile: IGameProfile[]) {}

  public setLevel(level: number) {
    this._level = level;
  }

  public set usebalePoints(_usebalePoints: number) {
    this._usebalePoints = _usebalePoints;
  }
}
