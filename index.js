import ProductManager from "./managers/productManager.js";

const productManager = new ProductManager();

const context = async() =>{
    const test = await productManager.getProducts();
    console.log(test)
    let testProduct = {
        title: 'producto prueba',
        description:'Este es un producto prueba',
        price:200,
        thumbnail:'Sin imagen',
        code:'abc123',
        stock: 30
    }
 //Agrego el producto test solicitado en el desafio   
await productManager.addProducts(testProduct)

//Me trae todos los productos del listado
const newProduct = await productManager.getProducts();
console.log('This is the list of products:', newProduct)
//Busco Item By ID
await productManager.getProductsById(2);
//Agrego un producto con todos sus campos
await productManager.addProducts('prod2', 'Este es un producto agregado', 300, 'thumbnail', 'AR20', 5)
//Agrego un producto con campos faltantes para que me arroje el mensaje que falta completar campos
await productManager.addProducts('prod2', 300, 'thumbnail', 'AR20', 5)
//Borro un producto
await productManager.deleteProduct(5);
//Hago update de la informaicon de un producto
 await productManager.updateProduct(6, {title:'Este es el producto updated', description:'Este es el producto con update'});
}

context();