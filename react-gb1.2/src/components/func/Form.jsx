import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constant'
import { Button } from './ui/Button'
// import IButton from '@mui/material/Button';
// import ITextField from '@mui/material/TextField';

// import styles from './Form.module.css'

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //todo...
        addMessage({
            author: AUTHOR.user,
            text
        })

        setText('')
    }

    console.log('input', text)

    return (
        <>
            <h1 style={{ color: 'blue' }}>Form</h1>
            <form onSubmit={handleSubmit}>
                <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} type="submit">Add message</Button>
                {/* <ITextField 
          id="standard-basic"
          label="Enter message"
          variant="standard"
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        /> */}
                {/* <IButton 
          variant="contained" 
          color="success" 
          size="small"
          type="submit"
        >
          Add message
        </IButton> */}
            </form>

        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}




