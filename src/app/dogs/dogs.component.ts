import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  dogs = DOGS;
  selectedDog?: Dog;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/