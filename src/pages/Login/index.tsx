import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FcLeft } from 'react-icons/fc'
import FormLogin from '../../components/FormLogin'

import * as imageLogo from '../../assets/logo-solid-lamp.png'

import {
  Container,
  SideRight
} from './styles'

const Login: React.FC = () => {
  return (
        <Container>
            <SideRight>
                <h1>
                    <Image width={462} height={189} src={imageLogo} alt="Logo Solid Lamp" />
                </h1>

                <h2>
                    Bem vindo!
                </h2>

                <FormLogin />

                <Link href="/forgot-password">
                    <a className="forgot-password">
                        Perdeu sua senha?
                    </a>
                </Link>

                <Link href="/">
                    <a className="go-back-home">
                        <FcLeft />
                        <span>voltar para home</span>
                    </a>
                </Link>
            </SideRight>
        </Container>
  )
}

export default Login
