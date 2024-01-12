namespace FacadeSolution {
    interface IProduct {
        getData(): Promise<{
            name: string,
            description: string,
            price: number
        }>
    }

    class Product implements IProduct {
        category: string;

        constructor(category: string) {
            this.category = category;
        }

        async getData() {
            const response: any = await fetch(`https://api.ezrent.my.id/products/filter?category=${this.category}`);
            const productFetch: any = await response.json();

            return {
                name: productFetch.data[0].name,
                description: productFetch.data[0].description,
                price: productFetch.data[0].price
            }
        }
    }

    (async () => {
        const product = new Product("dbec18cc-7a4f-4041-a2a8-c5c6c5a8e005");
        console.log(await product.getData());
    })();
}
