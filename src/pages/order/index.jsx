import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import loading from "../../assets/icons/loading.jpg";
import { DishItem } from "../../components/DishItem";
import { Payment } from "../../components/Stripe/";
import { IncludeButton } from "../../components/IncludeButton"
import { Footer } from "../../components/Footer";

export function Order() {
  const { user } = useAuth()
  const [quantity, setQuantity] = useState(1);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [userOrder, setUserOrder] = useState([]);
  const [images, setImages] = useState({});
  const [orderTotalPrice, setOrderTotalPrice] = useState(undefined)
  const [itemTotalPrice, setItemTotalPrice] = useState({})
  const [paymentSession, setPaymentSession] = useState(false)
  const [orderInfoWrapper, setOrderInfoWrapper] = useState("order-info-wrapper")
  const [nextButton, setNextButton] = useState("")
  const [paymentWrapper, setPaymentWrapper] = useState("hidden")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track the window width
  const show_hide = paymentSession || windowWidth;

  // Show and hide sessions in mobile view
  function handlePayNextStep() {
    if (paymentSession) {
      setPaymentSession(false)
    }
    setPaymentSession(true)
  }

  // Remove an item from the order
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
  // Show and hide sessions in mobile view
  useEffect(() => {
    if (windowWidth <= 1300) {
      setOrderInfoWrapper(paymentSession ? "hidden" : "order-info-wrapper")
      setPaymentWrapper(paymentSession ? "payment-wrapper" : "hidden")
      setNextButton("")

    } else {
      setOrderInfoWrapper("order-info-wrapper")
      setPaymentWrapper("payment-wrapper")
      setNextButton("hidden")
    }
  }, [show_hide])

  // Fetch order info from the api
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

  // Set the quantity
  useEffect(() => {
    setLocalQuantity(quantity)
  }, [localQuantity, quantity]);

  // Calculate the orders price
  useEffect(() => {
    const totalPrice = userOrder.reduce(
      (accumulator, item) =>
        accumulator + (itemTotalPrice[item.dish_id] || item.quantity * item.item_price_at_time),
      0
    );
    const roundedPrice = totalPrice.toFixed(2)
    setOrderTotalPrice(roundedPrice);
  }, [userOrder, itemTotalPrice, orderTotalPrice]);

  // Window resize 
  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">

          <div className={orderInfoWrapper} >
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
            <div className="orderPrice">Total: U${orderTotalPrice}</div>
            <IncludeButton title="Next" className={nextButton} onClick={handlePayNextStep} />
          </div>
          <div className={paymentWrapper} >
            <p>Payment </p>
            {orderTotalPrice && (


              < Payment orderPrice={orderTotalPrice} re_render={paymentSession} />
            )
            }
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
