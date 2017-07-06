export class ColumnConfig {
  public field: string;
  public title: string;
  public width: number;
  public height: number;
  public filterable: boolean;
  public scrollable: boolean;
  public hidden: boolean;

  constructor(field: string, title: string, width: number,
    height: number, scrollable: boolean, filterable: boolean, hidden: boolean) {

    this.field = field;
    this.title = title;
    this.width = width;
    this.height = height;
    this.filterable = filterable;
    this.scrollable = scrollable;
    this.hidden = hidden;
  }
}
