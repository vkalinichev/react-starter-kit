import React from 'react'
import styled from 'styled-components'
import Button from './Button/Button'

const Wrapper = styled.div`
    padding: 20px 40px;
`
const Title = styled.h2`
    font-size: 18px;
    margin-top: 0;
`
const Buttons = styled.div`
    background: #eee;
    padding: 12px 16px;
    border-radius: .3em;
`

const App = () =>

    <Wrapper>
        <Title>Welcome!</Title>
        <Buttons>
            <span>Buttons:</span>
            <div>
                <Button>Default</Button>
                <Button primary>Primary</Button>
                <Button info>Info</Button>
                <Button success>Success</Button>
                <Button warning>Warning</Button>
                <Button danger>Danger</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button link>Link</Button>
            </div>
        </Buttons>
    </Wrapper>

export default App
