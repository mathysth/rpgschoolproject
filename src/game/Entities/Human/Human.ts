import { IGameProfile } from "../../Interfaces/IGame";
import Entity from "../Entity/Entity";
export default class Human extends Entity {
  private usebalePoints: number = 0;

  constructor(){
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

  public use() {
    this.usebalePoints--;
  }
}
