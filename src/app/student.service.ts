import { Injectable } from "@angular/core";
import { Student } from "./student";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) {}

  addStudent(newStd: Student) {
    return this.http.post(
      "https://studentdata-3830e-default-rtdb.firebaseio.com/" + "student.json",
      newStd
    );
  }
  getStudentData() {
    return this.http
      .get<Student[]>(
        "https://studentdata-3830e-default-rtdb.firebaseio.com/student.json"
      )
      .pipe(
        map(data => {
          let studentArray: Student[] = [];
          for (let key in data) studentArray.push(data[key]);
          return studentArray;
        })
      );
  }
}
