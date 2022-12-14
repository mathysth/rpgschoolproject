export default class Entity {
  private _damage: number = 15;
  private _health: number = 30;
  private _maxHealth: number = 30;
  private _name: string = '';
  private _shield: number = 15;

  public get damage(): number {
    return this._damage;
  }

  public get health(): number {
    return this._health;
  }

  public get maxHealth(): number {
    return this._maxHealth;
  }


  public get name(): string {
    return this._name;
  }

  public get shield(): number {
    return +this._shield;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set health(health: number) {
    this._health = health;
  }

  public set maxHealth(maxHealth: number) {
    this._maxHealth = maxHealth;
  }


  public set shield(shield: number) {
    this._shield = shield;
  }

  public set damage(damage: number) {
    this._damage = damage;
  }
}
