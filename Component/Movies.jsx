import React from "react";

import classes from "./Movies.module.css";

const Movies = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.opening_crawl}</h3>
      <p>{props.release_date}</p>
    </li>
  );
};
export default Movies;
