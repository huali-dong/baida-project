import React, { Component,Fragment} from 'react';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
    background :${props=>props.primary ? "white" : "palevioletred"};
    color :${props=>props.primary?"palevioletred":"white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
const TomatoButton = styled(Button)`
    color:tomato;
    border-color:tomato;
`
const ReversedButton = props => {
        return <button {...props}>
            {props.children.split('').reverse().join("")}
        </button>
    }


const Link = ({className,children})=>(
    <a className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    :hover{
        color:red;
    }
`

const Input = styled.input`
    padding:0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    `

class Style extends Component{
    render(){
        return (
            <Fragment>
                <Wrapper>
                    <Title>
                    Hello World!
                    </Title>
            </Wrapper>
            <div>
                <Button>Normal</Button>
                <Button as={ReversedButton} primary>Primary</Button>
                <TomatoButton as="a" href="https://www.baidu.com" primary>Tomato</TomatoButton>
            </div>
            <hr></hr>
            <div>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>
            </div>
            <hr/>
            <div>
                <Input defaultValue="@probablyup" type="text" />
                <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
            </div>
          </Fragment>
          
        )
    }
}

export default Style