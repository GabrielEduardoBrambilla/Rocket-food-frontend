import { Container } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { IngredientTag } from '../../components/IngredientTag'
import { PiCaretLeftBold, PiReceipt } from 'react-icons/pi'//Maybe is the PiReceiptBold

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Stepper } from '../../components/Stepper'
import { useAuth } from "../../hooks/auth";

export function DisplayDish() {
  const { id } = useParams();
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const history = useHistory();

  function handleOrderInclude() {
    async function fetch() {
      console.log("User " + user.id)
      console.log("Dish " + dish.id)
      console.log("Quant " + quantity)
      console.log("Price " + dish.price)
      await api.post(`/order/`, {
        id_user: user.id,
        id_dish: dish.id,
        selectedQuantity: quantity,
        dishPrice: dish.price
      });
    }
    console.log(dish)
    fetch()
  }

  function handleBackButton() {
    history.goBack(); // Go back to the previous page in the history
  }

  useEffect(() => {

    async function fetchApi() {
      const response = await api.get(`/dishes/show/${id}`);
      const { data } = response;
      // console.log(data);
      const img = `${api.defaults.baseURL}/files/${data.image}`
      const dishData = { ...data, image: img }
      setDish(dishData)
      console.log(dish)

      const ingredients = data.ingredients
      setIngredients(ingredients)

    }

    fetchApi()



  }, [id])

  return (
    <>
      <Header notInMobile />
      <Container>
        <section className="left-section">
          <Link onClick={handleBackButton} to='/' className="back-btn"><PiCaretLeftBold /><span>back</span></Link>
          <img src={dish.image} alt="" />
        </section>

        <section className="right-section">
          <h2 className='dishName'>{dish.name}</h2>
          <p className='dishDescription'>{dish.description}</p>
          <div className="ingredients">
            {
              ingredients.map(ingredients => (
                < IngredientTag key={ingredients.id} name={ingredients.name} />
              ))
            }
          </div>
          <div className="counter">
            <Stepper quantity={quantity} setQuantity={setQuantity} />
            <Button onClick={handleOrderInclude} icon={<PiReceipt />} title={`incluir - R$ ${dish.price * quantity}`} />
          </div>
        </section>
      </Container >
      <Footer />
    </>

  )
}