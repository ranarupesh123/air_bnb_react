import React from 'react';
import './SearchPage.css'
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <p>62 stays - 26 august to 30 august - 2 guest</p>
            <h1>stay nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More Filters</Button>
            <SearchResult
            img="https://images.unsplash.com/photo-1531616918159-0c11198cd033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            location="Private Room in center of london"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1.5 shared bathroom . Kitchen . Free parking"
            star={4.78}
            price="$30/night"
            total="$113 total"
            />
             <SearchResult
            img="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            location="Private Room in center of london"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1.5 shared bathroom . Kitchen . Free parking"
            star={4.78}
            price="$30/night"
            total="$113 total"
            />
            <SearchResult
            img="https://images.unsplash.com/photo-1524061662617-6a29d732e3ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            location="Private Room in center of london"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1.5 shared bathroom . Kitchen . Free parking"
            star={4.78}
            price="$30/night"
            total="$113 total"
            />
            <SearchResult
            img="https://images.unsplash.com/photo-1577855132008-bbcbc2d444d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1123&q=80"
            location="Private Room in center of london"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1.5 shared bathroom . Kitchen . Free parking"
            star={4.78}
            price="$30/night"
            total="$113 total"
            />
            <SearchResult
            img="https://images.unsplash.com/photo-1505693196193-bfd859ae01d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            location="Private Room in center of london"
            title="Stay at this spacious Edwardian House"
            description="1 guest . 1 bedroom . 1.5 shared bathroom . Kitchen . Free parking"
            star={4.78}
            price="$30/night"
            total="$113 total"
            />
            </div>
        </div>
    )
}

export default SearchPage
