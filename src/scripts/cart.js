class Product {
    title = 'DEFAULT';
    imageURl;
    description;
    newPrice;
    oldPrice;
}

console.log(new Product());

const productList = {
    products : [
        new Product()//setting up a new object 
    ]
}