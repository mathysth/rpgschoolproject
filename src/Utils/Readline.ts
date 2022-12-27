import * as readline from 'readline';

export class ReadlineUtils{
    private static rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    public static getReadline(){
        return ReadlineUtils.rl;
    }

    public static closeReadline(){
        this.rl.close();
    }
}