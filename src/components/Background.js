import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import BackImg from "../images/TvBackground.jpg"
import { EpisodeCard } from "components/EpisodeCard"

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

    console.log(BackgroundDetails)



    if (!BackgroundDetails) {

        return <>Paitence, still loading.. </>
    }
    return (
        <BackgroundDiv>
            { BackgroundDetails.map((episode) =>

                <div> {episode.show.name}</div>


            )}
        </BackgroundDiv>
    )
}


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
    background:white
}
`;