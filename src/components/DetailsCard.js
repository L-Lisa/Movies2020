import React from 'react'
import styled from "styled-components/macro"
import StandInImg from "../images/standInImg.jpg"
import BackImg from "../images/TvBackground.jpg"



export const DetailsCard = ({ image, _embedded, name, airdate, premiered, summary }) => {
  return (
    <DetailsWrapper>
      <DetailsDiv>
        {image ? <img src={image.medium} alt={name}></img> : <img src={StandInImg} alt="MoveE"></img>}
        <div>
          {name && <H1>{name} </H1>}
          {airdate && <p> First Aired: {airdate}</p>}
          {premiered && <p>Premiered:{premiered} </p>}
          {_embedded.show.rating.average && <p> Average rating of the series: {_embedded.show.rating.average}</p>}

          {summary ? <p>{summary.replace('<p>', '').replace('</p>', '').replace('<br>', '').replace('<br />', '')}  </p> : <> <H1>General description of the series:</H1><p> {_embedded.show.summary.replace('<p>', '').replace('</p>', '').replace('<br>', '').replace('<br />', '')}  </p></>}
        </div>
      </DetailsDiv>
    </DetailsWrapper>
  )
}
const H1 = styled.h1`
font-size:1.6em;
`;

const DetailsWrapper = styled.section`
justify-content: center;
background-image: url(${BackImg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
@media (min-width: 688px) {
height:auto;
}
`;
const DetailsDiv = styled.article`
 display: flex;
  align-items: flex-end;
  background:#303d48a3;
  flex-direction: column;
  @media (min-width: 688px) {
    margin: 50px;
}
  img{
    border: 5px solid #fff;
    object-fit: contain;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    background: black;
    max-width:50%;
    @media (min-width: 688px) {
        height: 70vh;
}
  }
  div{
    width: 80%;
    margin: 0 auto;
    color: #fff;
    font-size: 1em;

  @media (min-width: 688px) {
    width: 50%;    
}
  }
`;