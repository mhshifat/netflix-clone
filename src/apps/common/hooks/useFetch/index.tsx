import { useEffect, useState } from "react";
import { API } from "../../../../lib/services/axios/index";

const useFetch = (url: string) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [url]);

  return { movies };
};

export default useFetch;
