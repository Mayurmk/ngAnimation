import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        query('*', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' })),
          ]),
        ])
      ]),

      transition(':leave', [
        query('*', [
          style({opacity: 0, transform: 'translateX(100px)'}),
          stagger(-30, [
            animate('1000ms ease-out', style({ opacity: 1, transform: 'none' })),
          ]),
        ])
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public data = [
    { id: 1, name: 'mayur', address: 'Surat'},
    { id: 2, name: 'dhoni', address: 'Vapi'},
    { id: 3, name: 'kohli', address: 'Valsad'},
    { id: 4, name: 'rahane', address: 'Baroda'},
  ];

  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  save() {
    this.registerForm.patchValue({
      id: this.data.length + 1
    });
    this.data.push(this.registerForm.value);
  }

  edit(id: number) {
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }

}
