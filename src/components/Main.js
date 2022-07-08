import Jobs from "./Jobs";
import { useState, useEffect } from "react";
function Main() {
  return (
    <div>
      <h1>HN Jobs</h1>
      <Jobs />
      <button>Load More</button>
    </div>
  );
}

export default Main;
