import { Injectable } from "@angular/core";
import { Student } from "./student";
import { HttpClient } from "@angular/common/http";

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
}
