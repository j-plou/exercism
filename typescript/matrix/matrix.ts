export class Matrix {
  private _rows: number[][] = [];
  private _columns: number[][] = [];

  constructor(embeddedMatrix: string) {
    const source_rows = embeddedMatrix.split("\n");
    const total_cols = source_rows[0].length;

    this.processRows(source_rows);
    this.processColumns(total_cols);
  }

  private processRows(source_rows: string[]) {
    for (let row of source_rows) {
      let new_row: number[] = [];
      for (let cell of row.split(" ")) {
        new_row.push(Number(cell));
      }
      this._rows.push(new_row);
    }
  }

  private processColumns(total_cols: number) {
    for (let i = 0; i < total_cols; i++) {
      let new_column: number[] = [];
      for (let row of this._rows) {
        new_column.push(row[i]);
      }
      this._columns.push(new_column);
    }
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
