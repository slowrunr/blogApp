const posts = [];
const TITLE_LENGTH_LIMIT = 100;
const TEXT_LENGTH_LIMIT = 200;
const titleInputNode = document.getElementById("titleInput");
const textInputNode = document.getElementById("textInput"); //добавляем эту строку для поля ввода текста
const postBtnNode = document.getElementById("postBtn");
const titleLengthCounterNode = document.getElementById("titleLengthCounter");
const textLengthCounterNode = document.getElementById("textLengthCounter");
const postsNode = document.getElementById("posts");
const warningsNode = document.getElementById("warnings");

postBtnNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  if (!postFromUser.title || !postFromUser.text) {
    warningMessage.innerText = `Пожалуйста, заполните все поля`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  }

  addPost(postFromUser);
  renderPosts();
});

titleInputNode.addEventListener("input", validation);
titleInputNode.addEventListener("input", showTitleLength);
textInputNode.addEventListener("input", validation);
textInputNode.addEventListener("input", showTextLength);

function showTitleLength() {
  titleLengthCounterNode.textContent = `${titleInputNode.value.length}/100`;
  return;
}

function showTextLength() {
  textLengthCounterNode.textContent = `${textInputNode.value.length}/200`;
  return;
}

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
    titleLengthCounterNode.classList.add("overprinted");
    warningMessage.innerText = `Заголовок больше ${TITLE_LENGTH_LIMIT} символов`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  }

  if (textLength > TEXT_LENGTH_LIMIT) {
    textLengthCounterNode.classList.add("overprinted");
    warningMessage.innerText = `Пост больше ${TEXT_LENGTH_LIMIT} символов`;
    warningMessage.classList.remove("warning__message-hidden");
    disableBtn();
    return;
  }

  titleLengthCounterNode.classList.remove("overprinted");
  textLengthCounterNode.classList.remove("overprinted");
  warningMessage.classList.add("warning__message-hidden");
  activeBtn();
  return;
}

function getPostFromUser() {
  const title = titleInputNode.value;
  const text = textInputNode.value;
  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  const currentDate = new Date();
  posts.push({
    currentDate,
    title,
    text,
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
}
