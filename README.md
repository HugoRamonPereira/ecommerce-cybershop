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


### Stripe Integration

In order to make payments we used [Stripe](https://stripe.com) and the integration was made as follows:
 * In the route.ts file in the directory app/api/checkou/route.ts, in this file is where most of the things happened. In there we created the session, lineItems, the origin from the headers, specified important info on shipping, payment methods, countries we ship to, success and cancel pages and so on.
 * And there we used the validateCartItems function from the lib [use-shopping-cart](https://github.com/dayhaysoos/use-shopping-cart#readme) to make sure the clients are not able to change the price of the products to be able to pay a different value.
 * We hooked it up with the deviceInventory to bring in info on the selected products.
 * We also used the stripe.ts in the lib/stripe.ts to process the .env file and the apiVersion
 * And finally we used the NextResponse to return the session and make it go through successfully.


### Stripe Invoice Email

If you wish to send the invoice via email to the customers right after the purchase you can do that by going to the Stripe website logged in your account and go to search and put __Customer emails__ in the settings and check the toggle that appears as the first option and it says __Successful payments__ and just by doing that Stripe will be sending an automatic email when the purchase is finished and successful.
