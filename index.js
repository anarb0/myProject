function edit () {
    const editBoxEls = document.getElementsByClassName('edit-box');
    console.log(editBoxEls[0]);
    editBoxEls[0].style.zIndex = 1
}
function deleteClick () {
    const deleteBoxEls = document.getElementsByClassName('delete-box');
    deleteBoxEls[0].style.display = 'block'
}

function cancel () {
    const cancelButtonEls = document.getElementsByClassName('edit-box');
    cancelButtonEls.style.display = 'none'
}