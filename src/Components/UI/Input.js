import { useState } from "react"
import classes from "./Input.module.css"

function Input(props) {

  return (
    <div className={classes.input} >
        <label htmlFor="add">Amount</label>
        <input type="number" name="add" className={classes.input}/>
    </div>
  )
}
export default Input