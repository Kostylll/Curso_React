const TemplateEspression = () => {
   
   const name = "Pedro"
   const data = {
        idade : 20,
        emprego : "nenhum",
        aniversário : "07/12/2003",
   }


    return(
        <div>
            <p>Olá {name}</p>
            <p>Sua idade é {data.idade} atualmente {data.emprego} emprego e faz aniversário no dia {data.aniversário}</p>
            
        </div>

    )
}



export default TemplateEspression