const PROXY_ADDRESS = "http://localhost:3000";

const $postList = document.querySelector(".post-list");

(async function () {
  const { data: postList } = await axios("/data/data.json");

  const result = await Promise.all(
    postList.map(async (post) => {
      const {
        data: { base64Source },
      } = await axios(
        `${PROXY_ADDRESS}/instagram/postUrlToImageSource?postUrl=${post.url}`
      );

      post.imageString = base64Source;

      return post;
    })
  );

  console.log("새로운..", result);

  Array.from(postList).forEach((post) => {
    const postElement = document.createElement("div");

    postElement.classList.add("post");
    postElement.classList.add("presenting");

    postElement.innerHTML = `
      <img src="data:image/png;base64,${post.imageString}" />
      <span class="id">#${post.id}</span>
      <label>author: </label> <input value=${post.author} disabled />
      <label>url: </label> <input value=${post.url} disabled />
    `;

    $postList.appendChild(postElement);
  });
})();
