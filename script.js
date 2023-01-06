var shoppingCart = {
  items: [],
  total: 0,
  addItem: function(productId, name, price) {
    this.items.push({
      productId: productId,
      name: name,
      price: price
    });
    this.total += price;
  }
};

var addButtons = document.querySelectorAll(".add-button");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function() {
    // Get the product details from the button
    var product = {
      id: this.dataset.productId,
      name: this.dataset.productName,
      price: this.dataset.productPrice
    };
    
    // Add the item to the shopping cart and update the total
    shoppingCart.addItem(product);
    updateTotal();
    
    // Add the product to the basket
    addToBasket(product);
  });
}

function updateTotal() {
  document.querySelector("#total").textContent = shoppingCart.total;
}

function addToBasket(product) {
  // Get a reference to the basket
  var basket = document.querySelector("#basket ul");
  
  // Create a new list item for the product
  var productElement = document.createElement("li");
}