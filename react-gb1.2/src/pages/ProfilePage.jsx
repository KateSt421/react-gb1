import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from '../store/profile/selectors'

export function ProfilePage() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    // console.log('theme ====>', theme)
    // console.log('store', name)

    const hendleChange = () => {
        console.log(value)
        // dispatch({type: types.CHANGE_NAME, payload: value})
        dispatch(changeName(value))
        setValue('')
    }

    return (
        <>
            <h1>Profile Page</h1>
            <p>{theme === 'light' ? '🌞' : '🌙'}</p>
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={toggleTheme}>Change theme</button>
            <hr />
            <h2>{name}</h2>
            <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }} type="checkbox" checked={visible} readOnly />
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={() => dispatch(toggleProfile())} >change visible</button>
            <br />
            <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {/* <button onClick={hendleChange}>Change name</button> */}
            <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} onClick={() => dispatch(changeName(value))}>Change name</button>
        </>
    )
}