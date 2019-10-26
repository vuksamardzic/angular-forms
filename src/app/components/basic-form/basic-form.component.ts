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
    name: {
      minlength: 'Min length is 3 char',
      required: 'This field is required *'
    },
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

    this.basicForm.valueChanges.subscribe(val => console.log(val));
    this.control.name = this.basicForm.get('name');
    this.control.age = this.basicForm.get('age');
    this.control.name.valueChanges.subscribe(val => this.checkErrorOnValueChange(this.control.name, 'name'));
    this.control.age.valueChanges.subscribe(val => this.checkErrorOnValueChange(this.control.age, 'age'));
  }

  onBasicFormSubmit(): void {
    console.log(this.basicForm, this.basicForm.value);
    if (this.basicForm.invalid) {
      Object.keys(this.basicForm.controls).forEach(field => {
        const control = this.basicForm.get(field);
        control.markAsTouched({ onlySelf: true });
        this.checkErrorOnValueChange(control, field);
      });
    }
  }

  checkErrorOnValueChange(c: AbstractControl, src: string): void {
    switch (src) {
      case 'name':
        this.error.name = '';
        if ((c.touched || c.dirty) && c.errors) {
          this.error.name = Object.keys(c.errors).map(key => this.errorMessages.name[key]).join(' ');
        }
        break;
      case 'age':
        this.error.age = '';
        if ((c.touched || c.dirty) && c.errors) {
          this.error.age = Object.keys(c.errors).map(key => this.errorMessages.age[key]).join(' ');
        }
        break;
    }
  }

}
