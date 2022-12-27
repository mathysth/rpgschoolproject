import { Human } from './../../Entities/Human/Human';
import { ReadlineUtils } from './../../Utils/Readline';

export class CharactereCreationScenario {
    private readonly player: Human;
    private readonly rl = ReadlineUtils.getReadline();

    constructor(player: Human) {
        this.player = player;
    }

    private async ask(question: string): Promise<void> { 
        const giveName = (name: string) => {
            this.giveName(name);
        }
        
        return new Promise<void>((resolve) => {
            this.rl.question(question, function (answer) {
                giveName(answer);
                resolve();
            });
        })
    }

    private giveName(name: string) {
       this.player.name = name;
    }

    public async initialize(): Promise<void> {
        await this.ask('Quel est le prénom de votre charactère : \n');
    }
}