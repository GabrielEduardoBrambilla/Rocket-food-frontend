import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { IngredientTag } from '../../components/IngredientTag'

import caretLeft from '../../assets/icons/CaretLeft.svg'
import { Container } from "./styles"
import Receipt from '../../assets/icons/Receipt.svg'
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Stepper } from '../../components/Stepper'

export function DisplayDish() {
  const { id } = useParams();
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    async function fetchApi() {
      const response = await api.get(`/dishes/show/${id}`);
      const { data } = response;
      // console.log(data);
      const img = `${api.defaults.baseURL}/files/${data.image}`
      const dishData = { ...data, image: img }
      setDish(dishData)
      const ingredients = data.ingredients
      setIngredients(ingredients)

    }

    fetchApi()



  }, [id])

  console.table(ingredients)
  return (
    <>
      <Header isAdmin notInMobile />
      <Container>

        <div className="back-btn"><img src={caretLeft} alt="" /><span>voltar</span></div>

        <img src={dish.image} alt="" />

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
            <Button receipt={Receipt} title={`incluir - R$ ${dish.price * quantity}`} />
          </div>
        </section>
      </Container >
      <Footer />
    </>

  )
}