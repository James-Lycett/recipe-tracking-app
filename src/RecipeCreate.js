import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe({formData})
    setFormData({...initialFormState})
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>              
                <input 
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                />              
            </td>
            <td>
                <input 
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                />
            </td>
            <td>
                <input 
                id="photo"
                name="photo"
                type="text"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                />
            </td>
            <td>
                <textarea 
                id="ingredients"
                name="ingredients"
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                />
            </td>
            <td>
                <textarea 
                id="preparation"
                name="preparation"
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
