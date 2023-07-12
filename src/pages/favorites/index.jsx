import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import loading from "../../assets/icons/loading.jpg";
import { DishItem } from "../../components/DishItem";
import { Footer } from "../../components/Footer";

// import { Stepper } from "../../components/Stepper";
// import { FaTrashAlt } from "react-icons/fa"

export function Favorites() {
  const { user } = useAuth()
  const [userOrder, setUserOrder] = useState([]);
  const [images, setImages] = useState({});

  async function handleOrderItemDelete(id_dish) {
    try {
      await api.get("favoritelist/index");

      setUserOrder(prevUserOrder => prevUserOrder.filter(item => item.dish_id !== id_dish));



    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    async function fetchApi() {
      const { data } = await api.get("favoritelist/index");

      console.warn(data);
      setUserOrder(data);

      const updatedUserOrder = data.map((item) => ({
        dish_id: item.id,
        dish_img: item.image,
        item_price_at_time: item.price,
        dish_name: item.name,
        desc: item.description
      }));
      setUserOrder(updatedUserOrder);
      console.log(userOrder);

      const imgNames = data.map((item) => item.image);
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

    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);



  return (
    <Container>
      <Header />
      <div className="fav-list">
        <h2>My Favorite List</h2>
        <div className="fav-display">

          {userOrder.map((item) => (
            <div className="fav-item" key={String(item.dish_id)}>
              <DishItem
                handleOrderItemDelete={handleOrderItemDelete}
                images={images}
                dishImage={item.dish_img}
                dishPrice={item.item_price_at_time}
                dishQuantity={item.quantity}
                dishName={item.dish_name}
                dishId={item.dish_id}
                dishDesc={item.desc}
              />
            </div>

          ))}
        </div>

      </div>
      <Footer />
    </Container>
  );
}
