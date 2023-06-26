import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Container } from "./styles"
import { useEffect } from 'react'

import { useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [meal, setMeal] = useState([])
  const [dessert, setDessert] = useState([])
  const [beverage, setBeverage] = useState([])

  const [image, setImage] = useState([])



  useEffect(() => {

    async function fetchApi() {
      const response = await api.get(`/dishes/index`);
      const { data } = response; // Assuming the array of dishes is in the `data` property

      const filteredMeals = data.filter((dish) => dish.category === "Meal");
      const filteredDessert = data.filter((dish) => dish.category === "Dessert");
      const filteredBeverage = data.filter((dish) => dish.category === "Beverage");

      const imgNames = data.map(data => (data.image));

      setImage(imgNames)
      setMeal(filteredMeals);
      setDessert(filteredDessert)
      setBeverage(filteredBeverage)
    }

    fetchApi()



  }, [])


  return (
    <Container>
      <Header />
      <div className="Meal type-wrapper">
        <p>Meal</p>
        {
          meal.map(meal => (
            <Card
              key={String(meal.id)}
              id_Dish={meal.id}
              img={`${api.defaults.baseURL}/files/${(
                () => {
                  const matchingImage = image.find((imageName) => imageName === meal.image);
                  return matchingImage || '';
                })()}`}
              description={meal.description}
              title={meal.name}
              redirect={`displaydish/${meal.id}`}

              price={meal.price}
            />
          ))
        }
      </div>

      <div className="Beverage type-wrapper">
        <p>Beverage</p>
        {
          beverage.map(meal => (

            <Card
              key={String(meal.id)}
              id_Dish={meal.id}
              img={`${api.defaults.baseURL}/files/${(
                () => {
                  const matchingImage = image.find((imageName) => imageName === meal.image);
                  return matchingImage || ''; // Return the matching image name or an empty string if not found
                })()}`}
              description={meal.description}
              title={meal.name}
              price={meal.price}
            />
          ))
        }
      </div>

      <div className="Dessert type-wrapper">
        <p>Dessert</p>
        {
          dessert.map(meal => (

            <Card
              key={String(meal.id)}
              id_Dish={meal.id}
              img={`${api.defaults.baseURL}/files/${(
                () => {
                  const matchingImage = image.find((imageName) => imageName === meal.image);
                  return matchingImage || ''; // Return the matching image name or an empty string if not found
                })()}`}
              description={meal.description}
              title={meal.name}
              price={meal.price}
            />
          ))
        }
      </div>
    </Container>
  )
}