import React, {createContext, useReducer} from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {username: action.payload}
        case 'LOGOUT':
            return {username: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(authReducer, {
        usename : null
    })

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}