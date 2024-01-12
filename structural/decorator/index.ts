namespace Decorator {
    class Product {
        name: string;
        price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }

        getProduct() {
            return {
                name: this.name,
                price: this.price
            }
        }
    }

    const productA = new Product("Product A", 500000);
    console.log(productA.getProduct());

    const productAFromImport = Object.assign(productA.getProduct(), { tax: 10 });
    productAFromImport.price += 200000;
    console.log(productAFromImport);

    const productAFromExport = Object.assign(productA.getProduct(), { tax: 20000 });
    productAFromExport.price += 40000;
    console.log(productAFromExport);
}
