class Me {
    private firstName: string = "";
    private lastName: string = "";

    getFullName(): string {
        this.firstName = "firstname";
        this.lastName = "lastname";

        return `${this.firstName} ${this.lastName}`;
    }
}

const fullName = new Me();
console.log(fullName.getFullName());

const fullName2 = new Me();
console.log(fullName.getFullName());

console.log(fullName === fullName2)