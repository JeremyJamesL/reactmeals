import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../Context/app-context";

function HeaderCartButton(props) {
  const [pulseBtn, updatePulseBtn] = useState(false);
  const ctx = useContext(AppContext)

  useEffect(() => {
    updatePulseBtn(true);
    const timer = setTimeout(() => {
            updatePulseBtn(false);
        }, 1000)
        return () => clearTimeout(timer);
  }, [ctx.currentMealList])


  return (
    <button className={`${classes.button} ${pulseBtn ? classes.bump : ''}`} onClick={() => ctx.updateShowModal(true)}>
        <CartIcon className={classes.icon}/>    
        Your Cart
        <div className={classes.badge}>
            {ctx.currentMealList.length > 0 ? ctx.currentMealList.length : '0'}
        </div>
    </button>
  )
}
export default HeaderCartButton