import React from 'react'
import styled from "styled-components/macro"
import { Link } from 'react-router-dom'
import StandInImg from "../images/standInImg.jpg"

const CardLink = styled(Link)`
width: 95%;
cursor: pointer;
@media (min-width: 688px) {
    width: 45%;
  }
  @media (min-width: 992px) {
    width: 33%;
  }
  @media (min-width: 1200px) {
  width:24%;
  }
`;
const CardSection = styled.section`
position: relative;
`;
const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
&:hover img{
    opacity: 0.6;
  }
&:hover div{
visibility: visible;
opacity: 0.9;
color: #ffff; 
background-size:auto;
  }
img{
  width: auto;
  height: 300px;
  width: -webkit-fill-available;
  object-fit: cover;
  -webkit-transition: opacity 0.4s ease-in-out;
  -moz-transition:opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4 ease-in-out;
  transition: opacity 0.4s ease-in-out;
  margin: 5px;
  }
div{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  text-align: center;
  -webkit-transition: opacity 0.7s ease-in-out;
  -moz-transition:opacity 0.7s ease-in-out;
  -o-transition: opacity 0.7 ease-in-out;
  transition: opacity 0.7s ease-in-out;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 10px;
  @media (min-width: 650px) {
    opacity: 0;
    visibility: hidden;
  }
  h1{
    font-size: 1.5em; 
    font-weight: 800;
    width: 95%;
  }
  h2{
    font-size: 0.8em; 
    font-weight:400; 
    span{
      font-size: 1em; 
    font-weight:600;
    }
  }
}
`;
export const EpisodeCard = ({ episode, xImage, season, name, image, id, number }) => {
  return (
    <CardLink to={`/episode-details/${id}`}>
      <CardSection>
        <CardWrapper>
          {image ? <img src={image.medium} alt={name} ></img> : <img src={StandInImg} alt="MoveE Image" ></img>}
          <div>
            <h1>{name}</h1>
            <h2>Season:<span> {season}</span> Episode:<span> {number}</span></h2>
          </div>
        </CardWrapper>
      </CardSection>
    </CardLink>
  )
}




