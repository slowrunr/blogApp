let post = {
  //cоздаем объект внутри переменной post c помощью {title:'',text:'',}
  title: "",
  text: "",
};

const titleInputNode = document.getElementById("titleInput");
const textInputNode = document.getElementById("textInput"); //добавляем эту строку для поля ввода текста
const postBtnNode = document.getElementById("postBtn");
const postsNode = document.getElementById("posts");

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
  const title = titleInputNode.value; // меняем post -> title
  const text = textInputNode.value; // и добавляем эту строку
  return {
    // меняем post -> объект
    title: title,
    text: text,
  };
}

function savePost(newPost) {
  post = newPost;
}

function getPost() {
  return post;
}

function renderPost() {
  const postHTML = `
  <div class="post">
  <p class="post__title">${post.title}</p>
  <p class="post__text">${post.text}</p>
  </div>
  `;

  postsNode.innerHTML = postHTML;

  //console.log(getPost());
  //postedTitleNode.innerText = post;
}
