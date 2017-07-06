# Custom DataTable

The UI DataTable is a control for displaying data in a tabular format. It provides many options, such as sorting, filtering, and hide which determine the way data is presented and manipulated. The DataTable can be bound to local or remote data by using the UI DataSource and Option component.

## Column Configuration

This column setting use for default setting of DataTable. Column setting can handle width, filter, and hide the individual column.

```
    this.empHeaderDS = [
      { field: 'empNo', title: 'Emp ID', width: '100px', filterable: true, hidden: true },
      { field: 'name', title: 'Name', width: '100px', filterable: true, hidden: false },
      { field: 'education', title: 'Education', width: '100px', filterable: true, hidden: false },
      { field: 'year', title: 'Year', width: '100px', hidden: false, filterable: true, },
      { field: 'institute', title: 'Institute', width: '100px', hidden: false, filterable: true, }
    ];

```

## UI Configuration

The user needs to share data source or datalink with appropriate column config in option attribute for Custom DataTable. Please check below shared attribute list with proper assign value.

```

<app-datatable [option]="generalOption" [dataSource]="generalData"></app-datatable>

```


### Type of share the data source to DataTable

* User can share data source using tow type.
    * JSON data
    * Link data with type
        
JSON data :      

```
   this.empHeaderDS = [
      { field: 'empNo', title: 'Emp ID', width: '100px', filterable: true, hidden: true },
      { field: 'name', title: 'Name', width: '100px', filterable: true, hidden: false },
      { field: 'education', title: 'Education', width: '100px', filterable: true, hidden: false },
      { field: 'year', title: 'Year', width: '100px', hidden: false, filterable: true, },
      { field: 'institute', title: 'Institute', width: '100px', hidden: false, filterable: true, }
    ];

```

Link data with type:

```
    this.generalData = {
    ContentType: "application/json",
    Url: "https://xyz/array.json?auth=" + this.token} 

``` 

## UI for DataTable

![ScreenShot](src/images/test.png)

## Table Edit Mode

### Inline Edit mode: 

The user needs to double click on any row. It shows as edit mode data and with save button.

![ScreenShot](src/images/InlineEdit.png)

### Edit with Popup:

The user needs to click on the button for getting a popup and on "[onSaveDeatil]" event changed data to share with "$event" parameter. 

![ScreenShot](src/images/EditbyPopup.png)



```

# Event as attribute :

   <app-datatable [option]="generalOption" [inLineEdit]=false (onSaveDeatil)="onSavedItem($event)" (onChange)="onChangeItem($event)" [dataSource]="generalData"></app-datatable>

# Method parameter :

    onSavedItem(data) {        
    console.log(data.Item);
    "Do something"
    }

``` 


## Deployment instructions

### Install package

```
# Install npm package :

> npm install | npm install -g @angular/cli

# BootStrap package :

> npm install --save bootstrap

# Firebase package:

> npm install --save firebase

# Font-Awesome package:

> npm install --save font-awesome

```

For development builds use the usual `ng serve` and `ng build` commands.


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.