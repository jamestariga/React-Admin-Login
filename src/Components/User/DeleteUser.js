import { Wrapper, Table, Button } from './Styles/Users.styles'

const DeleteUser = (props) => {
  const { users, setUsers, axiosPrivate, navigate, location } = props

  // Delete a user with the provided user id that will be deleted from the database the body is the user id
  const handleDeleteUser = async (userId) => {
    const controller = new AbortController()
    try {
      const response = await axiosPrivate.delete('/employees', {
        signal: controller.signal,
        data: { id: userId },
      })
      console.log(response.data)

      response.status === 200 &&
        setUsers(users.filter((user) => user.id !== userId))

      window.location.reload(true)
      // navigate('/admin', { state: { from: location }, replace: true })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <Button
                  type='button'
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default DeleteUser
