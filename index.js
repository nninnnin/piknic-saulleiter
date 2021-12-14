console.log(axios);

(async function () {
  const { data: sourceList } = await axios.get("/imageSource.json");

  console.log(sourceList);
})();
