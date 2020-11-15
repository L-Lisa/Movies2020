import React from 'react'
import styled from "styled-components/macro"
import { Link } from 'react-router-dom'
import StandInImg from "../images/standInImg.jpg"


export const EpisodeCard = ({ episode, xImage, season, name, image, id, number }) => {

    return (
        <Link to={`/episode-details/${id}`} className="a-tag">
            <div>
                <img src={StandInImg} ></img>

                {/*   <img src={image.medium} ></img> */}
                {image ? <img src={image.medium} ></img> : <img src={StandInImg} ></img>}
                <div>{name}</div>
                <div>Season:{season} Episode:{number} {id}</div>
            </div>
        </Link>
    )
}

