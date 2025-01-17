import { useState } from "react"

function ConditionalRender() {

    const [x] = useState(true);
    const [name, setName] = useState("Matheus");


  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for verdadeiro</p>}
        {!x && <p>Se x for falso</p>}
        {name === "Pedro" ? (
            <div>
                <p>O nome é Pedro</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("Pedro")}>Mude o Nome para Pedro!</button>
    </div>
    
  )
}

export default ConditionalRender