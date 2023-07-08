import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import loading from "../../assets/icons/loading.jpg";
import { DishItem } from "../../components/DishItem";
import { Payment } from "../../components/Stripe/";

// import { Stepper } from "../../components/Stepper";
// import { FaTrashAlt } from "react-icons/fa"
import { Footer } from "../../components/Footer";

export function Order() {
  const { user } = useAuth()
  const [quantity, setQuantity] = useState(1);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [userOrder, setUserOrder] = useState([]);
  const [images, setImages] = useState({});
  const [orderTotalPrice, setOrderTotalPrice] = useState(10)
  const [itemTotalPrice, setItemTotalPrice] = useState({})

  async function handleOrderItemDelete(id_dish) {
    try {
      await api.delete("order/delete",
        {
          data: {
            id_user: user.id,
            id_dish: id_dish,
          }
        });

      setUserOrder(prevUserOrder => prevUserOrder.filter(item => item.dish_id !== id_dish));

      const updatedTotalPrice = userOrder.reduce((accumulator, item) =>
        accumulator + item.quantity * item.item_price_at_time,
        0
      );
      setOrderTotalPrice(updatedTotalPrice);

      setItemTotalPrice(prevItemTotalPrice => {
        const newItemTotalPrice = { ...prevItemTotalPrice };
        delete newItemTotalPrice[id_dish];
        return newItemTotalPrice;
      });

    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    async function fetchApi() {
      const { data } = await api.get(`/order/index/${user.id}`);
      setQuantity(quantity);
      setUserOrder(data);

      const imgNames = data.map((item) => item.dish_img);
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

  useEffect(() => {
    setLocalQuantity(quantity)
  }, [localQuantity, quantity]);

  useEffect(() => {
    const totalPrice = userOrder.reduce(
      (accumulator, item) =>
        accumulator + (itemTotalPrice[item.dish_id] || item.quantity * item.item_price_at_time),
      0
    );
    setOrderTotalPrice(totalPrice);
  }, [userOrder, itemTotalPrice]);
  return (
    <>
      <Container>
        <Header />
        <div className="wrapper">

          <div className="order-info-wrapper">
            <h2>My Order</h2>
            {userOrder.map((item) => (
              // key={String(item.dish_id)
              <DishItem
                key={String(item.dish_id)}
                handleOrderItemDelete={handleOrderItemDelete}
                setItemTotalPrice={setItemTotalPrice}
                setQuantity={setQuantity}
                images={images}
                dishImage={item.dish_img}
                dishPrice={item.item_price_at_time}
                dishQuantity={item.quantity}
                dishName={item.dish_name}
                dishId={item.dish_id}
              />
            ))}
            <div className="orderPrice">Total: U${orderTotalPrice.toFixed(2)}</div>
          </div>
          <div className="payment-wrapper">
            <Payment />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
