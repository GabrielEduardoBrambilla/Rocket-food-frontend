import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { IncludeButton } from '../../components/IncludeButton';
import { IngredientFormItem } from "../../components/IngredientFormItem"

import caretLeft from '../../assets/icons/CaretLeft.svg'
import uploadIcon from '../../assets/icons/UploadSimple.svg'
import { Container, Form } from "./styles"

import { useState } from "react";
import { api } from "../../services/api";

export function CreateDish() {
  const [dishImg, setDishImg] = useState("");
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", selectedCategory);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("image", dishImg);

    api.post("/dishes/", formData)
      .then(() => {
        alert("Add to favorites");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Not possible to be added to favorites");
        }
      });
  };
  function handleImageChange(e) {
    const file = e.target.files[0]; // Get the first selected file
    setDishImg(file)

  }
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  return (
    <Container>
      <Header isAdmin />

      <Form>
        <div className="back-btn"><img src={caretLeft} alt="" /><span>voltar</span></div>
        <h2>Novo Prato</h2>
        <div className="first-wrapper">
          <label className='imgUpload' htmlFor="imgUpload">
            Dish Image

            <Input
              onChange={handleImageChange}
              id='imgUpload'
              placeholder='Select Image'
              type='file'
              icon={uploadIcon}
            />
          </label>
          <label className='name' htmlFor="name">
            Name
            <Input
              onChange={e => setName(e.target.value)}
              id='name'
              placeholder='Ex: Mac and cheese'
            />
          </label>
          <label className='category' htmlFor="category">Category:
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">-- Select --</option>
              <option value="Meal">Meal</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </label>
        </div>
        <div className="second-wrapper">
          <label className='ingredients' htmlFor="ingredients">
            Ingredients
            <div className="ingredient">
              {
                ingredients.map((ingredient, index) => (

                  <IngredientFormItem value={ingredient}
                    key={String(index)}
                    onClick={() => handleRemoveIngredient(ingredient)}

                  />
                ))
              }

              <IngredientFormItem
                isNew
                placeholder='Add'
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </label>
          <label className='price' htmlFor="price">

            Price

            <Input

              onChange={e => setPrice(e.target.value)}
              id='price'
              placeholder='Ex: 10 [just the number]'
            />
          </label>
        </div>

        <label htmlFor="description">

          Description

          <Textarea
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