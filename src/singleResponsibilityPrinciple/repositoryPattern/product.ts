class Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    constructor(id: string, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
};

const STORE: Product[] = [];


class ProductRepository {
    getById(id: string): Product | undefined {
        // Implementation of fetching product by id from the database
        return STORE.find(product => product.id === id);
    };

    save(product: Product): void {
        // implementation of saving product to the database
        STORE.push(product);
    };
};

class ProductService {
    constructor(private readonly repository: ProductRepository) {
    }

    getById(id: string): Product | undefined {
        return this.repository.getById(id);
    }

    save(product: Product): void {
        this.repository.save(product);
    }
}

const repository = new ProductRepository();
const service = new ProductService(repository);
service.save({ id: 'p01', name: 'product 1', quantity: 10, price: 200 } as Product);


console.log('Product :', service.getById('p01'));




