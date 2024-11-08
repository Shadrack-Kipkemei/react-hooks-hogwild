import React, {useState} from 'react';
import './HogForm.module.css';

function HogForm ({onAddHog}) {
  // Initial form data state
  const [formData, setFormData] = useState({
    name:"",
    specialty: "",
    greased: false,
    weight: "",
    medal: "",
    image: ""
  })

  // Updates form data state on input change
  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  // Handles form submission
  function handleSubmit (event) {
    event.preventDefault();
    onAddHog(formData); /// Sends new hog data back to the parent
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      medal: "",
      image: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
      </label>
      <label>
        Specialty:
        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} required/>
      </label>
      <label>
        Greased:
        <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} required/>
      </label>
      <label>
        Weight:
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required/>
      </label>
      <label>
        Highest Medal Achieved:
        <input type="text" name="medal" value={formData.medal} onChange={handleChange} required/>
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} required/>
      </label>
      <button type="submit">Add Hog</button>
    </form>
  )
}

export default HogForm;
