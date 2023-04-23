import classes from "./Modal.module.css"

function Modal() {
  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
            This is the modal
        </div>
    </div>
  )
}
export default Modal 