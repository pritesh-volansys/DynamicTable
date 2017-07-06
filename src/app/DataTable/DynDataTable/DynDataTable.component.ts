import { Component, OnInit, OnChanges, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { ColumnConfig } from '../ColumnConfig';
import { HttpCallService } from '../HttpCall.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './DynDataTable.html',
  styleUrls: ['./DynDataTable.style.css']
})


export class DynDataTableComponent implements OnInit, OnChanges {
  @Input() dataSource: any;
  @Input() option: any[];
  @Input() inLineEdit: boolean;
  @ViewChild('clmRef') clmRef: ElementRef;
  @Output() onChange = new EventEmitter<{ editItem: any }>();
  @Output() onSaveDeatil = new EventEmitter<{ Item: any }>();


  filtterby = '';
  fieldName = '';
  isEditIndex;
  isValidStatus = false;
  alterMessage;
  isAlterVisible = false;
  showDialog = false;
  editFormGroup: FormGroup = new FormGroup({});
  editFormControl: FormControl;
  defaultsort: any = {
    column: 'ProductName',
    descending: false
  };
  editRecord;


  constructor(private httpCallService: HttpCallService) { }

  ngOnChanges(changes: any) {
    if (this.dataSource !== null && this.dataSource !== undefined && this.dataSource.Url !== null && this.dataSource.Url !== undefined) {

      this.httpCallService.getLinkData(this.dataSource)
        .subscribe(
        (servers: any[]) => this.dataSource = servers,
        (error) => console.log(error)
        );
      this.isAlterVisible = true;
    } else {
      this.isAlterVisible = false;
    }
  }

  ngOnInit() {
    this.httpResponce();
    this.isAlterVisible = false;
  }

  httpResponce() {
    this.httpCallService.responseMessage.subscribe(
      (httpMessage: string) => {
        if (httpMessage === 'Unauthorized') {
          this.onHideMessage();
          this.isValidStatus = false;
          this.alterMessage = 'Invalid authorization header. The access token you are using is either expired or invalid.';
        } else if (httpMessage === 'OK') {
          this.onHideMessage();
          this.isValidStatus = true;
          this.alterMessage = 'You have successfully get the data.';
        } else {
          this.onHideMessage();
          this.isValidStatus = false;
          this.alterMessage = httpMessage + '!';
        }
      }
    );
  }

  onChangeFiltterValue(event, field) {
    this.filtterby = event.target.value;
    this.fieldName = field;
  }

  onChangeSortingType(columnName): void {
    const sort = this.defaultsort;

    if (sort.column === columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  selectedClass(columnName): string {
    if (columnName === this.defaultsort.column) {
      return 'sort-' + this.defaultsort.descending;
    } else {
      return 'sort-' + false;
    }

  }

  convertSortingType(): string {
    return this.defaultsort.descending ? '-' + this.defaultsort.column : this.defaultsort.column;
  }

  onChecktype(record, field) {
    const type = typeof record[field];
    return type;
  }

  getDynDataType(val) {
    if (val === undefined && val === null) {
      return 'text'
    } else {
      const type = typeof val;
      if (type === 'number') {
        return 'number'
      } else if (type === 'boolean') {
        return 'checkbox'
      } else {
        return 'text'
      }
    }
  }

  onEdit(index, record) {
    this.editRecord = record;
    this.initForm(index, record);
  }

  onDbClickEdit(index) {
    this.isEditIndex = index;
  }

  private initForm(index, record) {
    this.editFormGroup = new FormGroup({});
    for (const item of this.option) {
      this.editFormControl = new FormControl(record[item.field], Validators.required);
      this.editFormGroup.addControl(item.field, this.editFormControl);
    }
    this.showDialog = !this.showDialog;
  }

  onSaveData(form: NgForm) {
    let SaveItem = [];
    for (const item of this.option) {
      SaveItem[item.field] = form.value[item.field];
      if (this.editRecord != null) {
        this.editRecord[item.field] = form.value[item.field];
      }
    }
    this.onSaveDeatil.emit({
      Item: SaveItem
    });
    SaveItem = [];
    this.editFormGroup = new FormGroup({});
    form.reset();
    this.showDialog = !this.showDialog
  }

  onSave(rowIndex) {
    for (let i = 0; i < this.option.length; i++) {
      const textID = this.option[i].field + '_' + rowIndex;
      if ((<HTMLInputElement>document.getElementById(textID)).value != null
        && (<HTMLInputElement>document.getElementById(textID)).value.length > 0 &&
        (<HTMLInputElement>document.getElementById(textID)).value !== undefined) {
      } else {
        this.onHideMessage();
        this.isValidStatus = false;
        this.alterMessage = 'Please fill the require field.'
        return;
      }
    }

    for (let i = 0; i < this.option.length; i++) {
      const textID = this.option[i].field + '_' + rowIndex;
      if ((<HTMLInputElement>document.getElementById(textID)).value != null) {
        if ((<HTMLInputElement>document.getElementById(textID)).type === 'checkbox') {
          console.log((<HTMLInputElement>document.getElementById(textID)).checked);
          this.dataSource[rowIndex][this.option[i].field] =
            (<HTMLInputElement>document.getElementById(textID)).checked;
        } else {
          this.dataSource[rowIndex][this.option[i].field] =
            (<HTMLInputElement>document.getElementById(textID)).value;
        }
      }
    }

    this.onHideMessage();
    this.isValidStatus = true;
    this.alterMessage = 'Your details have been saved successfully.'
    this.isEditIndex = null;
    this.OnStoreData();
  }

  onDelete(rowIndex) {
    const isConfirmed = confirm('Are you sure to delete this record ?');
    if (isConfirmed) {
      this.dataSource.splice(rowIndex, 1);
    } else {
      return false;
    }
    // After Delete store data.
    // this.OnStoreData();
  }

  OnStoreData() {
    // this.httpCallService.StoreData(this.dataSource).subscribe(
    //   (response: Response) => {
    //     console.log('StoreData :::::' + response);
    //   }
    // );
  }

  onHideMessage() {
    this.isAlterVisible = true;
    Observable.interval(2000)
      .take(10).map((x) => x + 1)
      .subscribe((x) => {
        this.isAlterVisible = false;
      })
  }
}
