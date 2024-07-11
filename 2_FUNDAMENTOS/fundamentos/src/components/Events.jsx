const Events = () => {

    const evento = () => {
        console.log("Evento")
    };

    const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando Isso</h1>
        }else{
            return <h2>Tambem posso renderizar isso!</h2>
        }
    }



   return(
    <div>
        <div>
            <button onClick={evento}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={() => console.log("Clicou!")}>Clique</button>
            <button onClick={() => {
                if(true){
                    console.log("Verdadeiro")
                }
            }}>Clica</button>
        </div>
        {renderSomething(false)}
    </div>
   )
}

export default Events