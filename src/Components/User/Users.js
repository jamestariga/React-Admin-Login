import { useState, useEffect, useRef } from 'react'
import axios from '../../api/axios'
import { Wrapper } from './Styles/Users.styles'
import useRefreshToken from '../../Hooks/useRefreshToken'

const Users = () => {
  const [users, setUsers] = useState()
  const refresh = useRefreshToken()

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUser = async () => {
      try {
        const response = await axios.get('/users', {
          signal: controller.signal,
        })
        console.log(response.data)
        isMounted && setUsers(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    getUser()

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
        <button onClick={() => refresh()}>Refresh</button>
      </Wrapper>
    </>
  )
}

export default Users
