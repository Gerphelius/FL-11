function getPostsAndComments(url, check) {
  loading(true);
  let xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', url, true);
  xmlRequest.onload = function () {
    if (xmlRequest.status === 200) {
      if (check === 0) {
        postsArr = JSON.parse(xmlRequest.responseText)
        makePosts(postsArr);
        loading(false);
      } else {
        makeComments(JSON.parse(xmlRequest.responseText));
        loading(false);
      }
    } else {
      console.error(xmlRequest.statusText);
    }
  };
  xmlRequest.onerror = function() {
    console.error(xmlRequest.statusText);
  };
  xmlRequest.send(null);
}

function makePosts(posts) {
  header.innerHTML = `User ${userId} posts`;

	const postsList = document.createElement('ul');
  postsList.setAttribute('id', 'user-posts');

	for (let i = 0; i < posts.length; i++) {
    const li = document.createElement('li');
    li.setAttribute('id', 'post-id-' + posts[i].id);

		const title = document.createElement('p');
    title.innerHTML = 'Title: ' + posts[i].title;
    li.appendChild(title);

    const body = document.createElement('p');
    body.innerHTML = 'Body: ' + posts[i].body;
    li.appendChild(body);
    
		postsList.appendChild(li);
	}
	content.appendChild(postsList);
}

function makeComments(comments) {
  const getPostLi = document.querySelectorAll('#user-posts > li');
  for (let i = 0; i < getPostLi.length; i++) {
    let postId = parseInt(getPostLi[i].id.split('-')[2]);
    const commentsElem = document.createElement('p');
    commentsElem.innerHTML = 'Post comments:';
    const commentsList = document.createElement('ol');
    commentsList.setAttribute('id', 'user-comments');

    for (let i = 0; i < comments.length; i++) {
      if (comments[i].postId === postId) {
        const li = document.createElement('li')
        const name = document.createElement('p');
        name.innerHTML = 'Name: ' + comments[i].name;
        const body = document.createElement('p');
        body.innerHTML = 'Body: ' + comments[i].body;
        li.appendChild(name);
        li.appendChild(body);
        commentsList.appendChild(li);
      }
    }
    getPostLi[i].appendChild(commentsElem);
    getPostLi[i].appendChild(commentsList);
  }
}

function loading(state) {
  if(state) {
    spinner.style.display = 'block';
    content.style.display = 'none';
  } else {
    spinner.style.display = 'none';
    content.style.display = 'block';
  }
}

function redirectToUserList() {
  window.location.href = 'index.html';
}

let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
let commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
let postsArr;

const btnGoBack = document.getElementById('btn-go-back');
const content = document.getElementById('content');
const header = document.getElementById('header');
const userId = window.location.href.split('?id=')[1];
const spinner = document.getElementById('spinner');

btnGoBack.addEventListener('click', redirectToUserList);

getPostsAndComments(postsUrl + userId, 0);
getPostsAndComments(commentsUrl, 1);