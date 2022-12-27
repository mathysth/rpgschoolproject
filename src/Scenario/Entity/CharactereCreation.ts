import * as readline from 'readline';
import { Human } from './../../Entities/Human/Human';

export class CharactereCreationScenario {
    private readonly player: Human;
    private readonly rl;

    constructor(player: Human) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.player = player;
    }

    public async initialize(): Promise<void> {
        await this.ask('Quel est le prénom de votre charactère : \n');
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
}