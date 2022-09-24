import { useGlobalContext } from '../context';
import { BiLike } from 'react-icons/bi'

const Meals = () => {

  const { meals, loading } = useGlobalContext();


  if (loading) {
    return (
      <section className='section'>
        <h4>Loading...</h4>
      </section>)

  }

  if (meals.length < 1) {
    return (
      <section className='section'>
        <h4>No meals matched your serach item, please try again</h4>
      </section>
    )
  }

  return (
    <section className="section-center">{
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