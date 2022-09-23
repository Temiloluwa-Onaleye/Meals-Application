import { useGlobalContext } from '../context';

const Meals = () => {

  const { meals } = useGlobalContext();


  return (
    <div>
      {
        meals.map((meal) => {
          return (
            <ul key={meal.idMeal} id={meal.idMeal}>
              <li>{meal.strMeal}</li>
            </ul>
          )
        })


      }
    </div>
  )




}

export default Meals;