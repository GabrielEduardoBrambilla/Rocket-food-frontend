import { Container } from "./styles"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { IngredientTag } from '../../components/IngredientTag'
import { PiCaretLeftBold, PiReceipt } from 'react-icons/pi'//Maybe is the PiReceiptBold

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Stepper } from '../../components/Stepper'
import { useAuth } from "../../hooks/auth";
import { toast } from 'react-toastify'

export function DisplayDish() {
  const { id } = useParams();
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const history = useNavigate();

  function handleOrderInclude() {
    async function fetch() {
      await api.post(`/order/`, {
        id_user: user.id,
        id_dish: dish.id,
        selectedQuantity: quantity,
        dishPrice: dish.price
      }).then(() => {
        toast.success("Add to order", {
          position: 'bottom-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, {
            position: 'bottom-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light'
          })
        } else {
          toast.error("Error adding to order", {
            position: 'bottom-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light'
          })
        }
      });;
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