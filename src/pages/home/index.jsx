import { Container } from "./styles"
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { useEffect } from 'react'

import loading from "../../assets/icons/loading.jpg"

import { useState } from "react";
import { api } from "../../services/api";
import { Footer } from '../../components/Footer';


import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Home() {
  const [meal, setMeal] = useState([])
  const [dessert, setDessert] = useState([])
  const [beverage, setBeverage] = useState([])
  const [images, setImages] = useState({}) // Store images in an object for efficient lookup

  console.log(dessert);
  console.log(beverage);


  useEffect(() => {

    async function fetchApi() {
      const response = await api.get(`/dishes/index`);
      const { data } = response; // Assuming the array of dishes is in the `data` property

      const filteredMeals = data.filter((dish) => dish.category === "Meal");
      const filteredDessert = data.filter((dish) => dish.category === "Dessert");
      const filteredBeverage = data.filter((dish) => dish.category === "Beverage");


      setMeal(filteredMeals);
      setDessert(filteredDessert)
      setBeverage(filteredBeverage)

      const imgNames = data.map((item) => item.image)
      await Promise.all(imgNames.map(fetchImage)) // Fetch all images concurrently

      function fetchImage(imageName) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `${api.defaults.baseURL}/files/${imageName}`;
          img.onload = () => {
            setImages((prevImages) => ({
              ...prevImages,
              [imageName]: img.src
            }));
            resolve();
          };
          img.onerror = () => {
            setImages((prevImages) => ({
              ...prevImages,
              [imageName]: loading
            }));
            reject();
          };
        });
      }

    }

    fetchApi()



  }, [])


  return (
    <Container>
      <Header />
      <div className="Meal type-wrapper">
        <p className="type-title">Meal</p>
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper-container"
        >
          {
            meal.map(meal => (
              < SwiperSlide key={String(meal.id)} style={{ height: '100%' }} >
                <Card
                  id_Dish={meal.id}
                  img={images[meal.image] || loading}
                  description={meal.description}
                  title={meal.name}
                  redirect={`displaydish/${meal.id}`}
                  price={meal.price}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      {
        /* <div className="Beverage type-wrapper">
          <p>Beverage</p>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={90}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              beverage.map(meal => (
                <SwiperSlide key={String(meal.id)}>
                  <Card
                    id_Dish={meal.id}
                    img={images[meal.image]}
                    description={meal.description}
                    title={meal.name}
                    redirect={`displaydish/${meal.id}`}
  
                    price={meal.price}
                  />
                </SwiperSlide>
  
              ))
            }
          </Swiper>
        </div>
  
        <div className="Dessert type-wrapper">
          <p>Dessert</p>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={90}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              dessert.map(meal => (
                <SwiperSlide key={String(meal.id)}>
                  <Card
                    id_Dish={meal.id}
                    img={images[meal.image]}
                    description={meal.description}
                    title={meal.name}
                    redirect={`displaydish/${meal.id}`}
  
                    price={meal.price}
                  />
                </SwiperSlide>
  
              ))
            }
          </Swiper>
        </div> */
      }
      <Footer></Footer>
    </Container >
  )
}