export class GradeSchool {
  private rosterData: { [grade: number]: string[] };

  constructor() {
    this.rosterData = {};
  }

  roster(): { [grade: number]: string[] } {
    return JSON.parse(JSON.stringify(this.rosterData));
  }

  add(studentName: string, grade: number): void {
    if (!this.rosterData[grade]) {
      this.rosterData[grade] = [];
    }
    this.rosterData[grade].push(studentName);
    this.rosterData[grade].sort();
  }

  grade(grade: number): string[] {
    return this.rosterData[grade] ? [...this.rosterData[grade]] : [];
  }
}
