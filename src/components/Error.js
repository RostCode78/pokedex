import styled from '@emotion/styled';

const ParrafoError = styled.p`
    width: 100%;
    height: auto;
    padding: 5px 0;
    background-color: #f24c39;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f9f5f4;
    font-family: 'Patrick Hand', cursive;
    letter-spacing: 2px;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
`;

const Error = ({ mensaje }) => {
    return ( 
        <ParrafoError>{ mensaje }</ParrafoError>
    );
}

export default Error;