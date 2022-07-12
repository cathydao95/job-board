import Jobs from "./Jobs";
import { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const testSlice = data.slice(0, 9);
    testSlice.map((item) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        .then((res) => res.json())
        .then((data) => setDataArray((prevData) => [...prevData, data]));
    });
  }, [data]);

  //   const dataArray = data.map((item) => {
  //     fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   });

  console.log(data);

  return (
    <div>
      <h1>HN Jobs</h1>
      {dataArray.length > 0 ? <Jobs dataArray={dataArray} /> : null}

      <button>Load More</button>
    </div>
  );
}

export default Main;
