import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'

export function ChatList() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const chats = useSelector(selectChat,
        (prev, next) => prev.length === next.length)

    console.log('update chats', chats)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))
        // onAddChat({
        //   id: nanoid(),
        //   name: value
        // })
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
                        <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={() => dispatch(deleteChat(chat.name))}>X</button>
                    </li>
                ))}
            </ul>

            <h1>ChatList</h1>
            <form onSubmit={handleSubmit}>
                <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} type="submit">Create Chat</button>
            </form>
        </>
    )
}