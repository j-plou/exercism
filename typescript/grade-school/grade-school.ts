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
      for (let registeredStudentIndex in this.rosterData[grade]) {
        let registeredStudent = this.rosterData[grade][registeredStudentIndex];
        if (registeredStudent == newStudent) {
          this.rosterData[grade].splice(Number(registeredStudentIndex), 1);
        }
      }
    }
  }

  grade(grade: number) {
    if (!this.rosterData[grade]) {
      return [];
    }
    return JSON.parse(JSON.stringify(this.rosterData[grade]));
  }
}
