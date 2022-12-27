import * as readline from 'readline';
import { Human } from './../../Entities/Human/Human';

export class DistributePointsEntity {
    private readonly player: Human;
    private readonly rl;
    private readonly dialog = 'Combien de points voulez vous mettre sur votre ';

    constructor(player: Human) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.player = player;
        this.distribute();
    }

    public async distribute() {
        await this.ask('shield',`${this.dialog} armure : \n`);
        await this.ask('life',`${this.dialog} vie : \n `);
        await this.ask('strengh',`${this.dialog} force : \n`);

        this.closeDialog();
    }

    private async removePoints(target: string,pointToRemove: number): Promise<void> {
        const enougthPoint = this.checkPoint(pointToRemove);
        if (!enougthPoint) {
            console.log('Vous n\'avez pas assez de points');
            await this.ask(target,`${this.dialog} ${target} : \n`);
        } else {
            this.player.usebalePoints -= pointToRemove;
            switch (target) {
                case 'shield':
                    this.player.shield += pointToRemove;
                    break;

                case 'life':
                    this.player.health += pointToRemove;
                    this.player.maxHealth += pointToRemove;
                    break;

                case 'strengh':
                    this.player.damage += pointToRemove;
                    break
            }
        }
    }

    private checkPoint(pointsToAdd: number): boolean {
        if (pointsToAdd <= this.player.usebalePoints) {
            return true;
        }

        return false;
    }

    private async ask(target: string, question: string): Promise<void> { 
        const removePoints = async (pointToRemove: number) => {
            await this.removePoints(target, pointToRemove);
        }
        
        return new Promise<void>((resolve, reject) => {
            this.rl.question(question, function (answer) {
                let points = 0;
                if(parseInt(answer)){
                    points = +answer;
                }
    
                removePoints(points).then(() => {
                    resolve();
                })
            });
        })
    }

    public closeDialog(): void{
        this.rl.close();
    }
}