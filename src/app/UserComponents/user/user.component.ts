import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

interface Address {
  street: string;
  state: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public name: string;
  public age: number;
  public email: string;
  public address: Address;
  public hobbies: string[];
  public isEdit = false;
  public editTitle = 'Edit';

  constructor() {
  }

  ngOnInit() {
    this.name = 'Tarek Moubarak';
    this.age = 25;
    this.email = 'tarek@hellotree.co';
    this.address = {
      street: 'Ghadir',
      city: 'Jounieh',
      state: 'Mount Lebanon'
    };
    this.hobbies = ['Test', 'Test 1', 'Test 2'];
  }

  public addHobby(hobby: string) {
    this.hobbies.unshift(hobby);
    return false;
  }

  public removeHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

  public toggleEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.editTitle = 'Close';
    } else {
      this.editTitle = 'Edit';
    }
  }
}
