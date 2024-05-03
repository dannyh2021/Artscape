import React, { useEffect, useState } from 'react';
import { getImages } from '../services/apiService';
import styled from 'styled-components';

const Box = styled.div`
    background-color: gray;
    border-radius: 16px;
    width: 236px;
    overflow: hidden;
`;

const Home = () => {
    // let urls = ['1', '2', '3'];

    const [urls, setUrl] = useState([])

    useEffect(() => {
        getImages()
        .then(res => {
            setUrl(res);
        })
    });

    return (
        <React.Fragment>
            <p>Hello Home</p>
            <Box>
                {/* {urls.map(url => <img src={url} style={{ height: "100%", width: "100%" }}/> )} */}
                <img src='https://i.pinimg.com/236x/74/b5/e6/74b5e626b10792e495976185e9a5f4d1.jpg' />
            </Box>
        </React.Fragment>
    );
}

export default Home