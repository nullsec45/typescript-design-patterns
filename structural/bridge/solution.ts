namespace Bridge {
    interface Price {
        name: string;
        sellPrice(): string;
    }

    class Cheap implements Price {
        name: string = "murah";

        sellPrice(): string {
            return `jual harga ${this.name}`;
        }
    }

    class Expensive implements Price {
        name: string = "mahal";

        sellPrice(): string {
            return `jual harga ${this.name}`;
        }
    }

    interface IProduct {
        name: string;
    }

    abstract class Product implements IProduct {
        name: string;
        price: Price;

        constructor(name: string, price: Price) {
            this.name = name;
            this.price = price;
        }

        abstract sell(): void;
    }

    class Fashion extends Product {
        sell(): void {
            console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`);
        }
    }

    class Computer extends Product {
        sell(): void {
            console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`);
        }
    }

    const fashionMurah = new Fashion("Baju Lengan Panjang", new Cheap());
    console.log(fashionMurah);

    const komputerMahal = new Computer("Macboook Pro 2020", new Expensive())
    console.log(komputerMahal)
}