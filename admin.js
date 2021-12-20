const $postList = document.querySelector(".post-list");

(async function () {
  const { data: postList } = await axios("/data/data.json");

  Array.from(postList).forEach((post) => {
    const postElement = document.createElement("div");

    postElement.classList.add("post");

    postElement.innerHTML = `
      <span class="id">#${post.id}</span>
      <label>author: </label> <input value=${post.author} />
      <label>url: </label> <input value=${post.url} />
    `;

    $postList.appendChild(postElement);
  });
})();
