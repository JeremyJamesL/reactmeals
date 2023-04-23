import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  return (
    <li className={classes.meal} id={props.mealID}>
        <div>
             <h3>{props.mealName}</h3>
             <div className={classes.description}>{props.mealDescription}</div>
        </div>
        <MealItemForm/>
    </li>
  )
  }

export default MealItem;
