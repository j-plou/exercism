export class Clock {
  private _hour: number = 0;
  private _minute: number = 0;

  constructor(hour: number, minute?: number) {
    this._hour = 24 + (hour % 24);

    if (minute) {
      this._hour += 24 + (Math.floor(minute / 60) % 24);
      this._minute = 60 + (minute % 60);
    }

    this._hour = this._hour % 24;
    this._minute = this._minute % 60;
  }

  public toString(): unknown {
    return (
      String(this._hour).padStart(2, "0") +
      ":" +
      String(this._minute).padStart(2, "0")
    );
  }

  public plus(minutes: number): Clock {
    this._minute += minutes;

    if (this._minute > 60 && minutes / 60 < 1) {
      this._hour += 1;
    } else {
      this._hour += Math.round(minutes / 60);
    }

    this._hour = this._hour % 24;
    this._minute = this._minute % 60;

    return this;
  }

  public minus(minutes: number): Clock {
    this._hour = 24 - Math.floor(minutes / 60) + this._hour;

    if (minutes > this._minute && minutes % 60 != 0) {
      this._hour -= 1;
    }

    this._minute = 60 - (minutes % 60) + this._minute;

    this._hour = this._hour % 24;
    this._minute = this._minute % 60;

    return this;
  }

  public equals(other: Clock): unknown {
    return this.toString() == other.toString();
  }
}
