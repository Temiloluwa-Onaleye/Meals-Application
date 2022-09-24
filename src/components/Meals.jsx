import { useGlobalContext } from '../context';
import { BiLike } from 'react-icons/bi'

const Meals = () => {

  const { meals, loading } = useGlobalContext();


  return (
    <section className="section-center">
      {
        meals.map((meal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = meal
          return (
            <article className="single-meal" key={idMeal} id={idMeal}>
              <img src={image} alt="image" className="img" />
              <footer>
                <h5>{title}</h5>
                <button className='like-btn'>
                  <BiLike />
                </button>
              </footer>
            </article>
          )
        })


      }
    </section>
  )




}

export default Meals;