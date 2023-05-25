import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'
export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [data, setData] = useState({})



  async function signIn({ email, password }) {


    try {
      const response = await api.post("/sessions", { email: email, password: password })
      const { user, token } = response.data

      localStorage.setItem("@rocketfood:user", JSON.stringify(user))
      localStorage.setItem("@rocketfood:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Not possible to login")
      }
    }
  }

  function singOut() {
    localStorage.removeItem("@rocketfood:token")
    localStorage.removeItem("@rocketfood:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketfood:token')
    const user = localStorage.getItem('@rocketfood:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return <AuthContext.Provider value={{ signIn, singOut, user: data.user }}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
