import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectsState } from 'src/app/state/subjects.state';
import { AddSubjectComponent } from '../add-subject/add-subject.component';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss'],
})
export class SemesterComponent implements OnInit {
  @Input() semester: string;
  subjects$;

  displayedColumns: string[] = ['Course', 'Credit'];
  dataSource: MatTableDataSource<any>;

  constructor(public dialog: MatDialog, private subjectState: SubjectsState) {}

  ngOnInit(): void {
    console.log(this.semester);
    if (this.semester === '1') {
      this.subjectState.semester1Subjects.subscribe((allSubjects) => {
        this.dataSource = new MatTableDataSource(allSubjects);
        console.log(this.dataSource);
      });
    } else {
      this.subjectState.semester2Subjects.subscribe((allSubjects) => {
        this.dataSource = new MatTableDataSource(allSubjects);
      });
    }
  }

  addSubject() {
    console.log(this.semester);
    const dialogRef = this.dialog.open(AddSubjectComponent, {
      width: '250px',
      data: {
        semester: this.semester,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
