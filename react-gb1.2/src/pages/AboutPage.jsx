import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { connect } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/actions'

function AboutPage(props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [value, setValue] = useState('')

    return (
        <>
            <h1>About Page</h1>
            <p>{theme === 'light' ? '🌞' : '🌙'}</p>
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={toggleTheme}>Change theme</button>
            <hr />
            <h2>{props.name}</h2>
            <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }} type="checkbox" checked={props.visible} readOnly />
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={() => props.toggle()} >Change visible</button>
            <br />
            <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={() => props.changeName(value)}>Change name</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    name: state.profile.name,
    visible: state.profile.visible
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
    changeName: value => dispatch(changeName(value))
})

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)