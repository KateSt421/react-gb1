import { useState } from "react"
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

export function ChatList({ onAddChat, chats }) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
    }

    // console.log('chats', chats)

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <h1 style={{ color: 'blue' }}>ChatList</h1>
            <form onSubmit={handleSubmit}>
                <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} type="submit">Create Chat</button>
            </form>
        </>
    )
}