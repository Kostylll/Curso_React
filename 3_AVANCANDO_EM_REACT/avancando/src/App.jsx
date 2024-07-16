import './App.css'
import King from './assets/king.jpeg'
import CarDetail from './components/CarDetail'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import { Fragment, useState } from "react"
import UserDetails from './components/UserDetails'
import Fragmento from './components/Fragmento'
import Container from './components/Container'
import ExecuteFuncion from './components/ExecuteFuncion'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
 
    const name = "Pedro"
    const [userName] = useState("Lucas")
    const cars = [
      {id: 1, brand: "Ferrari", cor: "Vermelho", newCar: true, km: 0},
      {id: 2, brand: "KIA", cor: "Amarelo", newCar: false, km: 0},
      {id: 3, brand: "Renault", cor: "Azul", newCar: true, km: 0}
    ]

    const pessoas = [
      {id: 1,nome: "Pedro", idade: 20, profissão: "Desempregado"},
      {id: 2,nome: "Lucas", idade: 24, profissão: "Mecânico"},
      {id: 3,nome: "Ana", idade: 22, profissão: "Recepcionista"}
    ]

    const [message, setMessage] = useState("")
    
    const handleMessage = (msg) => {
      setMessage(msg)
    }


    function showMessage(){
      console.log("Aparecendo Mensagem")
    }

  return (
    <>
      <div>
        {/* <h3>Avançando em React</h3>
        <div>
          <img src="/snoopyeu.jpg" alt="Snoopy" />
        </div>
        <div>
          <img src={King} alt="" />
        </div> */}

        {/* <ManageData/> */}
        {/* <ListRender/>   */}
        {/* {<ConditionalRender/>} */}
        {/* {<ShowUserName name={userName} />} */}
        {/* {<CarDetail brand="VW" km={1000} cor="Azul" newCar={false}/>}
        {<CarDetail brand="Ford" km={0} cor="Vermelho"  newCar={true}/>}
        {<CarDetail brand="Fiat" km={400} cor="Branco"  newCar={false}/>} */}
        {/* {cars.map((car) => (
          <CarDetail brand={car.brand} cor={car.cor} km={car.km} newCar={car.newCar}/>
        ))} */}
        {/* {pessoas.map((pessoa) => (
          <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissão={pessoa.profissão}/>
        ))} */}
      {/* <Fragmento/> */}
     <Container linguica = "teste">
          <p>Conteúdo</p>
      </Container> 
      </div>
     <ExecuteFuncion myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </>
  )
}

export default App
