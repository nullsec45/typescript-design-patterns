namespace ProxySolution {
    interface IProduct {
        getData(): Promise<{
            name: string,
            description: string,
            price: number
        }>
    }

    let tempData: any = null;

    class Product implements IProduct {
        category: string;

        constructor(category: string) {
            this.category = category;
        }

        async getData() {
            const response: any = await fetch(`https://api.ezrent.my.id/products/filter?category=${this.category}`);
            const productFetch: any = await response.json();

            tempData = productFetch;

            return {
                name: productFetch.data[0].name,
                description: productFetch.data[0].description,
                price: productFetch.data[0].price
            }
        }
    }

    class ProxyProduct implements IProduct {
        product: Product;

        constructor(product: Product) {
            this.product = product;
        }

        async getData() {
            if (tempData) {
                console.log(`Data didapat dari database.`);

                return {
                    name: tempData.data[0].name,
                    description: tempData.data[0].description,
                    price: tempData.data[0].price
                }
            }

            console.log("Data didapat dari API");
            return this.product.getData();

        }
    }

    (async () => {
        const product1 = new ProxyProduct(new Product("dbec18cc-7a4f-4041-a2a8-c5c6c5a8e005"));
        console.log(await product1.getData());

        const product2 = new ProxyProduct(new Product("dbec18cc-7a4f-4041-a2a8-c5c6c5a8e005"));
        console.log(await product2.getData());
    })();

}