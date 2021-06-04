import React from 'react'
import styled from 'styled-components'
import Coach from './Settings/Coach'
function Home() {
    return (
        <Container>
            <Coach/>
        </Container>
            
    )
}

export default Home

const Container = styled.main`
    width: max-content;
`