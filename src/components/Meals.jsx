import { useGlobalContext } from '../context';

const Meals = () => {

  const context = useGlobalContext();
  console.log("context:", context)

  return (

    <div>
      <h1>Who are you</h1>
    </div>
  )


}

export default Meals;