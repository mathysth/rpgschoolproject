import { AttackEvent } from './Entity/AttackEvent';
import { HealEvent } from './Entity/HealEvent';
import { LevelUpEvent } from './Entity/LevelUpEvent';

export const listAction = [
  {
    name: 'attack',
    referTo: AttackEvent
  },
  {
    name: 'levelUp',
    referTo: LevelUpEvent
  },
  {
    name: 'healer',
    referTo: HealEvent
  }
];
