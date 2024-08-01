function edit () {
    const editBoxEls = document.getElementsByClassName('edit-box');
    console.log(editBoxEls[0]);
    editBoxEls[0].style.display = 'block'
}
function deleteClick () {
    const deleteBoxEls = document.getElementsByClassName('delete-box');
    deleteBoxEls[0].style.display = 'block'
}

function cancel (event) {
    console.log(event);
    let className = event.target.id.split('-')[0]+'-box'
    const cancelButtonEls = document.getElementsByClassName(className);
    cancelButtonEls[0].style.display = 'none'
}
function add () {
    const addTaskBoxEls = document.getElementsByClassName('task-add-box');
    addTaskBoxEls[0].style.display = 'block'
}