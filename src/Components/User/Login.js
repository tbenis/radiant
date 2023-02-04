import { Button, Checkbox, Form } from 'semantic-ui-react'

import Header from "../Public/Header"
import Footer from "../Public/Footer"
import "./login.css"


export default function Login(props) {
    return (<>
    
    <Header />
    <h1> Benis Login </h1>
    <p> Form Goes Here </p>

    <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    
    <Footer/>
    
    </>)
}