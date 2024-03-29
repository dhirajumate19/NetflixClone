import React from "react";

import Movies from "./Movies";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((item) => (
        // console.log(item.title);
        <Movies
          key={item.episode_id}
          title={item.title}
          opening_crawl={item.opening_crawl}
          release_date={item.release_date}
        />
      ))}
    </ul>
  );
};
export default MoviesList;
