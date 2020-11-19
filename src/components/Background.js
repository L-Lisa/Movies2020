import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import BackImg from "../images/TvBackground.jpg"

const BackgroundDiv = styled.div`
height:100vh;
background-image: url(${BackImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
div{
background:white;
width:80%;
padding:4px;
@media (min-width: 688px) {
width:50%auto;
}
h1{
font-size:1rem;
text-align:center;
}
}
`;
export const Background = () => {
    const [BackgroundDetails, setBackgroundDetails] = useState("")
    const BackgroundURL = "http://api.tvmaze.com/search/shows?q=cats"

    useEffect(() => {
        fetch(BackgroundURL)
            .then((res) => {
                if (!res.ok) {
                    throw 'Could not fetch';
                }
                return res.json();
            })
            .then((json) => {
                setBackgroundDetails(json)
            })
    }, [])
    if (!BackgroundDetails) {
        return <>Paitence, still loading.. </>
    }
    return (
        <BackgroundDiv>
            <div>
                <h1>
                    This is a simple search page for your favourite series. Made with React, hooks, router and styled components.
                  </h1>
            </div>
        </BackgroundDiv>
    )
}


