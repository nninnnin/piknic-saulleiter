const DEFAULT_IMAGE_SOURCE =
  "data:image/jpeg;base64,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";

const $loading = document.querySelector(".loading");
const $image = document.querySelector("#image");
const $author = document.querySelector("#author");

(async function () {
  try {
    $image.src = DEFAULT_IMAGE_SOURCE;

    const { data: postList } = await axios.get("/public/data/data.json");

    const result = await Promise.all(
      postList.map(async ({ url: postUrl, author }) => {
        const {
          data: { base64Source },
        } = await axios(
          "https://i-p-2.herokuapp.com/instagram/fromPostUrlToImageSource",
          {
            params: {
              postUrl,
            },
          }
        );

        return {
          author,
          base64Source,
        };
      })
    );

    console.log("Succesfully get all the pictures from proxy server!", result);

    // const { data: sourceList } = await axios.get("/data/imageSource.json");

    // const testUrl = sourceList[0];

    // const {
    //   data: { base64Source },
    // } = await axios.get("http://localhost:3000/instagram", {
    //   params: {
    //     imageSource: testUrl,
    //   },
    // });

    // $image.src = "data:image/jpg;base64," + base64Source;

    function renderResult() {
      for (let i = 0; i < result.length; i++) {
        const { author, base64Source } = result[i];

        setTimeout(() => {
          $loading.style.display = "none";
          $image.src = "data:image/jpg;base64," + base64Source;
          $author.innerText = "@" + author;

          setTimeout(() => {
            if (result.length === i + 1) {
              renderResult();
            }
          }, 4000);
        }, 4000 * i);
      }
    }

    renderResult();
  } catch (err) {
    console.log(err);
  }
})();
