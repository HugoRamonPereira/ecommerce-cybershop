## E-Commerce App



### Add Product to Cart

When adding a product to the Cart we are using a library called [use-shopping-cart](https://github.com/dayhaysoos/use-shopping-cart#readme) and with that we can have a lot of utility functions such as:
* addItem to add items to the cart with data of the product like the storage ammount which is our case in this project.
* incrementItem which uses React useState under the hood so we don't have to create a new state increment or decrement items to the cart.
* cartCount that will give us the items.length so we don't have to write it ourselves.

And when we add an item to the cart a toast appear in the bottom right corner displaying the info of the product added and if the product is already in the cart its amount will be increased instead of unnecessarily adding a new one to the cart.

### Cart Page & Details

When in the cart page, we can see the selected products and also the values being calculated with the help of the functions we created and also some
helper functions from the library useShoppingCart such as: formatTotalPrice, totalPrice, cartCount, setItemQuantity, removeItem and others.
When we have no products in the cart the component CartItemsEmpty. And last but not least the toast was added with the destructive variant which turns the toast into a red toast.
