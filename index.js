const $notification = document.querySelector(".notification");
const $image = document.querySelector("#image");
const $author = document.querySelector("#author");

(async function () {
  try {
    const { data: postList } = await axios.get("/public/data/data.json");

    const result = await Promise.all(
      postList.map(async ({ url: postUrl, author }) => {
        const {
          data: { result, base64Source },
        } = await axios(
          "https://i-p-2.herokuapp.com/instagram/fromPostUrlToImageSource",
          {
            params: {
              postUrl,
            },
          }
        );

        if (!(result === "ok") || !base64Source) return;

        return {
          author,
          base64Source,
        };
      })
    );

    console.log("가져온 사진들", result);

    const filteredResult = result.filter(result => result);

    console.log("필터링 된 목록", filteredResult);

    function renderResult() {
      for (let i = 0; i < filteredResult.length; i++) {
        const { author, base64Source } = filteredResult[i];

        if (!base64Source) continue;

        setTimeout(() => {
          $notification.style.display = "none";
          $image.src = "data:image/jpg;base64," + base64Source;
          $author.innerText = "@" + author;

          setTimeout(() => {
            if (filteredResult.length === i + 1) {
              renderResult();
            }
          }, 4000);
        }, 4000 * i);
      }
    }

    renderResult();
  } catch (err) {
    console.log(err);

    $notification.innerText = "실패: 사진을 불러올 수 없습니다.";
  }
})();
