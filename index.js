function edit () {
    const editBoxEls = document.getElementsByClassName('edit-box');
    // const hiddenMenu = docume.getElementsByClassName('hidden-dropdown-menu');
    // hiddenMenu[0].style.display = 'none'
    editBoxEls[0].style.display = 'block'
    const dim = document.getElementById('dim');
    dim.style.zIndex = 8;
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
    const dim = document.getElementById('dim');
    dim.style.zIndex = -100;
}


function add () {
    const addTaskBoxEls = document.getElementsByClassName('task-add-box');
    addTaskBoxEls[0].style.display = 'block'
}

function everywhereCancel () {
    const dim = document.getElementById('dim');
    dim.style.zIndex = -100;
    const editBoxEls = document.getElementsByClassName('edit-box');
    editBoxEls[0].style.display = 'none'
}