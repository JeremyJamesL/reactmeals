import Card from "../UI/Card"
import MealItem from "./MealItem"
import {DUMMY_MEALS} from "../Data/dummy-meals"
import classes from "./AvailableMeals.module.css"

function AvailableMeals() {

  const renderMeals = (meal) => {
    return (
        <MealItem 
          mealID={meal.id} 
          mealName={meal.name}
          mealDescription={meal.description}
        />
    )
  }

  return (
    <div className={classes.meals}>
        <Card>
            <ul>
              {DUMMY_MEALS.map((m) => renderMeals(m))}
            </ul>
        </Card>
    </div>
  )
}
export default AvailableMeals