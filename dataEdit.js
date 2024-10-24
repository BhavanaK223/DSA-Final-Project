// Purpose: This file is used to toggle between the insert and delete sections of the data edit page
//React mui
//API QUESTIOn Discord
/* ---Remove REDUNANCY: bc input for edit data same, make it one section and change the button */

document.addEventListener('DOMContentLoaded',()=>{ 
    //buttons and sections
    const toggleInsert = document.getElementById('insertToggle');
    const toggleDelete = document.getElementById('deleteToggle');
    const insertSect = document.getElementById('insertSection');
    const deleteSect = document.getElementById('deleteSection');

    //Check if the elements are found
    console.log(toggleInsert, toggleDelete, insertSect, deleteSect);

    // function showSection(button, sectionToShow, otherButton, otherSection){
    //     console.log("button clicked: ${button.id}");//Debugging

    //     otherSection.classList.add('hidden');
    //     otherButton.classList.remove('active');

    //     sectionToShow.classList.remove('hidden');
    //     button.classList.add('active');
    // }

    function showInsert(toggleInsert, insertSect, toggleDelete, deleteSect){
        insertSect.classList.remove('hidden');
        insertSect.classList.add('Insertion');
        deleteSect.classList.add('hidden');
        deleteSect.classList.remove('Deletion');

        toggleInsert.classList.add('active');
        toggleDelete.classList.remove('active');
    }

    function showDelete(toggleDelete, deleteSect, toggleInsert, insertSect){
        deleteSect.classList.remove('hidden');
        deleteSect.classList.add('Deletion');
        insertSect.classList.add('hidden');
        insertSect.classList.remove('Insertion');

        toggleDelete.classList.add('active');
        toggleInsert.classList.remove('active');
    }

    toggleInsert.addEventListener('click',()=>{
        showInsert(toggleInsert, insertSect, toggleDelete, deleteSect);
    });
    toggleDelete.addEventListener('click',()=>{
        showDelete(toggleDelete, deleteSect, toggleInsert, insertSect);
    });
});