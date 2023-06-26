import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import caretLeft from '../../assets/icons/CaretLeft.svg'
import { Container, Form } from "./styles"

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from 'react-router-dom';

export function DisplayDish() {
  const { id } = useParams();
  const [img, setImg] = useState([]);
  // function handleImageChange(e) {
  //   const file = e.target.files[0]; // Get the first selected file
  //   setDishImg(file)

  // }
  // function handleAddIngredient() {
  //   setIngredients(prevState => [...prevState, newIngredient])
  //   setNewIngredient("")
  // }
  // function handleRemoveIngredient(deleted) {
  //   setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  // }
  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }
  useEffect(() => {

    async function fetchApi() {
      const response = await api.get(`/dishes/show/${id}`);
      const { data } = response;
      console.log(data);
      const img = `${api.defaults.baseURL}/files/${data.image}`
      setImg(img)
    }

    fetchApi()



  }, [])

  return (
    <Container>
      <Header isAdmin />
      <div>
        <h1>Detail Page</h1>
        <p>ID: {id}</p>
      </div>
      <Form>
        <div className="back-btn"><img src={caretLeft} alt="" /><span>voltar</span></div>
        <h2>Novo Prato</h2>
        DetailPage()
        <img src={img} alt="" />
      </Form>
      <Footer />
    </Container>
  )
}