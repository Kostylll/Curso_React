import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[desc,setDesc] = useState()
    const[state,setState] = useState()
    const[formValues, setValues] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email)
        setValues([...formValues, {nome: name, email : email, desc : desc, state : state}])
        setName('');
        setEmail('');
        setDesc('')
        setState('')
    }

    const handleName = (e) => {
        console.log(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name" 
                placeholder='Digite seu nome...' 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                type="text" 
                name="email" 
                placeholder='Digite seu email...'
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="desc">Descrição do Usuário</label>
                <textarea 
                name="desc" 
                placeholder='Descrição do Usuário'
                onChange={(e) => {setDesc(e.target.value)}}>
                </textarea>
            </div>
            <div>
                <label htmlFor="estado">Como voce se sente?</label>
                <select 
                name="estado" 
                placeholder='Como que você ta?'
                onChange={(e) =>{setState(e.target.value)}}>
                <option value="Triste">Triste</option>
                <option value="Feliz">Feliz</option>
                <option value="Cansado">Cansado</option>
                
                </select>
            </div>
            <br></br>
            <button type='submit' value="Enviar">Enviar</button>
            
        </form>
        <div>
        <h2>Dados Submetidos</h2>
        <ul>
          {formValues.map((item, index) => (
            <li key={index}>{item.nome} - {item.email} - {item.desc} - {item.state}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MyForm