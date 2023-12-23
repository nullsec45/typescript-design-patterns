namespace FactorySolution {
    interface Logistic {
        qty: number,
        deliver(): void,
    }

    class Truck implements Logistic {
        public qty: number;

        constructor(qty: number) {
            this.qty = qty;
        }

        deliver(): void {
            console.log(`Kirim ${this.qty} mengunakan truck`);
        }
    }

    class Ship implements Logistic {
        public qty: number;

        constructor(qty: number) {
            this.qty = qty;
        }

        deliver(): void {
            console.log(`Kirim ${this.qty} mengunakan kapal`);
        }
    }

    type LogisticType = {
        type: string;
        qty: number;
    }

    interface Factory {
        create(options: LogisticType): Logistic;

    }

    class LogisticFactory implements Factory {
        public create(options: LogisticType): Logistic {
            if (options.type == "deliver_by_land") {
                return new Truck(options.qty);
            } else if (options.type == "deliver_by_sea") {
                return new Ship(options.qty);
            }

            throw new Error('class tidak tersedia');
        }
    }

    const logistic = new LogisticFactory();

    const byLand = logistic.create({ type: 'deliver_by_land', qty: 20 });
    console.log(byLand.deliver());

    const bySea = logistic.create({ type: 'deliver_by_sea', qty: 20 });
    console.log(bySea.deliver());
}