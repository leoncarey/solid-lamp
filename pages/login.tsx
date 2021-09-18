import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../src/pages/Login'

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Solid Lamp - Login</title>
        <meta name="description" content="Solid Lamp - Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  )
}

export default LoginPage
