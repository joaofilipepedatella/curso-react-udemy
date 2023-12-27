import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Joao", "Fernando", "Maria"])

    const [users, setUsers] = useState([
        {id: 1, name: "Joao", age: 33},
        {id: 2, name: "Fernando", age: 30},
        {id: 3, name: "Maria", age: 35},
    ])

    const deleteRandom = () => {
        
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {

        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

    return (
    <div>
        <ul>
            {list.map((item, i) => (       /* Metodo com indice (nao usado, por conta */
                <li key={i}>{item}</li>    /* de possiveis alterações) */
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}
export default ListRender