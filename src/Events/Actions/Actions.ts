import { AttackEvent } from './AttackEvent';
import { LevelUpEvent } from './LevelUpEvent';
export const listAction = [
  {
    name: 'attack',
    referTo: AttackEvent
  },
  {
    name: 'levelUp',
    referTo: LevelUpEvent
  }
];
