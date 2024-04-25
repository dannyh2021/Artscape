import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LargeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
`;

const Container = styled.div`
    background-color: pink;
    height: 48px;
    min-width: 60px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SearchContainer = styled.div`
    height: 48px;
    min-width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto
`;

const Text = styled.div`
    font-weight: 600;
    font-size: 16px;
`;

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Navigation = () => {
    return (
        <LargeContainer>
            <Container>
                <Link style={linkStyle} to='/'><Text>Home</Text></Link>
            </Container>
            <Container>
                <Link style={linkStyle} to='/explore'>Explore</Link>
            </Container>
            <Container>
                <Link style={linkStyle} to='/create'>Create</Link>
            </Container>
            <SearchContainer>
                <input placeholder='search'></input>
            </SearchContainer>
            <Container>
                <Link style={linkStyle} to='/login'>Log In</Link>
            </Container>
        </LargeContainer>
    );
};

export default Navigation;