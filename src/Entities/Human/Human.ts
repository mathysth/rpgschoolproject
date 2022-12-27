import { IGameProfile } from '../../Interfaces/IGame';
import Entity from '../Entity/Entity';
export class Human extends Entity {
  private _usebalePoints: number = 0;
  private _level: number = 1;

  constructor(){
    super();
    this.usebalePoints = 12;
  }

  private loadProfile(profile: IGameProfile[]) {}

  public get level(): number {
    return this._level;
  }

  public setLevel(level: number) {
    this._level = level;
  }

  public get usebalePoints(): number {
    return this._usebalePoints;
  }

  public set usebalePoints(_usebalePoints: number) {
    this._usebalePoints = _usebalePoints;
  }
}
