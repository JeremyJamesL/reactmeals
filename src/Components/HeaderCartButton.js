import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import { useContext } from "react";
import AppContext from "../Context/app-context";

function HeaderCartButton() {

  const ctx = useContext(AppContext)

  return (
    <button className={classes.button} onClick={() => ctx.updateShowModal(true)}>
        <CartIcon className={classes.icon}/>    
        Your Cart
        <div className={classes.badge}>
            {ctx.productCounter}
        </div>
    </button>
  )
}
export default HeaderCartButton