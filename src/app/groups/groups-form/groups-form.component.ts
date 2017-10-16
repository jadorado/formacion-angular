import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./groups-form.component.scss']
})
export class GroupsFormComponent implements OnInit {

  form: FormGroup;

  get members(): FormArray { return this.form.get('members') as FormArray; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
      genre: ['', Validators.required],
      members: this.formBuilder.array([])
      }
    );
  }

  submit() {
    console.log(this.form.value);
  }

  addMember() {
    this.members.push(this.getMemberFormGroup());
  }

  private getMemberFormGroup() {
    return this.formBuilder.group({ name: [null, Validators.required] });
  }

}
