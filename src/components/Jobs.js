function Jobs({ item }) {
  const dataTitle = item.title.includes("(")
    ? item.title.split(")")
    : item.title.split(" ");

  const companyTitle = dataTitle[0] + ")";
  const companyText = dataTitle[1];

  const postingDate = new Date(item.time * 1000);

  return (
    <div className="posting">
      <h2>{companyTitle}</h2>
      <p>{companyText}</p>
      <span>{postingDate.toLocaleDateString("en-US")}</span>
    </div>
  );
}

export default Jobs;
