import React from "react";
import { requestUrls } from "../../../lib/api/index";
import Row from "../../common/Row";
import Banner from "../../layouts/Banner";
import Navbar from "../../layouts/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requestUrls.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requestUrls.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requestUrls.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requestUrls.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requestUrls.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requestUrls.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requestUrls.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestUrls.fetchDocumentaries} />
    </div>
  );
};

export default Home;
