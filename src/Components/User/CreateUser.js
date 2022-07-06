import { Wrapper, Form, Button } from './Styles/Users.styles'

const CreateUser = (props) => {
  const { axiosPrivate, navigate, location } = props

  // Create a new user with the provided first and last name that will be stored in the database.
  const createUser = async (e) => {
    e.preventDefault()
    const { firstName, lastName } = e.target
    const user = { firstName: firstName.value, lastName: lastName.value }
    try {
      const response = await axiosPrivate.post(
        '/employees',
        JSON.stringify(user),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      console.log(response.data)
      navigate('/home', { state: { from: location }, replace: true })
    } catch (err) {
      console.error(err)
      navigate('/login', { state: { from: location }, replace: true })
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={createUser}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' name='lastName' />
        <Button type='submit'>Create User</Button>
      </Form>
    </Wrapper>
  )
}

export default CreateUser
