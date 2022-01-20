import React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom'

// Component //

const StyledButton = styled.button`
    padding: 0.5rem 0.5rem;
    margin: 0;
    border: 1.5px solid #800020;
    border-radius: 20px;
    background-color: #fff;
    font-size: 1.1rem;
    font-family: monospace;
    font-weight: bold;

    @media only screen and (max-width: 768px){
        display: none;
    }
    @media (min-width: 1024px) {
    font-size: 1.5rem;
    }
    @media (min-width: 1400px) {
    font-size: 1.6rem;
    }
`;

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0]

    return (
        // <Link to='/sign-up' className='btn-mobile'>
            <StyledButton
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </StyledButton>
        // </Link>
    )
};