import React from 'react'
import styled from 'styled-components'

const XboxText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Xbox: React.FunctionComponent = () => {
    return (
        <XboxText>Xbox</XboxText>
    )
}

export default Xbox
