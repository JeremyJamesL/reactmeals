import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";

function HeaderCartButton() {
  return (
    <button className={classes.button}>
        <CartIcon className={classes.icon}/>    
        Your Cart
        <div className={classes.badge}>
            0
        </div>
    </button>
  )
}
export default HeaderCartButton