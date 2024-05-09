// strategy dessogm pattern membuat bagaimana objek menjalankan suatu algoritma dengan baik dan benar
var NumberConvertion = /** @class */ (function () {
    function NumberConvertion(strategy) {
        this.strategy = strategy;
    }
    NumberConvertion.prototype.execute = function (num) {
        this.strategy.convertNumber(num);
    };
    return NumberConvertion;
}());
var NumberToCurrency = /** @class */ (function () {
    function NumberToCurrency() {
    }
    NumberToCurrency.prototype.convertNumber = function (num) {
        console.log(num.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "IDR"
        }));
    };
    return NumberToCurrency;
}());
var NumberToDecimalSeparator = /** @class */ (function () {
    function NumberToDecimalSeparator() {
    }
    NumberToDecimalSeparator.prototype.convertNumber = function (num) {
        console.log(num.toLocaleString("id-ID", {
            minimumFractionDigits: 2
        }));
    };
    return NumberToDecimalSeparator;
}());
var NumberToDate = /** @class */ (function () {
    function NumberToDate() {
    }
    NumberToDate.prototype.convertNumber = function (num) {
        console.log(new Date(num * 1000).toUTCString());
    };
    return NumberToDate;
}());
var mataUang = new NumberConvertion(new NumberToCurrency);
mataUang.execute(9000000000);
