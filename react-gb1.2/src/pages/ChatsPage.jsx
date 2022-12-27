import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'

import { AUTHOR } from '../constants'


export function ChatsPage({ onAddChat, onAddMessage, messages, chats }) {
    // const [messages, setMessages] = useState([])
    const { chatId } = useParams()

    // const addMessage = (newMessage) => {
    //   console.log('newMessage', newMessage);
    //   setMessages([...messages, newMessage])
    // }

    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'Im BOT'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (massage) => {
        if (chatId) {
            onAddMessage(chatId, massage)
        }
    }

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <>
            <h1 style={{ color: 'pink' }}>Welcome to chat!</h1>
            <ChatList chats={chats} onAddChat={onAddChat} />
            <Form addMessage={handleAddMessage} />
            <MessageList messages={chatId ? messages[chatId] : []} />
        </>
    )
}

// export defa