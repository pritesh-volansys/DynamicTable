# Custom DataTable

The UI DataTable is a control for displaying data in a tabular format. It provides many options, such as sorting, filtering, and hide which determine the way data is presented and manipulated. The DataTable can be bound to local or remote data by using the UI DataSource and Option component.

## Column Configuration

This column setting use for default setting of DataTable. Column setting can handle width, filter, and hide the individual column.

```
    this.linkColumnConfig = [
      { field: 'ProductName', title: 'Product Name', width: '12px', filterable: true },
      { field: 'UnitPrice', title: 'Unit Price', width: '22px', filterable: true },
      { field: 'UnitsInStock', title: 'Units In Stock', width: '22px', filterable: true },
    ]

```

## UI Configuration

User need to share data source or datalink with apropriate column config in option attribute for Custom DataTable. Please check below shared attributs list with proper assign value.

```

<app-DataTable [option]="generalOption" [dataSource]="generalData" [dataLink]="'https://ethereal-honor-168405.firebaseio.com/array.json'" [sort]="sorting" ></app-DataTable>

```

## UI for DataTable

![ScreenShot](src/test.png)

## Deployment

Add additional notes about how to deploy this on a live system
