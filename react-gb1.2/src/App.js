import { useState, useEffect } from 'react'

import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'

import { AUTHOR } from './constant'
import { Articles } from './pages/Articles'
//import Button from '@mui/material/Button';
//import Button from '@material-ui/core/Button'




export function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    console.log('newMessage', newMessage);
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])


  return (
    <>
      <h1 style={{ color: 'pink' }} >Welcome to chat!</h1>
      <Form addMessage={addMessage} />
      <MessageList messages={messages} />

      <Articles />


    </>
  )
}