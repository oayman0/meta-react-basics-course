import MealsCounter from "./MealsCounter"
import MealsList from "./MealsList"
import MealsProvider from "./MealsProvider"

const MealsApp=()=>{
    return(
    <div>
        <MealsProvider>
            <MealsList/>
            <MealsCounter/>
        </MealsProvider>
        
    </div>
    )
}
export default MealsApp