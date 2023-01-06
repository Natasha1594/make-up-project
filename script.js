var shoppingCart = {
  items: [],
  total: 0,
  addItem: function(productId, price) {
    this.items.push(productId);
    this.total += price;
  }
};

var addButtons = document.querySelectorAll(".button");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function() {
    // Get the product ID and price from the button
    var productId = this.dataset.productId;
    var price = this.parentNode.previousSibling.textContent;
    
    // Add the item to the shopping cart and update the total
    shoppingCart.addItem(productId, price);
    updateTotal();
  });
}

function updateTotal() {
  document.querySelector("#total").textContent = shoppingCart.total;
}




