var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComputerType;
(function (ComputerType) {
    ComputerType["PC"] = "pc";
    ComputerType["LAPTOP"] = "laptop";
})(ComputerType || (ComputerType = {}));
var Computer = /** @class */ (function () {
    function Computer(type, monitor) {
        this.type = type;
        this.monitor = monitor;
    }
    return Computer;
}());
var PC = /** @class */ (function (_super) {
    __extends(PC, _super);
    function PC(monitor) {
        return _super.call(this, ComputerType.PC, monitor) || this;
    }
    PC.prototype.getModel = function () {
        return "".concat(this.type, " with ").concat(this.monitor);
    };
    return PC;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(monitor) {
        return _super.call(this, ComputerType.LAPTOP, monitor) || this;
    }
    Laptop.prototype.getModel = function () {
        return "".concat(this.type, " with ").concat(this.monitor);
    };
    return Laptop;
}(Computer));
var MonitorType;
(function (MonitorType) {
    MonitorType["LED"] = "led";
    MonitorType["IPS"] = "ips";
})(MonitorType || (MonitorType = {}));
var LEDComputerFactory = /** @class */ (function () {
    function LEDComputerFactory() {
    }
    LEDComputerFactory.buildComputer = function (type) {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.LED);
            case ComputerType.LAPTOP:
                return new Laptop(MonitorType.LED);
            default:
                throw new Error('type not found');
        }
    };
    return LEDComputerFactory;
}());
var IPSComputerFactory = /** @class */ (function () {
    function IPSComputerFactory() {
    }
    IPSComputerFactory.buildComputer = function (type) {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.IPS);
            case ComputerType.LAPTOP:
                return new Laptop(MonitorType.IPS);
            default:
                throw new Error('type not found');
        }
    };
    return IPSComputerFactory;
}());
var ComputerFactory = /** @class */ (function () {
    function ComputerFactory() {
    }
    ComputerFactory.buildComputer = function (ComputerType, monitorType) {
        switch (monitorType) {
            case MonitorType.LED:
                return LEDComputerFactory.buildComputer(ComputerType);
            case MonitorType.IPS:
                return IPSComputerFactory.buildComputer(ComputerType);
            default:
                throw new Error('type not found');
        }
    };
    return ComputerFactory;
}());
var pcled = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED);
console.log(pcled.getModel());
