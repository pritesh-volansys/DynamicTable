export class Product {
    constructor(
        public Discontinued: boolean,
        public ProductId: number,
        public ProductName: string,
        public UnitPrice: string,
        public UnitsInStock: string) {
    }
}