import { Header } from '../../components/Header'
import { Container, Form } from "./styles"
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { useState } from "react";
import { IncludeButton } from '../../components/IncludeButton';
import caretLeft from '../../assets/icons/CaretLeft.svg'
import uploadIcon from '../../assets/icons/UploadSimple.svg'
import { api } from "../../services/api";
import { IngredientFormItem } from "../../components/IngredientFormItem"

export function CreateDish() {
  const [dishImg, setDishImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = () => {
    // console.log(user, id_Dish);
    api.post("/dishes/", {
      image: dishImg,
      price: price,
      category: category,
      name: name,
      ingredients: ingredients,
      description: description
    })
      .then(() => {
        alert("Add to favorites");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Not possible to be added to favorites");
        }
      });

  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
  }

  return (
    <Container>
      <Header isAdmin />

      <Form>
        <div className="back-btn"><img src={caretLeft} alt="" /><span>voltar</span></div>
        <h2>Novo Prato</h2>
        <label htmlFor="imgUpload">
          Dish Image
          <Input
            onChange={e => setDishImg(e.target.value)}
            id='imgUpload'
            placeholder='Select Image'
            type='file'
            icon={uploadIcon}
          />
        </label>
        <label htmlFor="name">
          Name
          <Input
            onChange={e => setName(e.target.value)}
            id='name'
            placeholder='Ex: Mac and cheese'
          />
        </label>
        <label htmlFor="category">
          Category
          <input
            onChange={e => setCategory(e.target.value)}
            id='category'
            placeholder='Select a Category'
            type
          />
        </label>
        <label htmlFor="ingredients">
          Ingredients
          <div className="">
            <IngredientFormItem placeholder='Adicionar' isNew></IngredientFormItem>
            <IngredientFormItem value="Pão de Batata"></IngredientFormItem>
          </div>
        </label>


        <label htmlFor="price">
          Price
          <Input
            onChange={e => setPrice(e.target.value)}
            id='price'
            placeholder='Ex: 10 [just the number]'
          />
        </label>
        <label htmlFor="description">
          Description
          <Input
            onChange={e => setDescription(e.target.value)}
            id='description'
            placeholder='Succinct description about the product'
            type='textarea'
          />
        </label>
        <IncludeButton onClick={handleSubmit} title='Register Dish' type='submit' />

      </Form>
      <Footer />
    </Container>
  )
}