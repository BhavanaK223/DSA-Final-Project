// Purpose: This file is used to toggle between the insert and delete sections of the data edit page
//React mui
//API QUESTIOn Discord
/* ---Remove REDUNANCY: bc input for edit data same, make it one section and change the button */

document.addEventListener('DOMContentLoaded',()=>{ 
    //buttons and sections
    const toggleInsert = document.getElementById('insertToggle');
    const toggleDelete = document.getElementById('deleteToggle');
    const insertButton = document.getElementById('insert');
    const deleteButton = document.getElementById('delete');
    const inputSect = document.getElementById('inputSection');
    
    //Debug
    console.log(toggleInsert, toggleDelete);

    //Functions
    function InsertInput(insertToggle, deleteToggle, insertButton, deleteButton){  
        //Toggles
        insertToggle.classList.add('active');
        deleteToggle.classList.remove('active');
        //Buttons
        insertButton.classList.remove('hidden');
        deleteButton.classList.add('hidden');

    }
    function DeleteInput(deleteToggle, insertToggle, insertButton, deleteButton){
        //Toggles
        deleteToggle.classList.add('active');
        insertToggle.classList.remove('active');
        //Buttons
        deleteButton.classList.remove('hidden');
        insertButton.classList.add('hidden');
    }

    //Event
    toggleInsert.addEventListener('click',()=>{
        InsertInput(toggleInsert, toggleDelete, insertButton, deleteButton);
        inputSect.classList.add('dataInputSection');
    });
    toggleDelete.addEventListener('click',()=>{
        DeleteInput(toggleDelete, toggleInsert, insertButton, deleteButton);
        inputSect.classList.add('dataInputSection');
    });

});