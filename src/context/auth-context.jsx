import { object } from "prop-types";
import { createContext, useContext } from "react";

const AuthContext = createContext({
    user: { username: 'arief-chan', tagline: '', bio: '' }
})

AuthContext.displayName = 'AuthContext'

const AuthProvider = ({ user, ...props }) => (
    <AuthContext.Provider value={user} {...props}/>
)

function useAuth() {
    return useContext(AuthContext)
}

AuthProvider.propTypes = {
    user: object.isRequired
}

export { AuthProvider, useAuth }