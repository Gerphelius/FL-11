function getUsers() {
  loading(true);
  let xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', usersUrl, true);
  xmlRequest.onload = function () {
    if (xmlRequest.status === 200) {
      let usersArr = JSON.parse(xmlRequest.responseText);
      displayUsers(usersArr);
      allUsers = usersArr;
      loading(false);
    } else {
      console.error(xmlRequest.statusText);
    }
  };
  xmlRequest.onerror = function () {
    console.error(xmlRequest.statusText);
  };
  xmlRequest.send(null);
  btnGetUsers.remove();
};

function updateUsers(usersData) {
  loading(true);
  let json = JSON.stringify(usersData);
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', usersUrl + '/' + usersData.id, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    if (xhr.status === 200) {
      let user = JSON.parse(xhr.responseText);
      displayUsers(allUsers, user);
      loading(false);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.send(json);
};

function removeUser(e) {
  loading(true);
  const userId = getUsersArrId(allUsers, e.path[1].id);
  let xhr = new XMLHttpRequest();
  console.log("DELETE", usersUrl + '/' + allUsers[userId].id);
  xhr.open("DELETE", usersUrl + '/' + allUsers[userId].id, true);
  xhr.onload = function () {
    let user = JSON.parse(xhr.responseText);
  	if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('users-list').remove();
      allUsers.splice(userId, 1);
      displayUsers(allUsers);
      loading(false);
  	} else {
  		console.error(user);
  	}
  }
  xhr.send(null);
}

function getUsersArrId(usersArr, id) {
  let userId;
  for (let i = 0; i < usersArr.length; i++) {
    if (usersArr[i].id === parseInt(id)) {
      userId = i;
    }
  }
  return userId;
}

function createUsersForm(username, userId) {
  const getUserList = document.getElementById('users-list');

  const newListElem = document.createElement('li');
  newListElem.setAttribute('id', userId);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = username;
  newListElem.appendChild(paragraph);

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit user';
  newListElem.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove user';
  newListElem.appendChild(removeButton);

  getUserList.appendChild(newListElem);
  editButton.addEventListener('click', createEditForm);
  removeButton.addEventListener('click', removeUser);
  paragraph.addEventListener('click', redirectToUserPosts);
}

function createEditForm(e) {
  const listOfUserInfo = document.createElement('div');
  listOfUserInfo.setAttribute('id', 'user-info');
  let userId = getUsersArrId(allUsers, e.path[1].id);
  const submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit changes';

  for (let key in allUsers[userId]) {
    if (key === 'id') {
      const id = document.createElement('p');
      const num = document.createElement('span');
      num.innerHTML = allUsers[userId][key];
      id.innerHTML = 'User id: ';
      listOfUserInfo.appendChild(id).appendChild(num);
      continue;
    } else if (allUsers[userId][key] instanceof Object) {
      listOfUserInfo.appendChild(takeDeepInfo(allUsers[userId][key], key));
      continue;
    }
    const paragraph = document.createElement('p');
    paragraph.innerHTML = key;
    listOfUserInfo.appendChild(paragraph);

    const editField = document.createElement('input');
    editField.value = allUsers[userId][key];
    listOfUserInfo.appendChild(editField);
  }
  const usersList = document.getElementById('users-list');
  listOfUserInfo.appendChild(submitButton);
  submitButton.addEventListener('click', editUserInfo);
  content.replaceChild(listOfUserInfo, usersList);
} 

function takeDeepInfo(obj, add) {
  const userInfo = document.createElement('div');
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      userInfo.appendChild(takeDeepInfo(obj[key], key));
      continue;
    }
    const paragraph = document.createElement('p');
    if (add) {
      paragraph.innerHTML = `${add}: ${key}`;
    } else {
      paragraph.innerHTML = key;
    }
    userInfo.appendChild(paragraph);
    const editField = document.createElement('input');
    editField.value = obj[key];
    userInfo.appendChild(editField);
  }
  return userInfo;
}

function editUserInfo(e) {
  const editForm = document.getElementById('user-info');
  const parag = editForm.querySelectorAll('p');
  const inputs = editForm.querySelectorAll('input');
  const userId = getUsersArrId(allUsers, e.path[1].children[0].children[0].textContent);
  
  function objEdit(obj, add) {
    let addInfo = '';
    if (add) {
      addInfo = add + ': ';
    }
    for (let key in obj) {
      if (key === 'id') {
        continue;
      }
      if (obj[key] instanceof Object) {
        objEdit(obj[key], key);
      }
      for (let i = 1; i < parag.length; i++) {
        if (parag[i].innerHTML === addInfo + key) {
          if (inputs[i - 1].value === obj[key]) {
            break;
          }
          obj[key] = inputs[i - 1].value;
          break;
        }
      }
    }
  }
  objEdit(allUsers[userId])
  editForm.remove();
  updateUsers(allUsers[userId]);
}

function displayUsers(users) {
  const usersList = document.createElement('ol');
  usersList.setAttribute('id', 'users-list');
  content.appendChild(usersList);

  for (let i = 0; i < users.length; i++) {
    createUsersForm(users[i].name, users[i].id);
  }
}

function redirectToUserPosts(e) {
  window.location = 'posts.html?id=' + e.path[1].id;
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

let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let allUsers;

const btnGetUsers = document.getElementById('btn-get-users');
const content = document.getElementById('content');
const spinner = document.getElementById('spinner');

btnGetUsers.addEventListener('click', getUsers);