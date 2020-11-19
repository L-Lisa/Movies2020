import React, { useEffect, useState } from 'react'
import styled from "styled-components/macro"
import { EpisodeCard } from "components/EpisodeCard"
import { SearchBar } from "components/SearchBar"
import { NotFound } from "components/NotFound"
import { Background } from "components/Background"
import BackImg from "../images/TvBackground.jpg"
import Logo from "../images/Logo.png"

export const Home = () => {
    const [BaseQuery, setBaseQuery] = useState("")
    const [name, setName] = useState("")
    const [searchRes, setSearchRes] = useState("")
    const [xImage, setXImage] = useState("")
    const [showBackground, setShowBackground] = useState(true)


    const handleSubmit = () => {
        setShowBackground(false)
        setSearchRes("")
        const MainURL = `https://api.tvmaze.com/singlesearch/shows/?q=${BaseQuery}&embed=episodes`


        fetch(MainURL)
            .then((res) => {
                if (!res.ok) {
                    throw 'Could not fetch';
                }
                return res.json();
            })
            .then((json) => {
                console.log(json)
                setName(json.name)
                console.log(json.image.medium)
                setXImage(json.image.medium)
                console.log(xImage)
                setSearchRes(json._embedded)
                console.log(searchRes)
                console.log(json._embedded.episodes[0])
                console.log(json._embedded.episodes[0].name)
                console.log(json._embedded.episodes[0].id)
            })
    }

    return (
        <>
            <TopSection>
                <Head>
                    <img src={Logo} alt="MoveE Logo" ></img>
                </Head>
                <Recomend>
                    <button className="reco" onClick={(e) => handleSubmit(setBaseQuery("friends"))}> Recomendation of the week</button>
                </Recomend>
                <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
                    <label htmlFor="search bar"> <Hide className="hidden">Search Bar</Hide></label>
                    <input type="text" id="searchbar" name="search bar" required placeholder="Name your series" value={BaseQuery} onChange={(e) => setBaseQuery(e.target.value)} />
                    <button type="submit">SUBMIT</button>
                </form>
            </TopSection>
            <div>
                {showBackground === true ? <Background /> : (!searchRes ? < NotFound /> : "")}
                <ListWrapper>
                    {searchRes && searchRes.episodes.map((episode) =>

                        <EpisodeCard key={episode.id} {...episode} />

                    )}
                </ListWrapper>
            </div>
        </>
    )
}
const Recomend = styled.div`
padding:10px;
background-color: #0c2446;
background-image: linear-gradient(160deg, #091743 0%, #80D0C7 100%);
font-size: 1.5em;
display: flex;
    align-items: center;
  color: #228DFF;
  &:hover button{
    background-image: linear-gradient(160deg, #80D0C7  0%,  #091743 100%);
  }
`;

const Head = styled.section`
margin:1em;
background:#0c2446;
@media (min-width: 688px) {
margin: 1em;
background: #0c2446;
width: 25%;
  }
`;

const ListWrapper = styled.section`
 width: 100%;
 background: #0c2446;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
const TopSection = styled.section`
    width: 100%;
    background: #0c2446;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 688px) {
    flex-direction:row;
  }
form{
    width: fit-content;
    background: whitesmoke;
    height: 40px;
    display: flex;
    align-items: stretch;
    margin: 0 auto;
} 
`;
const Hide = styled.span`
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
`;

const Err = styled.section`
background: green;
`;
