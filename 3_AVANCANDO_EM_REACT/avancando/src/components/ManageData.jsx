import { useState } from "react"
const ManageData = () => {

    
    const [resposta , setResposta] =  useState("Será que te amo?");


  return (
    <div>
        <p>Resposta : {resposta}</p>
       <button onClick = {() => setResposta("TeAmo!")}>Aperte aqui para ver se eu te amo!</button>
    </div>
  )
}

export default ManageData