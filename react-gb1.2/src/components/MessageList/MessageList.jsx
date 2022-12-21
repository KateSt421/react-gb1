import PropTypes from 'prop-types'

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