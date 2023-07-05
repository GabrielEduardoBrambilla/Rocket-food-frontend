import { Container, Form } from "./styles"
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { IncludeButton } from '../../components/IncludeButton';
import { IngredientFormItem } from "../../components/IngredientFormItem"

import { PiCaretLeftBold } from 'react-icons/pi'
import { FiUpload } from 'react-icons/fi'

import { useState } from "react";
import { api } from "../../services/api";
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export function EditDish() {
  const [dishImg, setDishImg] = useState("");
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dishImgPreview, setDishImgPreview] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const navigate = useNavigate()
  const { id } = useParams();


  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/show/${id}`);
      const ingredients = response.data.ingredients;
      setIngredients(ingredients);
      setDishImg(response.data.image)
      setName(response.data.name)
      setSelectedCategory(response.data.category)
      setPrice(response.data.price)
      setDescription(response.data.description)

      // Maybe later
      // const imageFile = await api.get(`/files/${response.data.image}`);
      // const imageString = imageFile.data; // Assuming 'imageFile' contains the image data in string format
      // const imageBlob = new Blob([imageString], { type: imageFile.headers['content-type'] });
      // const imageUrl = URL.createObjectURL(imageBlob);
      // setDishImgPreview(imageUrl);
      // console.log(imageBlob);



    }
    fetchDish()
  }, [id], dishImg, dishImgPreview)



  function handleImageChange(e) {
    const file = e.target.files[0]; // Get the first selected file
    setDishImg(file)
    setDishImgPreview(URL.createObjectURL(file))

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

  function handleSubmit() {
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
  }

  function handleBackButton() {
    navigate("/")
  }

  async function handleDelete() {
    try {
      const responseDelete = await api.delete(`/dishes/delete/${id}`);
      alert(responseDelete.data.message);
      navigate("/")
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }



  return (
    <>
      <Header />
      <Container>

        <Form>
          <div onClick={handleBackButton} className="back-btn">{<PiCaretLeftBold />} <span>back</span></div>
          <h2>Edit Dish</h2>
          <div className="first-wrapper">
            <label className='imgUpload' htmlFor="imgUpload">
              {
                dishImgPreview &&
                <img className="imgPrev" src={dishImgPreview} alt="Image Preview" />
              }
              Dish Image
              <Input

                onChange={handleImageChange}
                id='imgUpload'
                type='file'
                icon={<FiUpload />}
                text='Select Image'
                isImage={true}
              />
            </label>
            <label className='name' htmlFor="name">
              Name
              <Input
                value={name}
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

                    <IngredientFormItem value={ingredient.name}
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
                value={price}
                onChange={e => setPrice(e.target.value)}
                id='price'
                placeholder='Ex: 10 [just the number]'
                type="number"
              />
            </label>
          </div>

          <label htmlFor="description">

            Description

            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              id='description'
              placeholder='Succinct description about the product'
              type='textarea'
            />
          </label>

          <div className="third-wrapper">
            <p className='deleteButton' onClick={handleDelete} >Delete Dish</p>
            <IncludeButton className='IncludeButton' onClick={handleSubmit} title='Save Edit' type='submit' />
          </div>

        </Form>
      </Container>
      <Footer />
    </>

  )
}