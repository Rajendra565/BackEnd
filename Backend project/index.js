


let url = "https://jsonplaceholder.typicode.com/posts";

(async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();

    data.forEach((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();