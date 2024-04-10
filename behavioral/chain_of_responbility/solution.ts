namespace CORSolution{
    class Product{
        name:string;
        price:number;
        weight:number;

        constructor(name:string, price:number, weight:number){
            this.name=name;
            this.price=price;
            this.weight=weight;
        }
    }

    interface Handler{
        setNext(handler:Handler):Handler;
        handle(request:any):any;
    }
    
    abstract class AbstractProductHandler implements Handler{
        private nextHandler:Handler | null=null;
        
        setNext(handler:Handler):Handler{
            this.nextHandler=handler;

            return handler;
        }

        handle(request: any) {
            if(this.nextHandler){
                return this.nextHandler.handle(request);
            }

            return request;
        }
    }

    class ProductNameHandler extends AbstractProductHandler{
        handle(request: any):any {
            if(request.name.length > 20){
                return `Nama harus di bawah 20 karakter`;
            }

            return super.handle(request);
        }
    }

    class ProductPriceHandler extends AbstractProductHandler{
        handle(request: any):any {
            if(request.price > 1000000){
                return `Harga harus di bawah 1 Juta.`;
            }

            return super.handle(request);
        }
    }

    class ProductWeightHandler extends AbstractProductHandler{
        handle(request: any):any {
            if(request.weight > 5){
                return `Berat harus di bawah 5 KG.`;
            }

            return super.handle(request);
        }
    }

    const product1=new Product("Ayam", 500000,90);
    const product2=new Product("Sapi",1200000,5);
    const product3=new Product("Bebek", 900000,4);

    const nameHandler=new ProductNameHandler();
    const priceHandler=new ProductPriceHandler();
    const weightHandler=new ProductWeightHandler();
    
    nameHandler.setNext(priceHandler).setNext(weightHandler);

    console.log(nameHandler.handle(product1));
    console.log(nameHandler.handle(product2));
    console.log(nameHandler.handle(product3));
}