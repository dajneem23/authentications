import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
 
  const googleAuth = useGoogleLogin({
    clientId: '756802732269-o2q2hg06dqlhv08dnjslrr7ne4q08a23.apps.googleusercontent.com', 
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)


