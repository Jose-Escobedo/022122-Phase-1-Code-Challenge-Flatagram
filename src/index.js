// write your code here
const url = "http://localhost:3000/images/1";
const urlComments = "http://localhost:3000/comments";

const image = document.getElementById("card-image");
const title = document.getElementById("card-title");
const commentsList = document.getElementById("comments-list");
const likeCount = document.getElementById("like-count");
const comment = document.getElementById("comment");
const commentForm = document.getElementById("comment-form");
const likeButton = document.getElementById("like-button");

fetch(url)
  .then((res) => res.json())
  .then(renderContent);

function renderContent(contentObject) {
  //   console.log(contentObject.image);

  image.src = contentObject.image;
  title.textContent = contentObject.title;
}

fetch(urlComments)
  .then((res) => res.json())
  .then(renderComments);

function renderComments(contentObject) {
  //   console.log(contentObject[0]);

  let likeCounter = 0;

  likeButton.addEventListener("click", function () {
    likeCount.textContent = `${++likeCounter} likes`;
  });

  commentsList.innerHTML = `<li>${contentObject[0].content}</li>
  <li>${contentObject[1].content}</li>
  <li>${contentObject[2].content}</li>`;

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // console.log("ememem");
    // console.log(e.target.comment.value);

    const listItem = document.createElement("div");
    listItem.textContent = e.target.comment.value;
    commentsList.append(listItem);
  });
}
