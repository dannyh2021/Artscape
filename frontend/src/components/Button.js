import styled from "styled-components"

const StyledButton = styled.button`

`;

const Button = (props) => {
    return (
        <StyledButton
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    );
}

export default Button;