import classes from "./CartItem.module.css"

function CartItem(props) {
  return (
    <li className={classes["cart-item"]}>
        <div>
        <h2>
            {props.mealName}
        </h2>
        <div className={classes.summary}>
        <div className={classes.price}>
                ${props.mealPrice}
            </div>
            <div className={classes.amount}>
                {props.mealAmount}
            </div>
        </div>
        </div>
        <div className={classes.action}>
                <button>-</button>
                <button>+</button>
        </div>

    </li>

  )
}
export default CartItem