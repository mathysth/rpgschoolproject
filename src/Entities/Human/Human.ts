import { IGameProfile } from '../../Interfaces/IGame';
import Entity from '../Entity/Entity';
export class Human extends Entity {
  private usebalePoints: number = 0;
  private _level: number = 1;

  constructor() {
    super();
  }

  private loadProfile(profile: IGameProfile[]) {}

  public getParent() {
    this.childEntity = this;
    return Object.getPrototypeOf(this);
  }

  public levelUp(): void {
    this.level = this.level++;
    this.health = Math.round(this.health + this.health * 0.1);
  }

  public get level(): number {
    return this._level;
  }

  private set level(level: number) {
    this._level = level;
  }

  public use() {
    this.usebalePoints--;
  }
}
