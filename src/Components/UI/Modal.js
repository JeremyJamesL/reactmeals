import React from "react";
import { useContext } from "react"
import classes from "./Modal.module.css"
import ModalContext from "../../Context/app-context"
import Cart from "../Cart/Cart";

function Modal(props) {
  const ctx = useContext(ModalContext);

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={() => ctx.updateShowModal(false)}></div>
      <div className={classes.modal}>
        <Cart mealsInCart={props.mealsInCart}/>
      </div>
    </React.Fragment>
  )
}
export default Modal 