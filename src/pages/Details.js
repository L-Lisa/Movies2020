import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

export const Details = () => {
    const { id } = useParams()

    const detailsURL = `http://api.tvmaze.com/episodes/${id}?embed=show`
    const [details, setDetails] = useState()
    const [summary, setSummary] = useState()

    useEffect(() => {
        fetch(detailsURL)
            .then(res => res.json())
            .then((json) => {
                setDetails(json)

            })

    }, [detailsURL, id])
    console.log(details)
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
                details
        Name: {details.name}
First Aired: {details.airdate}

                {details.summary ? <p>{details.summary.replace('<p>', '').replace('</p>', '')}  </p> : ''}



            </div>
        )
    }
}