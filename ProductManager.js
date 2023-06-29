class ProductManager {
  constructor() {
    this.products = [];
  }

  static correlativoId = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title === undefined ||
      description === undefined ||
      price === undefined ||
      thumbnail === undefined ||
      code === undefined ||
      stock === undefined
    ) {
      throw new Error("Completar todos los campos obligatorios");
    }

    let codeExists = this.products.some((product) => product.code === code);

    if (codeExists) {
      throw new Error("Código existente, por favor inténtalo de nuevo");
    } else {
      ProductManager.correlativoId++;
      const newProduct = {
        id: ProductManager.correlativoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let product = this.products.find((product) => product.id === id);

    if (product !== undefined) {
      return product;
    } else {
      return "Producto no existente";
    }
  }

  updateProduct(id, updatedFields) {
    let productIndex = this.products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  deleteProduct(id) {
    let productIndex = this.products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    } else {
      throw new Error("Producto no encontrado");
    }
  }
}

const myFirstProducts = new ProductManager();

myFirstProducts.addProduct(
  "Producto1",
  "Este es un producto de prueba",
  500,
  "imagen",
  "001",
  10
);

console.log("Desde getProducts:", myFirstProducts.getProducts());
console.log("Desde getProductById:", myFirstProducts.getProductById(1));

module.exports = ProductManager;