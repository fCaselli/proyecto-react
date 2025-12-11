<h3 className="checkout-total">
  Total a pagar: ${cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toLocaleString()}
</h3>