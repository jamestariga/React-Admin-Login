import { useState, useEffect, useRef } from 'react'
import useAxiosPrivate from '../../Hooks/useAxiosPrivate'
import { Wrapper } from './Styles/Users.styles'
import { useNavigate, useLocation } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()
  const firstRenderRef = useRef(true)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users', {
          signal: controller.signal,
        })
        console.log(response.data)
        isMounted && setUsers(response.data)
      } catch (err) {
        console.error(err)
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getUsers()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <>
      <Wrapper>
        <h1>Users List</h1>
        {users?.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </Wrapper>
    </>
  )
}

export default Users
