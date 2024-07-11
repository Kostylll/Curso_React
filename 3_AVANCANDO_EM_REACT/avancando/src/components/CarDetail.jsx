const CarDetail = ({brand,km,cor,newCar}) => {

  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM : {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetail