function Jobs({ dataArray }) {
  console.log(dataArray);

  const items = dataArray.map((item, index) => {
    return (
      <div>
        <h2>{dataArray[index].title.substring(0, indexOf("is hiring"))}</h2>
        <p>{dataArray[index].title}</p>
        <span>Date {dataArray[index].time}</span>
      </div>
    );
  });

  return <div>{items}</div>;
}

export default Jobs;
