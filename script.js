getData();
function getData() {
  document.querySelector(".allcontent").innerHTML = " ";
  var keyword = document.querySelector("input").value;

  if (keyword == "") {
    keyword = "bitcoin";
  }
  var url =
    "https://newsapi.org/v2/everything?q=" +
    keyword +
    "&apiKey=1c689f10217143c3a88055ffa078c6e5";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.articles[0]);
      for (i = 0; i < data.articles.length; i++) {
        let allcontent = document.querySelector(".allcontent");
        allcontent.insertAdjacentHTML(
          "beforeend",
          ` <div class="mainContent">
          <div class="img">
           <img src="${data.articles[i].urlToImage} " alt="Currently not available" height="250px" width="250px" />
         </div>
         <div class="Artical-Information">
           <h2 class="ab" id="title">${data.articles[i].title} </h2>
           <p class="ab" id="description">
           ${data.articles[i].description}
           </p>
           <h4 class="ab" id="publishAt"> ${data.articles[i].publishedAt} | ${data.articles[i].author}</h4>
           <button class="readmore">
             <a class="ab" id="a" href=" ${data.articles[i].url}" target="_blank">Read more</a>
           </button>
         </div>
         </div>`
        );
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
