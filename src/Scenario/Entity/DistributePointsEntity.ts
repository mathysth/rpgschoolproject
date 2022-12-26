import * as readline from 'readline';
import { Human } from './../../Entities/Human/Human';

export class DistributePointsEntity {
    private readonly player: Human;
    private readonly rl;
    private leftPoints: number = 0;

    constructor(player: Human) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.player = player;
        console.log(this.player);
        this.distribute();
    }

    public async distribute() {
        this.leftPoints = this.player.usebalePoints;
        const dialog = 'Combien de points voulez vous mettre sur votre ';

        this.ask(`${dialog} armure`);

        // const life = await this.rl.question(`${dialog} pv`);
        // await this.removePoints(entity, life, currentPoints);

        // const strengh = await this.rl.question(`${dialog} force`);
        // await this.removePoints(entity, strengh, currentPoints);

    }

    private async removePoints(pointToRemove: number) {
        const enougthPoint = this.checkPoint(pointToRemove);
        if (enougthPoint) {
            this.player.usebalePoints -= pointToRemove;
        }
        //TODO: ajouter le cumulant sur sa destination
        console.log(this.player);
    }

    private checkPoint(pointsToAdd: number): boolean {
        if (+pointsToAdd <= this.leftPoints) {
            return true;
        }

        return false;
    }

    private ask(question: string) {
        const removePoints = (pointToRemove: number) => {
            this.removePoints(pointToRemove);
        }
        
        this.rl.question(question, function (answer) {
            let points = 0;
            if(parseInt(answer)){
                points = +answer;
            }

            removePoints(points)
        });
    }

    public closeDialog(): void{
        this.rl.close();
    }
}