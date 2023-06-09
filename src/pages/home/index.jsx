import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import loading from "../../assets/icons/loading.jpg";
import sweetsMobile from "../../assets/logo/sweetsMobile.png";
import sweetsDesktop from "../../assets/logo/sweetsDesktop.png";
import { useState } from "react";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Fuse from "fuse.js";

export function Home() {
  const [meal, setMeal] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [beverage, setBeverage] = useState([]);
  const [images, setImages] = useState({});
  const [sweetsImage, setSweetsImage] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [dataGlobal, setDataGlobal] = useState([]);
  const filteredMeals = searchValue ? performFuzzySearch(dataGlobal, searchValue, "Meal") : meal;
  const filteredDesserts = searchValue ? performFuzzySearch(dataGlobal, searchValue, "Dessert") : dessert;
  const filteredBeverages = searchValue ? performFuzzySearch(dataGlobal, searchValue, "Beverage") : beverage;
  var userWarning = false;

  // Function to perform the fuzzy search
  function performFuzzySearch(data, searchValue, category) {
    const options = {
      keys: ["name", "ingredients.name"],
      threshold: 0.4,
    };

    const fuse = new Fuse(data, options);
    const searchResults = fuse.search(searchValue);

    if (searchResults.length === 0) {
      userWarning = true;
      // Handle the case when there are no search results
      const filteredDishes = data.filter((dish) => dish.category === category);

      return filteredDishes;
    }

    const filteredResults = searchResults
      .map((result) => result.item)
      .filter((dish) => dish.category === category);

    return filteredResults
  }

  useEffect(() => {
    async function fetchApi() {
      if (
        meal.length === 0 ||
        dessert.length === 0 ||
        beverage.length === 0
      ) {
        const response = await api.get(`/dishes/index`);
        const { data } = response; // Assuming the array of dishes is in the `data` property

        setDataGlobal(data);

        const filteredMeals = data.filter((dish) => dish.category === "Meal");
        const filteredDessert = data.filter(
          (dish) => dish.category === "Dessert"
        );
        const filteredBeverage = data.filter(
          (dish) => dish.category === "Beverage"
        );

        setMeal(filteredMeals);
        setDessert(filteredDessert);
        setBeverage(filteredBeverage);
      }

      const imgNames = dataGlobal.map((item) => item.image);
      await Promise.all(imgNames.map(fetchImage)); // Fetch all images concurrently

      function fetchImage(imageName) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `${api.defaults.baseURL}/files/${imageName}`;
          img.onload = () => {
            setImages((prevImages) => ({
              ...prevImages,
              [imageName]: img.src,
            }));
            resolve();
          };
          img.onerror = () => {
            setImages((prevImages) => ({
              ...prevImages,
              [imageName]: loading,
            }));
            reject();
          };
        });
      }
    }

    function handleResize() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) {
        setSweetsImage(sweetsMobile);
      } else {
        setSweetsImage(sweetsDesktop);
      }
    }

    fetchApi();

    // Call handleResize initially and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [beverage.length, dataGlobal, dessert.length, meal.length]);

  return (
    <Container>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      {userWarning && (
        <p className="warning-text">There are no available dishes with searched name </p>
      )}
      <div className="slogan-banner">
        <img src={sweetsImage} alt="" />
        <div className="slogan-text">
          <p className="slogan-title">Amazing flavors
          </p>
          <p className="slogan-description">Dishes prepared with selected ingredients and a bunch of love</p>

        </div>
      </div>

      {filteredMeals.length > 0 && (
        <div className="Meal type-wrapper">
          <p className="type-title">Meal</p>
          <Swiper
            modules={[Navigation, A11y]}
            navigation
            slidesPerView={1.5}
            className="swiper-container"
            breakpoints={{
              1300: {
                slidesPerView: 3,
                modules: [Navigation, A11y],
                pagination: {
                  dynamicBullets: true,
                },
              }
            }}
          >
            {
              filteredMeals.map(meal => (

                < SwiperSlide
                  height="unset" key={String(meal.id)} style={{ height: 'auto' }} >
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
      )}
      {filteredBeverages.length > 0 && (
        <div className="Beverage type-wrapper">
          <p className="type-title">Beverage</p>
          <Swiper
            modules={[Navigation, A11y]}
            navigation
            slidesPerView={1.5}
            className="swiper-container"
            breakpoints={{
              1300: {
                slidesPerView: 3,
                modules: [Navigation, A11y],
                pagination: {
                  dynamicBullets: true,
                },
              }
            }}
          >
            {
              filteredBeverages.map(meal => (

                < SwiperSlide
                  height="unset" key={String(meal.id)} style={{ height: 'auto' }} >
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
      )}
      {filteredDesserts.length > 0 && (
        <div className="Dessert type-wrapper">
          <p className="type-title">Dessert</p>
          <Swiper
            modules={[Navigation, A11y]}
            navigation
            className="swiper-container"
            slidesPerView={1.5}
            breakpoints={{
              1300: {
                slidesPerView: 3,
                modules: [Navigation, A11y],
                pagination: {
                  dynamicBullets: true,
                },
              }
            }}
          >
            {
              filteredDesserts.map(meal => (

                < SwiperSlide height="unset" key={String(meal.id)} style={{ height: 'auto' }} >
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
      )}

      <Footer></Footer>
    </Container >
  );
}
