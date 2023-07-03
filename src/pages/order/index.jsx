import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import { Stepper } from "../../components/Stepper";
import loading from "../../assets/icons/loading.jpg";
import { FaTrashAlt } from "react-icons/fa"

export function Order() {
  const { user } = useAuth()
  const [quantity, setQuantity] = useState(1);
  const [userOrder, setUserOrder] = useState([]);
  const [images, setImages] = useState({});
  const orderTotalPrice = userOrder.reduce(
    (accumulator, item) =>
      accumulator + item.quantity * item.item_price_at_time,
    0
  )

  useEffect(() => {

    async function fetchApi() {
      const { data } = await api.get(`/order/index/${user.id}`);
      setQuantity(quantity)
      console.log(quantity)
      setUserOrder(data)

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

    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id])
  return (
    <Container>
      <Header />
      <div className="order-info-wrapper">
        <h2>My Order</h2>
        {
          userOrder.map((item) => {
            return (
              <div className="order_item" key={String(item.dish_id)}>
                <img className="dish_img left-section" src={images[item.dish_img] || loading} alt={item.dish_img} />
                <div className="middle-section">
                  <p>{item.dish_name}</p>
                  <Stepper
                    className="stepper"
                    quantity={item.quantity}
                    setQuantity={(newQuantity) => {
                      setUserOrder((prevOrder) =>
                        prevOrder.map((orderItem) =>
                          orderItem.dish_id === item.dish_id
                            ? { ...orderItem, quantity: newQuantity }
                            : orderItem
                        )
                      );
                    }}
                  />
                </div>
                <FaTrashAlt className="right-section " />
              </div>

            )
          })
        }
        <span>
          Total: {orderTotalPrice}
        </span>
      </div>
      <div className="payment-wrapper">

      </div>
    </Container>
  );
}
