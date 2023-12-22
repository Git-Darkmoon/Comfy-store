import { useSelector } from "react-redux"
import { formatPrice } from "../utils"

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  )

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <div className="font-medium">{formatPrice(cartTotal)}</div>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Shipping</span>
          <div className="font-medium">{formatPrice(shipping)}</div>
        </p>
        {/* TAX */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Tax</span>
          <div className="font-medium">{formatPrice(tax)}</div>
        </p>
        {/* Order Total */}
        <p className="flex justify-between text-lg mt-3 pb-2">
          <span>Order Total</span>
          <div className="font-medium">{formatPrice(orderTotal)}</div>
        </p>
      </div>
    </div>
  )
}
export default CartTotals
