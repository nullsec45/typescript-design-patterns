/* 
1. nama < 20
2. harga < 1 jt
3. berat < 5kg
*/

namespace COR{
    class Product{
        name:string;
        price:number;
        weight:number;

        constructor(name:string, price:number, weight:number){
            this.name=name;
            this.price=price;
            this.weight=weight;
        }

        validate(){
            if(this.name.length > 20){
                return `Nama harus di bawah 20 karakter`;
            }

            if(this.price > 1000000){
                return `Harga harus di bawah 1 Juta`;
            }

            if(this.weight > 5){
                return `Berat product harus di bawah 5 kg`;
            }

            return this;
        }
    }

    const product=new Product("Sabun", 250000, 7);
    console.log(product.validate());
}