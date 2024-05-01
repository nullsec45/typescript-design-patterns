namespace Mediator{
    // mediator design pattern adalah sebuah pattern yang berfungsi sebagai jembatan atau mediator antar objek dan class

    interface IProduct{
        name:string;
        sell():void;
    }

    interface IMediator{
        registerProduct(product:IProduct):void;
        setAvailableStatus(status:Boolean):void;
        isAvailable():Boolean;
    }

    class Product implements IProduct{
        name: string;
        mediator:IMediator;

        constructor(name:string, mediator:IMediator){
            this.name=name;
            this.mediator=mediator;
        }

        sell(): void {
            if(this.mediator.isAvailable()){
                this.mediator.setAvailableStatus(false);
                console.log(`Product ${this.name} berhasil dijual.`);
            }else{
                console.log(`Product ini belum dijual.`);
            }
        }
    }

    class ProductMediator implements IMediator{
        product?:Product;
        status:Boolean=false;

        registeredProduct(): void {
            if(this.status){
                console.log(this.product);
            }else{
                console.log(`Tidak ada produk yang dijual.`);
            }
        }

        registerProduct(product:Product):void{
            if(this.status){
                console.log(`Tidak bisa mendaftarkan produk, karena masih ada produk yang belum terjual.`);
            }else{
                this.product=product;
                this.status=true;
                console.log(`Produk berhasil didaftarkan`);
            }
        }

        setAvailableStatus(status: Boolean): void {
            this.status=status;
        }
        
        isAvailable(): Boolean {
            return  this.status;
        }
    }
}