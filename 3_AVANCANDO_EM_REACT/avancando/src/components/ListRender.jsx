import { useState } from "react"

function ListRender() {

    const [list] = useState(["Mather","Lucas"])
    const [user, setUsers] = useState([
        {id: 1, nome: "Pedro", idade: 20},
        {id: 2, nome: "Ana", idade: 22},
        {id: 3, nome: "Lucas", idade: 24}
    ]);
   
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber != user.id)
        })
    }

  return (
    <div>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.nome} {user.idade}</li>
            ))}
            {/* {list.map((item,index) => (
                 <li key={index}>{item}</li>
            ))} */}
        </ul>
        <ul>
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
      
    </div>
  )
}

export default ListRender