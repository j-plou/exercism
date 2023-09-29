export class Robot {
  private _name: string = "";
  private static _usedNames: string[] = [];

  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    let newName: string = this.generateNewName();

    if (Robot._usedNames.find((x) => x == newName) === undefined) {
      Robot._usedNames.push(newName);
      this._name = newName;
    } else {
      this.resetName();
    }
  }

  private generateNewName(): string {
    let generator = new Generator();
    return generator.getRandomChars(2) + generator.getRandomNumbers(3);
  }

  public static releaseNames(): void {
    Robot._usedNames = [];
  }
}

export class Generator {
  public getRandomChars(len: number): string {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return this.getRandomString(len, charSet);
  }

  public getRandomNumbers(len: number): string {
    let charSet = "0123456789";
    return this.getRandomString(len, charSet);
  }

  private getRandomString(len: number, charSet: string) {
    let randomString = "";
    for (var i = 0; i < len; i++) {
      let randomCharPosition = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomCharPosition, randomCharPosition + 1);
    }
    return randomString;
  }
}
