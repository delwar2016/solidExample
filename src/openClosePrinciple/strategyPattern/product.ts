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

const STORE1: Product[] = [];

const STORE2: Product[] = [];


interface IProductRepository {
    getById(id: string): Product | undefined;
    save(product: Product): void;
}

class ProductRepositoryStore1 implements IProductRepository{
    getById(id: string): Product | undefined {
        // Implementation of fetching product by id from the database
        return STORE1.find(product => product.id === id);
    };

    save(product: Product): void {
        // implementation of saving product to the database
        STORE1.push(product);
    };
};

class ProductRepositoryStore2 implements IProductRepository{
    getById(id: string): Product | undefined {
        // Implementation of fetching product by id from the database
        return STORE2.find(product => product.id === id);
    };

    save(product: Product): void {
        // implementation of saving product to the database
        STORE2.push(product);
    };
};

class ProductService {
    constructor(private readonly repository: IProductRepository) {
    }

    getById(id: string): Product | undefined {
        return this.repository.getById(id);
    }

    save(product: Product): void {
        this.repository.save(product);
    }
}

const repository1 = new ProductRepositoryStore1();
const service1 = new ProductService(repository1);
service1.save({ id: 'p01', name: 'product 1', quantity: 10, price: 200 } as Product);


const repository2 = new ProductRepositoryStore2();
const service2 = new ProductService(repository2);
service2.save({ id: 'p01', name: 'product 2', quantity: 5, price: 150 } as Product);

console.log('Product from store 1:', service1.getById('p01'));

console.log('Product from store 2:', service2.getById('p01'));




