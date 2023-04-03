import { useState } from "react";

const MealsList = () => {
    const todaysMeals = [
        { name: "Baked Meal", calories: 400, id: 23 },
        { name: "Baked Meal", calories: 400, id: 23 },
        { name: "Baked Meal", calories: 400, id: 23 }
    ];

    const [meals, setMeals] = useState(todaysMeals);

    return (
        <div>
         
                
            for (var i=0; i<todaysMeals.length; i++){
                    todaysMeals[i]
                    }
                
            </h1>
        </div>

    )
}
export default MealsList 