# Custom DataTable

This project use for make custom datatable with shared datasource and column configuration.

## Column setting

This column setting use for default setting of created table. Please check below sample column setting for a custom table.Column setting can handle width, filter, and hide the individual column.

```
    this.linkColumnConfig = [
      { field: 'ProductName', title: 'Product Name', width: '12px', filterable: true },
      { field: 'UnitPrice', title: 'Unit Price', width: '22px', filterable: true },
      { field: 'UnitsInStock', title: 'Units In Stock', width: '22px', filterable: true },
    ]

```

## Column UI setting

In UI need to share data source, datalink, option for Custom DataTable. Please check below shared attribut with proper assign value. Data source should be "any[]" type.

```

<app-DataTable [option]="generalOption" [dataSource]="generalData" [dataLink]="'https://ethereal-honor-168405.firebaseio.com/array.json'" [sort]="sorting" ></app-DataTable>

```

## UI for DataTable


```

Image

```

## Deployment

Add additional notes about how to deploy this on a live system