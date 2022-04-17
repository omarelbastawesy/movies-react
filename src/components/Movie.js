import React from "react";

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner";
import MovieInfoBar from "./MovieInfoBar";
import Grid from "./Grid";
import Actor from "./Actors";

// Hooks
import { useParams } from "react-router-dom";
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);

  console.log(state);

  if (loading) return <Spinner />;
  if (error) return <div>Something Went Wrong</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.title} />

      <MovieInfo
        poster={
          state.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${state.poster_path}`
            : NoImage
        }
        back={
          state.backdrop_path
            ? IMAGE_BASE_URL + BACKDROP_SIZE + state.backdrop_path
            : NoImage
        }
        title={state.title}
        type={state.genres.map((ele) => (
          <span>{ele.name}</span>
        ))}
        overview={state.overview}
        rate={state.vote_average}
        key={state.directors.map((ele) => ele.credit_id)}
        dirictor={state.directors.map((ele) => (
          <p>{ele.name}</p>
        ))}
      />

      <MovieInfoBar
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      />

      <Grid header="Actors">
        {state.actors.map((ele) => (
          <Actor
            key={ele.credit_id}
            url={
              ele.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${ele.profile_path}`
                : NoImage
            }
            name={ele.name}
            character={ele.character}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
