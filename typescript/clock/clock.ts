const MINUTES_IN_DAY = 24 * 60;

export class Clock {
  private timeInMinutes: number = 0;

  constructor(hour = 0, minute = 0) {
    const newTime = (hour * 60 + minute) % MINUTES_IN_DAY;
    this.timeInMinutes = newTime < 0 ? newTime + MINUTES_IN_DAY : newTime;
  }

  public toString(): string {
    return `${String(Math.trunc(this.timeInMinutes / 60)).padStart(2, "0")}:${String(this.timeInMinutes % 60).padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.timeInMinutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.timeInMinutes - minutes);
  }

  public equals(other: Clock): boolean {
    return other.timeInMinutes === this.timeInMinutes;
  }
}
