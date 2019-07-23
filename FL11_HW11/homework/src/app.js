let rootNode = document.getElementById('root');
let counter = 0;
let cols = 0;
const textField = document.getElementById('text-field');
const btnCreateNew = document.getElementById('button');
const actionsList = document.getElementById('actions-list');
const addNewSect = document.getElementById('section-add-new');

function makeNewAction(text) {
    counter++;
    const newAction = document.createElement('li');
    newAction.setAttribute('id', 'action-' + counter);
    newAction.setAttribute('draggable', 'true');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'checkbox');
    newAction.appendChild(checkbox);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'action-text');
    paragraph.innerHTML = text;
    newAction.appendChild(paragraph);

    const editBtn = document.createElement('i');
    editBtn.setAttribute('class', 'material-icons button-edit');
    editBtn.innerHTML = 'create';
    newAction.appendChild(editBtn);

    const deleteBtn = document.createElement('i');
    deleteBtn.setAttribute('class', 'material-icons button-delete');
    deleteBtn.innerHTML = 'delete';
    newAction.appendChild(deleteBtn);

    return newAction;
}

function changeBtnCreateNewState() {
    if (textField.value.trim()) {
        btnCreateNew.setAttribute('class', 'material-icons button-active');
        btnCreateNew.addEventListener('click', addNewAction);
    } else {
        btnCreateNew.setAttribute('class', 'material-icons button-inactive');
        btnCreateNew.removeEventListener('click', addNewAction);
    }
}

function addNewAction() {
    let text = textField.value;
    const newAction = makeNewAction(text)
    actionsList.appendChild(newAction);
    
    if (counter === 10) {
        const alertMax = document.createElement('p');
        alertMax.innerHTML = 'Max number of actions reached';
        addNewSect.appendChild(alertMax);
        btnCreateNew.setAttribute('class', 'material-icons button-inactive');
        btnCreateNew.removeEventListener('click', addNewAction);
    }
    
    // DragnDrop 
    cols = document.querySelectorAll('#actions-list li');
    [].forEach.call(cols, function(col) {
        const delBtn = document.getElementsByClassName('button-delete');
        const editBtn = document.getElementsByClassName('button-edit');
        const getCheckbox = document.querySelectorAll('#checkbox');
        delBtn[delBtn.length - 1].addEventListener('click', remove);
        editBtn[editBtn.length - 1].addEventListener('click', editAction);
        getCheckbox[getCheckbox.length - 1].addEventListener('change', (e) => {
            const checkboxParent = e.path[1].id;
            const getCkBoxParent = document.getElementById(checkboxParent);
            getCkBoxParent.querySelector('input').disabled = true;
            getCkBoxParent.querySelector('button-edit').removeEventListener('click', editAction); // same shit here
            btnCreateNew.setAttribute('display', 'none'); 
        });
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });
}

function remove(e) {
    counter--;
    const getP = document.querySelector('#section-add-new p')
    if (getP) {
        getP.remove();
    }
    btnCreateNew.setAttribute('class', 'material-icons button-active');
    btnCreateNew.addEventListener('click', addNewAction);
    const parentOfDelBtnId = e.path[1].id;
    const currentAction = document.getElementById(parentOfDelBtnId);
    currentAction.remove();
}

function makeEditForm(text) {
    const editForm = document.createElement('li');
    const textField = document.createElement('input');
    editForm.id = 'edit-form';
    textField.id = 'edit-text-field'; 
    textField.type = 'text';
    textField.value = text;
    editForm.appendChild(textField);

    const saveBtn = document.createElement('i');
    saveBtn.setAttribute('class', 'material-icons'); 
    saveBtn.id = 'save-btn'; 
    saveBtn.innerHTML = 'save';
    editForm.appendChild(saveBtn);

    return editForm;
}

function editAction(e) {
    const parentOfEditBtnId = e.path[1].id;
    const currentAct = document.getElementById(parentOfEditBtnId);
    const savedAct = actionsList.replaceChild(makeEditForm(e.path[1].innerText.slice(0, -13)), currentAct);
    const getSaveBtn = document.getElementById('save-btn');

    getSaveBtn.addEventListener('click', () => {
        const getNewText = document.getElementById('edit-text-field').value;
        const editedForm = document.getElementById('edit-form');
        savedAct.querySelector('p').innerHTML = getNewText;
        actionsList.replaceChild(savedAct, editedForm);
    })
}

textField.addEventListener('input', changeBtnCreateNewState);
// DragnDropFunc 
  
let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); 
    }
    e.dataTransfer.dropEffect = 'move'; 
    
    return false;
}

function handleDragEnter() {
    this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over'); 
}

function handleDrop(e) {
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd() {
    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}