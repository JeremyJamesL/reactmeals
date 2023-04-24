import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import AppContext from "../../Context/app-context"
import { useContext } from "react"

function Cart(props) {

  const ctx = useContext(AppContext);

  const renderMealsInCart = (meal) => {
    return (
        <CartItem mealName={meal.name} mealPrice={meal.price} mealID={meal.id} mealAmount={meal.amount}/>
    )
  }

  return (
    <div>
        <ul className={classes["cart-items"]}>
            {props.mealsInCart.map((m) => renderMealsInCart(m))}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>$33</span>
        </div>
        <div className={classes.actions}>
            <button onClick={() => ctx.updateShowModal(false)}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
  )

}
export default Cart