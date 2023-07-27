//cоздаем объект внутри переменной post c помощью {title:'',text:'',}
//let post = {
//  title: "",
//  text: "",};
// при такой записи каждый новый пост перезапиывает старый

//создаем массив posts
const posts = [];
const TITLE_LENGTH_LIMIT = 10;
const TEXT_LENGTH_LIMIT = 20;
const titleInputNode = document.getElementById("titleInput");
const textInputNode = document.getElementById("textInput"); //добавляем эту строку для поля ввода текста
const postBtnNode = document.getElementById("postBtn");
//const titleLengthCounterNode = document.getElementById("titleLengthCounter");
//const textLengthCounterNode = document.getElementById("textLengthCounter");
const postsNode = document.getElementById("posts");
const warningsNode = document.getElementById("warnings");

postBtnNode.addEventListener("click", function () {
  // 1 вариант кода
  //console.log("looks good");
  //postTitle = titleInputNode.value;
  //  console.log(postTitle);
  //postedTitleNode.innerText = postTitle;
  // 2-й вариант кода с разбивкой по задачам (рефкторинг)
  // сначала получаем данные из поля вводда
  const postFromUser = getPostFromUser();

  if (!postFromUser.title || !postFromUser.text) {
    warningMessage.innerText = `Пожалуйста, заполните все поля`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  }

  // затем сохраняем пост функцией setPost - меняем на addPost
  //savePost(postFromUser);
  addPost(postFromUser);
  // и отображаем текст в posts
  renderPosts();
});

titleInputNode.addEventListener("input", validation);
textInputNode.addEventListener("input", validation);

//function showTitleLengthCounter() {
//const symbolsLeft = TITLE_LENGTH_LIMIT - titleInputNode.value.length;
//titleLengthCounterNode.textContent = `${symbolsLeft} /120 `;
//return;
//}
//titleInputNode.addEventListener("input", showTitleLengthCounter);

function validation(event) {
  const titleLength = titleInputNode.value.length;
  const textLength = textInputNode.value.length;
  const disableBtn = () => {
    postBtnNode.disabled = true;
  };
  const activeBtn = () => {
    postBtnNode.disabled = false;
  };

  if (titleLength > TITLE_LENGTH_LIMIT) {
    warningMessage.innerText = `Заголовок больше ${TITLE_LENGTH_LIMIT} символов`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  }

  if (textLength > TEXT_LENGTH_LIMIT) {
    warningMessage.innerText = `Пост больше ${TEXT_LENGTH_LIMIT} символов`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  } else {
    warningMessage.classList.add("warning__message-hidden");
    activeBtn();
    return;
  }
}

function getPostFromUser() {
  const title = titleInputNode.value; // меняем post -> title
  const text = textInputNode.value; // и добавляем эту строку
  return {
    // меняем post -> объект
    title: title,
    text: text,
  };
}

//function savePost(newPost) { -  эта функция была нужна, чтобы сохранять новый пост - меняем её на addpost
//  post = newPost;}

function addPost({ title, text }) {
  const currentDate = new Date();
  // === addPost(post)
  //const currentDate = new Date();
  // читается как "присвоить экземпляр объекта Date"

  posts.push({
    // === posts.push(post)
    currentDate,
    title, // === title: title,
    text, // === text: title,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();
  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
      <li class="post">
        <p class="post__date">${post.currentDate.toLocaleDateString()} ${post.currentDate.toLocaleTimeString(
      [],
      { hour: "2-digit", minute: "2-digit" }
    )}</p>
        <p class="post__title">${post.title}</p>
        <p class="post__text">${post.text}</p>
      </li>
     `;
  });

  postsNode.innerHTML = postsHTML;

  //console.log(getPost());
  //postedTitleNode.innerText = post;
} //${post.currentDate.toLocaleDateString()} ${post.currentDate.toLocaleTimeString(  [],  { hour: "2-digit", minute: "2-digit" })}
