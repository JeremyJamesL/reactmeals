import classes from "./MealItemForm.module.css"
import Input from "../UI/Input"

function MealItemForm() {
  return (
    <form action="" className={classes.form}>
        <Input/>
        <button>+ Add</button>
    </form>
  )
}
export default MealItemForm