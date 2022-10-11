import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TableOne from "../Components/Table/TableOne";

import Paginate from "./Next";

export interface IFrontdata {
  num_comments: number;
  points: number;
  upvote: string;
  title: string;
  url: string;
  author: string;
  created_at: number;
  created_at_i: number;
}

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [loader, setLoader] = useState(false);

  async function getDataFromAPI() {
    setLoader(true);
    await fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setLoader(false);
        setData(result?.hits);
      });
  }
  useEffect(() => {
    getDataFromAPI();
  }, []);
  return (
    <div>
      <Container>
        <Header />
        {loader ? <Spinner animation={"border"} /> : <TableOne data={data} />}
        <Paginate />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
