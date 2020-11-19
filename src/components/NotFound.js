import React from 'react'
import styled from "styled-components/macro"
import NotFoundImg from "../images/TestImg.png"
import Searching from "../images/searching.gif"

const NotFoundBox = styled.main`
height:100vh;
background-image: url(${NotFoundImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;
const ErrorMessage = styled.article`
width: 80%;
background: whitesmoke;
min-height: 50px;
font-weight: 900;
padding: 10px;
text-align: center;
`;

export const NotFound = () => {
    return (
        <NotFoundBox>
            <ErrorMessage>
                <img src={Searching} alt="Still searching for your series" ></img>
            </ErrorMessage>
        </NotFoundBox>
    )
}


