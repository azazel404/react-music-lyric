import React from 'react'
import Tracks from "../tracks/tracks";
import Search from "../tracks/search";

const Landing = () => {
  return (
    <React.Fragment>
        <Search />
        <Tracks />
    </React.Fragment>
  )
}
export default Landing;
