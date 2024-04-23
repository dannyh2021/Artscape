import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to='/'>Hello</Link>
            <Link to='/explore'>Explore</Link>
            <Link to='/create'>Create</Link>
            <input placeholder='search'></input>
            <Link to='/login'>Log In</Link>
        </div>
    );
};

export default Navigation;