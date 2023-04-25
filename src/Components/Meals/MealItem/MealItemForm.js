import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import AppContext from "../../../Context/app-context"
import { useContext, useState, useEffect } from "react"

function MealItemForm(props) {
  const ctx = useContext(AppContext);
  const meal = props.mealObj;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedMeal = {...meal, amount: parseInt(e.target.previousElementSibling.childNodes[1].value)};
    ctx.handleMealAdd(updatedMeal);
  }


  return (
    <form action="" className={classes.form}>
        <Input />
        <button onClick={handleFormSubmit}>+ Add</button>
    </form>
  )
}
export default MealItemForm