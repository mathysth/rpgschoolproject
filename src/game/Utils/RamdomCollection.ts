export class RoundRandomCollection {
  /**
   * Shuffle l'array donnée en input afin de retourner aléatoirement une la key du tableau
   * @param array 
   * @returns 
   */
  private static arrayShuffle(array: Array<any>) {
    for ( let i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
       swap        = Math.floor(Math.random() * (i + 1));
       temp        = array[swap];
       array[swap] = array[i];
       array[i]    = temp;
    }
    return array;
  };
  
  /**
   * Permet de donner des valeurs avec des pourcentages custom et de retourner aléatoirement une valeur
   * @param values 
   * @param chances 
   * @returns 
   */
  public static percentageChance (values: Array<string>, chances: Array<string>) {
    this.checkPercentageValidity(chances);
    const pool = [];
    for ( let i = 0; i < chances.length; i++ ) {
       for ( let i2 = 0; i2 < +chances[i]; i2++ ) {        
          pool.push(i);
       }
    }
    return values[this.arrayShuffle(pool)['0']];
  };

  private static checkPercentageValidity(chances: Array<string>): void{
    let finalsChances: number = 0;
    chances.map(c => finalsChances+= +c);

    if(finalsChances > 100){
      throw new Error('Le total des pourcentages est supérieur à 100');
    }
  }
}
