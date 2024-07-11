const UserDetails = ({nome,idade,profissão}) => {

  return (
    <div>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissão}</li>
            {idade >= 18 ? (
                <p>Pode Tirar Carta!</p>
            ) : (
                <p>Não Pode Tirar Carta!</p>
            )}
        </ul>
    </div>
  )
}

export default UserDetails