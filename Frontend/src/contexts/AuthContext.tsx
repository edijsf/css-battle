import React, { useState, createContext, useContext, useMemo, useCallback, SetStateAction } from 'react'


export type UserType = {
  username: string
  password: string
}


export interface AuthContextInterface extends SFC {
  user: UserType | null;
  signin: (user: UserType) => void;
  logout: () => void;
}


// // Creating a context
const AuthContext = createContext<AuthContextInterface | null | undefined>(null)

export interface AuthProps extends SFC { }

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const signin = useCallback(
    (obj: UserType) => {
      setUser(obj)
      console.log('from context -> ', obj)
    },
    [user]
  )

  const logout = useCallback(() => {
    setUser(null);
    console.log('logged out');
  }, []);

  const value = useMemo(() => {
    return { user, signin, logout };
  }, [user, signin, logout]);
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

/** Hook to consume Toggle context */
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    // throw error here at some point
    throw new Error(`useAuthContext must be used within a AuthProvider`)
  }

  return context
}
