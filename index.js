let postTitle = null;

const titleInputNode = document.getElementById("titleInput");
const postBtnNode = document.getElementById("postBtn");
const postedTitleNode = document.getElementById("postedTitle");

postBtnNode.addEventListener("click", function () {
  //console.log("looks good");
  postTitle = titleInputNode.value;

  console.log(postTitle);

  postedTitleNode.innerText = postTitle;
});

title = "first title";
console.log(title);
