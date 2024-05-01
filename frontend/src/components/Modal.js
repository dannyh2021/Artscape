import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    background: pink;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Modal = (props) => {
    if (!props.show || props.show !== 'true') {
        return null;
    }

    return (
        <StyledModal>
            {props.children}
        </StyledModal>
    );
};

export default Modal;