import Jobs from "./Jobs";
import { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [load, setLoad] = useState(9);

  //   on load, fetch all ID data
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //   useEffect(() => {
  //     const testSlice = data.slice(0, load);
  //     console.log(testSlice);
  //     const newLoad = []
  //     testSlice.map((item) => {
  //       fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
  //         .then((res) => res.json())
  //         .then((data) => setDataArray((prevData) => [...prevData, data]));
  //     });
  //   }, [data, load]);

  // NEED TO FIGURE OUT HOW TO DISPLAY
  useEffect(() => {
    const testSlice = data.slice(0, load);
    console.log(testSlice);
    const newLoad = [];
    testSlice.map((item) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        .then((res) => res.json())
        .then((data) => newLoad.push(data));
    });
    setDataArray(newLoad);
  }, [data, load]);

  // load 6 more posts
  function loadMore() {
    setLoad((prevLoad) => prevLoad + 6);
  }

  return (
    <div>
      <h1>HN Jobs</h1>
      <div className="job-container">
        {dataArray.length > 0 ? (
          dataArray.map((item) => <Jobs item={item} />)
        ) : (
          <div>"Loading"</div>
        )}
      </div>

      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default Main;
