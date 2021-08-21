import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditScore } from 'src/app/enums';
import { SubjectsState } from 'src/app/state/subjects.state';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  addSubjectFormGroup: FormGroup;
  CreditValues = Object.keys(CreditScore);
  constructor(
    public dialogRef: MatDialogRef<AddSubjectComponent>,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subjectsState: SubjectsState
  ) {}

  ngOnInit(): void {
    this.addSubjectFormGroup = this.formBuilder.group({
      Course: ['', [Validators.nullValidator, Validators.required]],
      Credit: [
        Object.keys(CreditScore)[3],
        [Validators.nullValidator, Validators.required],
      ],
    });
  }

  addSubject() {
    if (this.addSubjectFormGroup.valid) {
      console.log(this.addSubjectFormGroup.value);
      this.subjectsState.addSubject({
        semester: this.data.semester,
        Credit: this.addSubjectFormGroup.value.Credit,
        Course: this.addSubjectFormGroup.value.Course,
      });
      this.dialogRef.close();
    }
  }
}
