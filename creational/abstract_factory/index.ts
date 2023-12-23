enum ComputerType {
    PC = "pc",
    LAPTOP = "laptop"
}

abstract class Computer {
    protected type: ComputerType;
    protected monitor: string;

    constructor(type: ComputerType, monitor: string) {
        this.type = type;
        this.monitor = monitor;
    }

    abstract getModel(): string;
}

class PC extends Computer {
    constructor(monitor: string) {
        super(ComputerType.PC, monitor);
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`;
    }
}

class Laptop extends Computer {
    constructor(monitor: string) {
        super(ComputerType.LAPTOP, monitor);
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`;
    }
}

enum MonitorType {
    LED = 'led',
    IPS = 'ips'
}

class LEDComputerFactory {
    static buildComputer(type: ComputerType): Computer {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.LED);
            case ComputerType.LAPTOP:
                return new Laptop(MonitorType.LED);
            default:
                throw new Error('type not found');
        }
    }
}

class IPSComputerFactory {
    static buildComputer(type: ComputerType): Computer {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.IPS);
            case ComputerType.LAPTOP:
                return new Laptop(MonitorType.IPS);
            default:
                throw new Error('type not found');
        }
    }
}

class ComputerFactory {
    static buildComputer(ComputerType: ComputerType, monitorType: MonitorType): Computer {
        switch (monitorType) {
            case MonitorType.LED:
                return LEDComputerFactory.buildComputer(ComputerType);
            case MonitorType.IPS:
                return IPSComputerFactory.buildComputer(ComputerType);
            default:
                throw new Error('type not found');

        }
    }
}

const pcled = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED);
console.log(pcled.getModel());

const pcips = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.IPS);
console.log(pcips.getModel());

const laptopled = ComputerFactory.buildComputer(ComputerType.LAPTOP, MonitorType.LED);
console.log(laptopled.getModel());

const laptopips = ComputerFactory.buildComputer(ComputerType.LAPTOP, MonitorType.IPS);
console.log(laptopips.getModel());