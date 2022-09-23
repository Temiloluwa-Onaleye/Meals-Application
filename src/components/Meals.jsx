import { useGlobalContext } from '../context';

const Meals = () => {

  const { meals } = useGlobalContext();


  return (
    <div className="section-center">
      {
        meals.map((meal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = meal
          return (
            <article className="single-meal" key={idMeal} id={idMeal}>
              <img src={image} style={{ width: '200px' }} alt="image" className="img" />
              <footer>
                <h5>{title}</h5>
                <button className='like-btn'>Click me!</button>
              </footer>
            </article>
          )
        })


      }
    </div>
  )




}

export default Meals;