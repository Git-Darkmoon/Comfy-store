import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems)

  return (
    <>
      {cartItems.map((eachItem) => {
        return <CartItem key={eachItem.cartID} cartItem={eachItem} />
      })}
    </>
  )
}
export default CartItemsList
