import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Employee } from 'app/Model/Employee.model';
import { Student } from 'app/Model/Student.model';
import { Product } from 'app/Model/Product.model';
import { GetFirebaseDetailService } from './GetFirebaseDetail.service';

@Component({
  selector: 'app-demotemplate',
  templateUrl: 'DemoTemplate.html',
})
export class DemoTemplateComponent implements OnInit {
  @ViewChild('f') productForm: NgForm;

  generalData;
  generalOption;
  token;
  showDialog = false;
  EditItem: Product;

  studentDS: Student[];
  studentColumnDS = [];
  isStudent = false;

  empDS: Employee[];
  empHeaderDS = [];
  SharedlinkColumnConfig = [];
  constructor(private getFBDetailService: GetFirebaseDetailService) {
  }

  ngOnInit() {
    const mail = 'test.456@gmail.com';
    const pass = '9429053121';
    this.getFBDetailService.signinUser(mail, pass);
    this.initDataSource();
  }

  onChangeDataSource() {
    if (this.isStudent === false) {
      this.generalData = this.studentDS;
      this.generalOption = this.studentColumnDS;
      this.isStudent = true;
    } else {
      this.generalData = this.empDS;
      this.generalOption = this.empHeaderDS;
      this.isStudent = false;
    }
  }

  onChangeItem(item) {
    this.showDialog = !this.showDialog;
    this.EditItem = item.editItem;
    this.productForm.setValue({
      ProductName: item.editItem.ProductName,
      UnitPrice: item.editItem.UnitPrice,
      UnitsInStock: item.editItem.UnitsInStock,
    })
  }

  onSavedItem(data) {
    console.log('Demo Teamplate data');
    console.log(data.Item);
  }

  onSaveData(form: NgForm) {
    this.EditItem.ProductName = form.value.ProductName;
    this.EditItem.UnitPrice = form.value.UnitPrice;
    this.EditItem.UnitsInStock = form.value.UnitsInStock;
    this.showDialog = !this.showDialog
  }

  initDataSource() {
    this.loadDS();
    const content = 'application/json';
    const url = 'https://ethereal-honor-168405.firebaseio.com/array.json?auth=';
    this.getFBDetailService.changeToken.subscribe(
      (key: string) => {
        this.token = key;
        this.generalData = {
          ContentType: content,
          Url: url + this.token
          // Url: url
        };
        this.generalOption = this.SharedlinkColumnConfig;
      }
    );
  }

  loadDS() {
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
      { field: 'empNo', title: 'Emp ID', width: '100px', filterable: true, hidden: true },
      { field: 'name', title: 'Name', width: '100px', filterable: true, hidden: false },
      { field: 'education', title: 'Education', width: '100px', filterable: true, hidden: false },
      { field: 'year', title: 'Year', width: '100px', hidden: false, filterable: true, },
      { field: 'institute', title: 'Institute', width: '100px', hidden: false, filterable: true, }
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

    this.studentColumnDS = [
      { field: 'rollNumber', title: 'RollNumber', width: '202px', filterable: true },
      { field: 'name', title: 'Name', width: '100px', filterable: true },
      { field: 'sex', title: 'Sex', width: '100px' },
      { field: 'dOT', title: 'DOT', width: '100px' }
    ];

    // this.SharedlinkColumnConfig = [
    //   { field: 'ProductName', title: 'Product Name', width: '120px', filterable: true },
    //   { field: 'UnitPrice', title: 'Unit Price', width: '40px', filterable: true },
    //   { field: 'UnitsInStock', title: 'Units In Stock', width: '22px', filterable: true },
    // ]
    this.SharedlinkColumnConfig = [
      { field: 'ProductName', title: 'Product Name', filterable: true },
      { field: 'UnitPrice', title: 'Unit Price', filterable: true },
      { field: 'UnitsInStock', title: 'Units In Stock', filterable: true },
      { field: 'Discontinued', title: 'Discontinued', filterable: true },
      { field: 'ProductID', title: 'ProductID', hidden: true, filterable: false },
    ]
  }
}



