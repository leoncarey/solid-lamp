import React from 'react'
import axios from 'axios'
import Router from 'next/router'

import Button from '../Button'

const FormLogin: React.FC = () => {
  const loginFacebook = async () => {
    const response = await axios.get('http://localhost:3000/api/auth/signin/facebook')

    console.log(response)

    if (response.status === 200) {
      Router.push('/')
    }
  }

  return (
        <Button onClick={() => {
          loginFacebook()
        }}>
            Facebook
        </Button>
  )
}

export default FormLogin
