namespace AdapterSolution {
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


    class MaterialAdapter implements BaseData {
        private adaptee: Material;

        constructor(adaptee: Material) {
            this.adaptee = adaptee;
        }

        getData() {
            return {
                name: this.adaptee.name,
                brand: ''
            }
        }
    }

    let list: any[] = [];

    const product = new Product("baju", "hooligans");
    list.push(product.getData());

    const material1 = new MaterialAdapter(new Material("benang", 10));
    list.push(material1.getData());

    const material2 = new MaterialAdapter(new Material("jarum", 10));
    list.push(material2.getData());

    console.log(list);


    // cara ke dua
    enum AdapterType {
        PRODUCT,
        MATERIAL
    }

    class DataAdapter implements BaseData {
        public name: string;
        public brand: string;
        public qty: number;
        public type: AdapterType;

        constructor({ name = '', brand = '', qty = 0 } = {}, type: AdapterType) {
            this.name = name;
            this.brand = brand;
            this.qty = qty;
            this.type = type;
        }


        getData() {
            if (this.type === AdapterType.PRODUCT) {
                const product = new Product(this.name, this.brand);

                return {
                    name: product.name,
                    brand: product.brand
                }
            } else if (this.type === AdapterType.MATERIAL) {
                const material = new Material(this.name, this.qty);

                return {
                    name: material.name,
                    brand: ''
                }
            }

            return {
                name: '',
                brand: ''
            }
        }
    }

    let listProduct: any[] = [];

    const data1 = new DataAdapter({ name: 'kereta', brand: "INKA" }, AdapterType.PRODUCT);
    listProduct.push(data1.getData());

    const data2 = new DataAdapter({ name: 'rel', qty: 10 }, AdapterType.MATERIAL);
    listProduct.push(data2.getData());

    const data3 = new DataAdapter({ name: 'batu', qty: 1000 }, AdapterType.MATERIAL);
    listProduct.push(data3.getData());

    console.log(listProduct);
}

