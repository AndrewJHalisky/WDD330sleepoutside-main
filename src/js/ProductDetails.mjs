export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }
      async init() {
        //Fetch Product
        this.product = await this.dataSource.findProductById(this.productId);
        document.getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this))
      //Render Details
      this.rednerProductDetails();
    }
    addProductToCart(product) {
        setLocalStorage("so-cart", product);
    }
    
}

