import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 auhust . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of places</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.37}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.37}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.37}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.37}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.37}
        price="$30 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
