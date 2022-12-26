import PropTypes from 'prop-types'
//import Button from '@mui/material/Button'
//import { makeStyles } from '@material-ui/core/styles'
//import TextField from '@material-ui/core/TextField'

export function MessageList({ messages }) {

    return (
        <>
            <h1 style={{ color: 'violet' }}>MessageList</h1>
            <ul>
                {messages.map((item, index) => (
                    <li style={{ color: 'blue' }} key={index}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}


MessageList.propTypes = {
    messages: PropTypes.array
}