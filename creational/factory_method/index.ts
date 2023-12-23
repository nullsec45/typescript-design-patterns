class Truck {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`Kirim ${this.qty} mengunakan truck`);
    }
}

class Ship {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`Kirim ${this.qty} mengunakan kapal`);
    }
}

let type = 'deliver_by_land';
if (type == 'deliver_by_land') {
    new Truck(100);
} else if (type == 'deliver_by_sea') {
    new Ship(100);
}

