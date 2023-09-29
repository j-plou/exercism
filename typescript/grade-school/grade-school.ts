export class GradeSchool {
  private rosterData: { [grade: number]: string[] };

  constructor() {
    this.rosterData = {};
  }

  roster(): { [grade: number]: string[] } {
    return JSON.parse(JSON.stringify(this.rosterData));
  }

  add(newStudent: string, grade: number) {
    if (!this.rosterData[grade]) {
      this.rosterData[grade] = [];
    }

    this.removeAlreadyRegisteredStudent(newStudent);

    this.rosterData[grade].push(newStudent);
    this.rosterData[grade].sort();
  }

  private removeAlreadyRegisteredStudent(newStudent: string) {
    for (let grade in this.rosterData) {
      this.rosterData[grade] = this.rosterData[grade].filter(
        (student) => student !== newStudent
      );
    }
  }

  grade(grade: number) {
    return this.rosterData[grade] ? [...this.rosterData[grade]] : [];
  }
}
