import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberRange } from '../../validators/number-range.validator';

@Component({
  selector: 'af-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  basicForm: FormGroup;
  error = {
    name: '',
    age: ''
  };
  errorMessages = {
    name: {},
    age: {
      range: 'Out of range (0 - 120)',
      required: 'This field is required *'
    }
  };
  control = {
    name: null,
    age: null
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.basicForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, NumberRange(0, 120)]]
    });

    this.basicForm.valueChanges.subscribe(value => console.log(value));
    this.control.age = this.basicForm.get('age');
    this.control.age.valueChanges.subscribe(value => this.checkAgeOnValueChange(this.control.age));
  }

  onBasicFormSubmit(): void {
    console.log(this.basicForm, this.basicForm.value);
  }

  checkAgeOnValueChange(c: AbstractControl): void {
    this.error.age = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.error.age = Object.keys(c.errors).map(key => this.errorMessages.age[key]).join(' ');
    }
  }

}
