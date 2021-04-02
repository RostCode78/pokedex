import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Btn = styled.div`
    width: 50px;
    height: 50px;
    background-color: #E7E7E7;
    box-shadow: 4px 4px 8px #00000025, -4px -4px 8px #FFFFFF25;
    border-radius: 50px;
    position: absolute;
    top: 31px;
    left: 25px;
    z-index: 100000;
`;

const ReturnBtn = () => {
    return (
        <Link to={'/'}>
            <Btn></Btn>
        </Link>
    );
}

export default ReturnBtn;