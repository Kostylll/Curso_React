const Challenge = () =>{
    
    const n1 = 10
    const n2 = 10


    const soma = () =>{
        console.log(n1 + n2)
    }
    return(
        
        <div>
            <h1>O primeiro número é {n1}</h1>
            <h1>O segundo número é {n2}</h1>
            <div>
                <button onClick={soma}>Calcule esses valores</button>
            </div>
        </div>
    )
}

export default Challenge