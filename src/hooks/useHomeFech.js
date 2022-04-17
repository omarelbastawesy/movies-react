import { useEffect, useState } from "react";
// API
import API from "../API";
// helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const useHomeFech = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLandig] = useState(false);
  const [error, setError] = useState(false);
  const [more, setMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLandig(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLandig(false);
  };

  // initial and search
  useEffect(() => {
    if (!searchTerm) {
      const sesstionState = isPersistedState("homeState");

      if (sesstionState) {
        setState(sesstionState);
        return;
      }
    }

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // more
  useEffect(() => {
    if (!more) return;

    fetchMovies(state.page + 1, searchTerm);
    setMore(false);
  }, [more, searchTerm, state.page]);

  // write to session Storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setMore };
};
