import { Component, OnInit } from '@angular/core';
interface User {
  Id: number;
  Name: string;
  Class: number;
  'Subject One': number;
  'Subject Two': number;
  'Subject Three': number;
  'Subject Four': number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  users: User[] = [
    {
      Id: 1,
      Name: 'User 1',
      Class: 2,
      'Subject One': 20,
      'Subject Two': 30,
      'Subject Three': 15,
      'Subject Four': 20,
    },
    {
      Id: 2,
      Name: 'User 2',
      Class: 2,
      'Subject One': 90,
      'Subject Two': 70,
      'Subject Three': 20,
      'Subject Four': 66,
    },
    {
      Id: 3,
      Name: 'User 3',
      Class: 2,
      'Subject One': 50,
      'Subject Two': 65,
      'Subject Three': 92,
      'Subject Four': 35,
    },
    {
      Id: 4,
      Name: 'User 4',
      Class: 2,
      'Subject One': 22,
      'Subject Two': 12,
      'Subject Three': 82,
      'Subject Four': 54,
    },
  ];
  keys: string[] = [];
  sortType = 'ascending';
  currentColumn = '';
  previousColumn = '';

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.users[0]);
  }

  sortTable(column: string) {
    this.previousColumn = this.currentColumn;
    this.currentColumn = column;
    if (this.currentColumn != this.previousColumn) {
      this.sortType = 'ascending';
    }
    let newUsers: User[] = [];
    let keysArr: string[] | number[] = [];
    keysArr = this.users.map((user: any) => user[column]);

    if (this.sortType == 'ascending') {
      keysArr.sort();
      this.sortType = 'descending';
    } else if (this.sortType == 'descending') {
      keysArr.sort().reverse();
      this.sortType = 'reset';
    } else {
      this.reset();
      this.sortType = 'ascending';
      return;
    }
    for (let key of keysArr) {
      this.users.forEach((user: any) => {
        if (user[column] == key) {
          newUsers.push(user);
        }
      });
    }
    this.users = [...newUsers];
  }

  reset() {
    this.users = [
      {
        Id: 1,
        Name: 'User 1',
        Class: 2,
        'Subject One': 20,
        'Subject Two': 30,
        'Subject Three': 15,
        'Subject Four': 20,
      },
      {
        Id: 2,
        Name: 'User 2',
        Class: 2,
        'Subject One': 90,
        'Subject Two': 70,
        'Subject Three': 20,
        'Subject Four': 66,
      },
      {
        Id: 3,
        Name: 'User 3',
        Class: 2,
        'Subject One': 50,
        'Subject Two': 65,
        'Subject Three': 92,
        'Subject Four': 35,
      },
      {
        Id: 4,
        Name: 'User 4',
        Class: 2,
        'Subject One': 22,
        'Subject Two': 12,
        'Subject Three': 82,
        'Subject Four': 54,
      },
    ];
  }
}
