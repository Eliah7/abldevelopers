import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectsState {
  semester2Subjects: BehaviorSubject<any> = new BehaviorSubject<[]>([]);
  semester1Subjects: BehaviorSubject<any> = new BehaviorSubject<[]>([]);

  addSubject(subject) {
    console.log(subject);
    if (subject?.semester) {
      if (subject.semester === '1') {
        const subjects = this.semester1Subjects.value;

        subjects.push({
          Credit: subject.Credit,
          Course: subject.Course,
        });

        this.semester1Subjects.next(subjects);
      } else if (subject.semester === '2') {
        const subjects = this.semester2Subjects.value;

        subjects.push({
          Credit: subject.Credit,
          Course: subject.Course,
        });

        this.semester1Subjects.next(subjects);
      }
    }
  }
}
