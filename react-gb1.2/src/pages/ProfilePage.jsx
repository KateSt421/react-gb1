import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import { changeName } from '../store/profile/actions'

export function ProfilePage() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const name = useSelector((store) => store.name)
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