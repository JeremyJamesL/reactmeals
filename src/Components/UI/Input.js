import classes from "./Input.module.css"

function Input() {
  return (
    <div className={classes.input}
    >
        <label htmlFor="add">Amount</label>
        <input type="number" name="add" className={classes.input} defaultValue={0} />
    </div>
  )
}
export default Input