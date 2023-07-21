//cоздаем объект внутри переменной post c помощью {title:'',text:'',}
//let post = {
//  title: "",
//  text: "",};
// при такой записи каждый новый пост перезапиывает старый

//создаем массив posts
const posts = [];

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

  // затем сохраняем пост функцией setPost - меняем на addPost
  //savePost(postFromUser);
  addPost(postFromUser);

  // и отображаем текст в posts
  renderPosts();
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

//function savePost(newPost) { -  эта функция была нужна, чтобы сохранять новый пост - меняем её на addpost
//  post = newPost;}

function addPost({ title, text }) {
  // === addPost(post)
  posts.push({
    // === posts.push(post)
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
      <div class="post">
        
        <p class="post__title">${post.title}</p>
        <p class="post__text">${post.text}</p>
      </div>
     `;
  });

  postsNode.innerHTML = postsHTML;

  //console.log(getPost());
  //postedTitleNode.innerText = post;
}
