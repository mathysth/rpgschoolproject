import Entity from './Entities/Entity/Entity';
import { IGameConfig } from "./Interfaces/IGame";
import GameScenarioManager from './Scenario/GameScenarioManager';

export default class Game {
  private config: IGameConfig;
  private gameScenarioManager: GameScenarioManager<Entity>;
  
  constructor(config: IGameConfig) {
    this.gameScenarioManager = new GameScenarioManager();
    this.config = config;
  }

  public pauseGame(): Promise<boolean> {
    return this.gameScenarioManager
      .pause()
      .then(function (data) {
        return true;
      })
      .catch(function (err) {
        return false;
      });
  }

  public startGame(): Promise<boolean> {
    return this.gameScenarioManager
      .start()
      .then(function (data) {
        return true;
      })
      .catch(function (err) {
        return false;
      });
  }

  public stopGame(): Promise<boolean> {
    return this.gameScenarioManager
      .stop()
      .then(function (data) {
        return true;
      })
      .catch(function (err) {
        return false;
      });
  }
}
