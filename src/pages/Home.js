import React, { useEffect, useState } from 'react'
import { EpisodeCard } from "components/EpisodeCard"
import { SearchBar } from "components/SearchBar"
import { standInImg } from "../standInImg.jpg"
import { NotFound } from "components/NotFound"


export const Home = () => {
    const [BaseQuery, setBaseQuery] = useState("")
    const [name, setName] = useState("")
    const [searchRes, setSearchRes] = useState("")
    const [xImage, setXImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const MainURL = `https://api.tvmaze.com/singlesearch/shows/?q=${BaseQuery}&embed=episodes`


        fetch(MainURL)
            .then((res) => res.json())
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
        if (!searchRes) {
            return <>Not Found</>
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={BaseQuery} onChange={(e) => setBaseQuery(e.target.value)} />
                <button type="submit">SUBMIT</button>
            </form>

            <div>
                {searchRes && searchRes.episodes.map((episode) =>
                    <>
                        <EpisodeCard key={episode.id} {...episode} />
                    </>
                )}
            </div>
        </>
    )
}

/* export const Home = () => {
    const [BaseQuery, setBaseQuery] = useState("friends")
    const [searchRes, setSearchRes] = useState("")
    const [name, setName] = useState("")

    const BaseURL = `https://api.tvmaze.com/singlesearch/shows/?q=${BaseQuery}&embed=episodes`

    useEffect(() => {
        fetch(BaseURL)
            .then(res => res.json())
            .then(json => setSearchRes(json._embedded))
    }, [BaseQuery])
    if (!searchRes) {
        return <>Paitence, still loading.. </>
    } */

/*   const updateInput = async (input) => {
      const filtered = searchRes.filter(userQuery => {
          return userQuery.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input)
      setUserQuery(filtered)
  } */
/*   console.log(searchRes)
  console.log(searchRes.episodes)
  console.log(searchRes.episodes[0].name)

  return (
      <div> */
/*  <SearchBar /> */
/*  <img src={searchRes.episodes[0].image.medium} ></img>

 {searchRes.episodes.map((episode) =>
     <EpisodeCard key={episode.id} {...episode} /> */


/*  <span key={episode.id}>{episode.number} <img src={episode.image.medium} ></img></span> */
/*  </div>
)
} */