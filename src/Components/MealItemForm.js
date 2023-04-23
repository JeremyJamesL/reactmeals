import classes from "./MealItemForm.module.css"
import Input from "../UI/Input"
import AppContext from "../Context/app-context"
import { useContext } from "react"

function MealItemForm() {

  const ctx = useContext(AppContext);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    ctx.updateProductCounter(ctx.productCounter + 1) 
  }

  return (
    <form action="" className={classes.form}>
        <Input/>
        <button onClick={handleFormSubmit}>+ Add</button>
    </form>
  )
}
export default MealItemForm