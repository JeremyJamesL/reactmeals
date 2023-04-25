import classes from "./CartItem.module.css"
import AppContext from "../../Context/app-context"
import { useContext } from "react"

function CartItem(props) {

  const ctx = useContext(AppContext);

  const handleIncrement = (condition, ID) => {
    if(condition === 'more') {
        ctx.handleMealInc(ID);
    } else {
        ctx.handleMealDec(ID);
    }
  }

  return (
    <li className={classes["cart-item"]} id={props.mealID}>
        <div>
        <h2>
            {props.mealName}
        </h2>
        <div className={classes.summary}>
        <div className={classes.price}>
                ${props.mealPrice}
            </div>
            <div className={classes.amount}>
                {props.mealAmount.toString()}
            </div>
        </div>
        </div>
        <div className={classes.action}>
                <button onClick={() => handleIncrement('less', props.mealID)}>-</button>
                <button onClick={() => handleIncrement('more', props.mealID)}>+</button>
        </div>

    </li>

  )
}
export default CartItem