import React from 'react'
import styled from 'styled-components'

const RegisterText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Register: React.FunctionComponent = () => {
    return (
        <RegisterText>Register</RegisterText>
    )
}

export default Register