import { Component, OnInit } from '@angular/core';
import { Student } from "../Student.model";
import { Employee } from "../Employee.model";

@Component({
  selector: 'app-DemoTemplate-detail',
  templateUrl: './DemoTemplate.component.html',
  styleUrls: ['./DemoTemplate.component.css']
})
export class DemoTemplateComponent implements OnInit {
  GenData;
  GenOption;

  studentDS: Student[];
  HeaderDS = [];
  IsStudent = false;
  sorting: any = {
    column: '',
    descending: false
  };

  empDS: Employee[];
  empHeaderDS = [];
  constructor() { }

  ngOnInit() {
    this.InitDataSource();
  }

  OnChange() {
    if (this.IsStudent == false) {
      this.GenData = this.studentDS;
      this.GenOption = this.HeaderDS;
      this.IsStudent = true;
    } else {
       this.GenData = this.empDS;
      this.GenOption = this.empHeaderDS;
      this.IsStudent = false;
    }
  }

  InitDataSource() {
    this.FirstSetData();
    this.GenData = this.empDS;
    this.GenOption = this.empHeaderDS;
  }

  FirstSetData() {
    this.empDS = [
      new Employee(1, 'Jone', 'BE CSE', 2014, 'AIT'),
      new Employee(2, 'David', 'BTech IT', 2014, 'VIT'),
      new Employee(3, 'Ding', 'MTech EEE', 2014, 'AIT'),
      new Employee(4, 'Mike', 'BE IT', 2014, 'VIT'),
      new Employee(5, 'Dellena', 'BE CSE', 2014, 'TN'),
      new Employee(6, 'Pinal', 'BE IT', 2014, 'VIT'),
      new Employee(7, 'Tom', 'BE IT', 2014, 'GDU'),
      new Employee(8, 'Mahi', 'BE Mech', 2014, 'GDU'),
    ];

    this.empHeaderDS = [
      { field: 'empNo', title: 'Emp ID', width: '12', filterable: true, hidden: true },
      { field: 'name', title: 'Name', width: '12', filterable: true, hidden: false },
      { field: 'education', title: 'Education', width: '22',filterable: true, hidden: false  },
      { field: 'year', title: 'Year', width: '32' , hidden: false , filterable: true,},
      { field: 'institute', title: 'Institute', width: '14' , hidden: false , filterable: true,  }
    ];

    this.studentDS = [
      new Student(1, 'Jone', 'Male', '10/6/1999'),
      new Student(2, 'David', 'Male', '14/7/1998'),
      new Student(3, 'Ding', 'Male', '14/7/1998'),
      new Student(4, 'Mike', 'Male', '14/7/1998'),
      new Student(5, 'Dellena', 'Female', '14/7/1998'),
      new Student(6, 'Pinal', 'Male', '14/7/1998'),
      new Student(7, 'Tom', 'Male', '14/7/1998'),
      new Student(8, 'Mahi', 'Female', '14/7/1998'),
    ];

    this.HeaderDS = [
      { field: 'rollNumber', title: 'RollNumber', width: '2px', filterable: true },
      { field: 'name', title: 'Name', width: '2px', filterable: true },
      { field: 'sex', title: 'Sex', width: '2px' },
      { field: 'dOT', title: 'DOT', width: '10px' }
    ];
    
  }


}
