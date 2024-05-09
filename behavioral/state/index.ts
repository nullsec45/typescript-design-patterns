// state adalah berfungsi untuk mengubah perilaku object berdasarkan statenya, perilaku dari object ini juga mampu mengakses object utama.

namespace State{
    interface IProduct{
        name:string;
        saveAsFeatureProduct(): void;
    }

    class FeaturedProduct{
        private state: IProduct;

        constructor(state: IProduct){
            this.state=state;
        }

        setFeaturedProduct(state:IProduct): void{
            this.state=state;
        }

        getFeaturedProduct():void{
            console.log(this.state);
        }

        publish(): void{
            this.state.saveAsFeatureProduct();
        }
    }

    class FashionProduct implements IProduct{
        name:string;

        constructor(name:string){
            this.name=name;
        }

        saveAsFeatureProduct(): void {
            console.log(`set product ${this.name} sebagai product unggulan`);
        }
    }

    class ElectronicProduct implements IProduct{
        name: string;

        constructor(name:string){
            this.name=name;
        }

        saveAsFeatureProduct(): void {
            console.log(`set product ${this.name} sebagai product unggulan`);
        }
    }

    const baju=new FashionProduct("baju");
    const celana=new FashionProduct("celana");
    const keyboard=new ElectronicProduct("keyboard");

    const featuredProduct=new FeaturedProduct(baju);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();

    featuredProduct.setFeaturedProduct(keyboard);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();
}