// Observer pattern yang sering digunakan yang memungkinkan objek lain umemberikan notifikasi
// kepada objek lain jika ada perubahan. Misal kelas 1 didaftarkan ke kelas 2. Jika ada perubahan
// pada kelas 2 nanti kelas 1 akan trigger perubahan tersebut

namespace Observer{
    interface Subject{
        attach(observer:Observer): void;
        dettach(observer:Observer): void;
        notify(): void;
    }

    interface Observer{
        name:string;
        update(subject:Subject):void;
    }

    class PromoSubject implements Subject{
        public isPromo: Boolean=false;
        private observers: Observer[]=[];

        attach(observer:Observer):void{
            const isExist:Boolean=this.observers.includes(observer);
            if(isExist){
                console.log(`Observer ${observer.name} sudah ada.`);
                return;
            }

            this.observers.push(observer);
            console.log(`Observer ${observer.name} berhasil didaftarkan`);
        }

        dettach(observer: Observer):void{
            const observerIndex=this.observers.indexOf(observer);
            if(observerIndex === -1){
                console.log(`Observer ${observer.name} tidak ditemukan.`);
                return;
            }

            this.observers.splice(observerIndex,1);
            console.log(`Observer ${observer.name} berhasil dihapus.`);
        }

        notify(): void {
            for(const observer of this.observers){
                observer.update(this);
            }
        }

        setPromo(status:Boolean):void{
            this.isPromo=status;
            this.notify();

        }
    }

    class Product implements Observer{
        name: string;

        constructor(name:string){
            this.name=name;
        }

        update(subject:Subject):void{
            if(subject instanceof PromoSubject && subject.isPromo){
                console.log(`Product ${this.name} telah ditayangkan ke toko online sebagai product promo.`);
            }
        }
    }

    const promo=new PromoSubject();

    const baju=new Product("baju");
    const celana=new Product("celana");
    const topi=new Product("topi");

    promo.attach(baju);
    promo.attach(celana);
    promo.attach(topi);


    promo.dettach(topi);

    promo.setPromo(true);
    console.log(promo);
}