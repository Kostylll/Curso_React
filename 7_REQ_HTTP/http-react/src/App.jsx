import './App.css'
import { useState,useEffect } from 'react'

function App() {
  
  const url = "http://localhost:3000/products"

  const [products,setProducts] = useState([])
  const [name, setName] = useState("")
  const [price,setPrice] = useState("")
  

  useEffect(() => {

    async function fetchData() {
      
      const res = await fetch(url)
      const data = await res.json()


      setProducts(data)

      console.log(data)
    }

    fetchData();
  }, [])

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const product ={
      name,
      price
    }

    const res = await fetch(url, {
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    
    })

    

    console.log(product)

  }



  return (
    <>
    <div className='Box'>
     <h1>Lista de Produtos</h1>
     </div>
     <ul className='List'>
      {products.map((product) =>(
        <li key={product.id}>{product.name} - R$: {product.price}</li>
      ))}
     </ul>

     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input 
        type="text"
        name='name'
        placeholder='Digite o nome da roupa....'
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price"></label>
        <input 
        type="text"
        name='price'
        placeholder='Digite o preço da roupa....'
        onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <br></br>
      <button type='submit' value="Enviar">Cadastrar</button>





     </form>
    </>
  )
}

export default App
