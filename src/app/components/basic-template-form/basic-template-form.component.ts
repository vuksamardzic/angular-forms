import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'af-basic-template-form',
  templateUrl: './basic-template-form.component.html',
  styleUrls: ['./basic-template-form.component.scss']
})
export class BasicTemplateFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onBasicFormSubmit(form: NgForm): void {
    console.log(form.value);
  }

}
