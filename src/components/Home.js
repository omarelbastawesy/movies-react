import React from "react";
// config
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from "../config";
// componrnts
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// hook
import { useHomeFech } from "../hooks/useHomeFech";
//image
import Noimage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setMore } =
    useHomeFech();

  console.log(state);

  if (error) return <div>Something Went Wrong....</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={`${state.results[0].title}`}
          text={`${state.results[0].overview}`}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : Noimage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setMore(true)} />
      )}
    </>
  );
};

export default Home;
