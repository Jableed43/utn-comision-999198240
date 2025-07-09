import React, { useState } from 'react'
import usePostProduct from '../hooks/products/usePostProduct'

const categoriesData = [
    {
        id: 1,
        name: "Electronica"
    },
    {
        id: 2,
        name: "Ropa"
    },
    {
        id: 3,
        name: "Hogar"
    }
]

const statusData = [
    "AVAILABLE",
    "OUT_OF_STOCK",
    "DISCONTINUED"
    ]

const statusTranslations = {
        "AVAILABLE": "Available",
        "OUT_OF_STOCK": "Out of stock",
        "DISCONTINUED": "Discontinued"
    }

function CreateProduct() {

    const { error, fetchProduct } = usePostProduct()

    const [form, setForm] = useState({
        createdAt: new Date(),
        name: "",
        description: "",
        category: { id: "", name: "" },
        status: "AVAILABLE",
        price: 0,
        stock: 0
    })

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            //
            [name]: type === 'number' ? parseInt(value) || 0 : value
        }))
    }

    const handleCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedCategory = categoriesData.find(category => category.id === selectedId)

        setForm(prevForm => ({
            ...prevForm,
            //O tenemos una categoria valida o queda vacio
            category: selectedCategory || { id: "", name: "" }
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Formulario enviado: ", form)
        const success = await fetchProduct(form)
        console.log({success})
    }

  return (
    <div>
        <h1>Crea tu producto</h1>

        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
            <input required type="text" id='name' name='name' value={form.name} onChange={handleInputChange} />
                <br />
            <label htmlFor="description">Description</label>
            <textarea required name="description" id="description" value={form.description} onChange={handleInputChange} ></textarea>
 <br />
            <label htmlFor="product-category">Product Category</label>
            <select name="product-category" id="product-category" required value={form.category.id || ""} onChange={handleCategoryChange}>
                <option value="" disabled >Select Category</option>
                { categoriesData.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ) ) }
            </select>
 <br />
            <label htmlFor="status">Product status</label>
            <select name="status" id="status" required value={form.status} onChange={handleInputChange}>
                <option value="" disabled >Select Status</option>
                { statusData.map((status) => (
                    <option key={status} value={status}>{statusTranslations[status] || status}</option>
                ) ) }
            </select>
 <br />
            <label htmlFor="stock">Stock</label>
            <input required type="number" id='stock' name='stock' value={form.stock} onChange={handleInputChange}/>
 <br />
            <label htmlFor="price">Price</label>
            <input required type="number" id='price' name='price' value={form.price} onChange={handleInputChange}/>
<br />
            <button type="submit">Crear Producto</button>
        </form>
        { error ? error : null }
    </div>
  )
}

export default CreateProduct