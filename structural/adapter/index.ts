interface BaseData {
    getData(): {
        name: string,
        brand: string
    }
}

interface IProduct extends BaseData {
    name: string;
    brand: string;
}

interface IMaterial {
    name: string;
    qty: number;
}

class Product implements IProduct {
    name: string;
    brand: string;

    constructor(name: string, brand: string) {
        this.name = name;
        this.brand = brand;
    }

    getData() {
        return {
            name: this.name,
            brand: this.brand
        };
    }
}

class Material implements IMaterial {
    name: string;
    qty: number;

    constructor(name: string, qty: number) {
        this.name = name;
        this.qty = qty;
    }

    getData() {
        return {
            name: this.name,
            qty: this.qty
        }
    }
}

let list: any[] = [];

const product = new Product("baju", "hooligans");
list.push(product.getData());

const material1 = new Material("benang", 10);
list.push(material1.getData());

const material2 = new Material("jarum", 10);
list.push(material2.getData());

console.log(list);