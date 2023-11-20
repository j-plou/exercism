export class LinkedList<TElement> {
  private _stations: number[] = [];

  public push(element: number) {
    this._stations.push(element);
  }

  public pop(): number | unknown {
    return this._stations.pop();
  }

  public shift(): number | unknown {
    return this._stations.shift();
  }

  public unshift(element: number) {
    return this._stations.unshift(element);
  }

  public delete(element: number) {
    if (this._stations.indexOf(element) > -1) {
        this._stations.splice(this._stations.indexOf(element), 1);
    }
  }

  public count(): number {
    return this._stations.length;
  }
}
