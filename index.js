let post = null;

const titleInputNode = document.getElementById("titleInput");
const postBtnNode = document.getElementById("postBtn");
const postedTitleNode = document.getElementById("postedTitle");

postBtnNode.addEventListener("click", function () {
  // 1 вариант кода
  //console.log("looks good");
  //postTitle = titleInputNode.value;
  //  console.log(postTitle);
  //postedTitleNode.innerText = postTitle;

  // 2-й вариант кода с разбивкой по задачам (рефкторинг)

  // сначала получаем данные из поля вводда
  const postFromUser = getPostFromUser();

  // затем сохраняем пост функцией setPost
  savePost(postFromUser);

  // и отображаем текст в postedTitle
  renderPost();
});

function getPostFromUser() {
  const post = titleInputNode.value;
  return post;
}

function savePost(newPost) {
  post = newPost;
}

function renderPost() {
  postedTitleNode.innerText = post;
}
