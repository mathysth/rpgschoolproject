export default class Entity {
  private _damage: string = "15";
  private _health: string = "30";
  private _isHostile: boolean = true;
  private _level: number = 1;
  private _name: string = "";
  private _shield: string = "15";
  public childEntity: any;

  public get damage(): number {
    return +this._damage;
  }

  public get health(): number {
    return +this._health;
  }

  public get isHostile(): boolean {
    return this._isHostile;
  }

  public get level(): number {
    return this._level;
  }

  public get name(): string {
    return this._name;
  }

  public get shield(): number {
    return +this._shield;
  }

  public levelUp(): void {}

  public set name(name: string) {
    this._name = name.toString();
  }

  public set health(health: number) {
    this._health = health.toString();
  }

  public set shield(shield: number) {
    this._shield = shield.toString();
  }

  public set damage(damage: number) {
    this._damage = damage.toString();
  }

  public set isHostile(is: boolean) {
    this._isHostile = is;
  }

  protected set level(level: number) {
    this._level = level;
  }
}
