import React, { useState } from 'react'
import styled from "styled-components/macro"

const SearchWrapper = styled.div`
width: 200px;
height: 60px;
`;

export const SearchBar = () => {
    const [userQuery, setUserQuery] = useState("")
    const UpdateSearch = (e) => {
        const [searchRes, setSearchRes] = useState("")
        const SearchURL = `https://api.tvmaze.com/singlesearch/shows/?q=${userQuery}&embed=episodes`
        e.preventDefault()
        fetch(SearchURL)
            .then(res => res.json())
            .then(json => setSearchRes(json))
        console.log(searchRes)
        if (!searchRes) {
            return <>Paitence, still loading.. </>
        }
        console.log(searchRes)
    }
    return (
        <SearchWrapper>
            <form onSubmit={UpdateSearch}>
                <input
                    type="text"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                />
                <button type="submit">SUBMIT</button>
            </form>
        </SearchWrapper>
    )
}

