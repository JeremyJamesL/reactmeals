import React from "react";
import { useContext } from "react"
import classes from "./Modal.module.css"
import ModalContext from "../Context/app-context"

function Modal() {
  const ctx = useContext(ModalContext);

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={() => ctx.updateShowModal(false)}></div>
      <div className={classes.modal}>
      This is the modal
      </div>
    </React.Fragment>
  )
}
export default Modal 