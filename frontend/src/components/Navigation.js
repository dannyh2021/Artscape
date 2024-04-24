import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LargeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`

`;

const Navigation = () => {
    return (
        <LargeContainer>
            <Container>
                <Link to='/'>Home</Link>
            </Container>
            <Container>
                <Link to='/explore'>Explore</Link>
            </Container>
            <Container>
                <Link to='/create'>Create</Link>
            </Container>
            <Container>
                <input placeholder='search'></input>
            </Container>
            <Container>
                <Link to='/login'>Log In</Link>
            </Container>
        </LargeContainer>
    );
};

export default Navigation;