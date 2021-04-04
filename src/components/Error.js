import styled from '@emotion/styled';

const ParrafoError = styled.p`
    width: auto;
    height: auto;
    padding: 5px 30px;
    background-color: #F16A6A;
    color: #E7E7E7;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    top: 70px;
    z-index: 10000;
`;

const Error = ({ mensaje }) => {
    return ( 
        <ParrafoError>{ mensaje }</ParrafoError>
    );
}

export default Error;