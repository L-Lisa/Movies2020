import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { DetailsCard } from 'components/DetailsCard'

export const Details = () => {
    const { id } = useParams()

    const detailsURL = `http://api.tvmaze.com/episodes/${id}?embed=show`
    const [details, setDetails] = useState()
    const [summary, setSummary] = useState()

    useEffect(() => {
        fetch(detailsURL)
            .then(res => res.json())
            .then((json) => {
                console.log(json._embedded.show)
                console.log(json._embedded.show)
                setDetails(json)
            })

    }, [detailsURL, id])
    console.log(details)
    console.log(details)
    /*   console.log(details._embedded) */
    /* console.log(details._embedded.show.image.medium) */
    /* const Newsummary = () => {
        if (details.summary === null) {
            return
        } else {
            <p>{details.summary.replace('<p>', '').replace('</p>', '')}</p>
        }
    } */

    if (!details) {
        return <>Loading, please wait</>;
    } else {
        return (
            <div>
                <DetailsCard {...details} />
            </div>
        )
    }
}