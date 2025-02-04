export class MathUtil {
  public static printMathTable(value: number): string {
    let tempStr: string = "";
    for (let i: number = 1; i <= 56; i++) {
      tempStr += `${value} * ${i} = ${value * i} \n`;
    }
    return tempStr;
  }
}
