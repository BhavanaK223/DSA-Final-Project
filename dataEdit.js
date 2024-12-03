// Purpose: This file is used to toggle between the insert and delete sections of the data edit page
//React MUI
//API QUESTIOn Discord

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';


document.addEventListener('DOMContentLoaded', () => {
    // Buttons and Sections
    const elements = {
        toggleInsert: document.getElementById('insertToggle'),
        toggleDelete: document.getElementById('deleteToggle'),
        insertButton: document.getElementById('insert'),
        deleteButton: document.getElementById('delete'),
        inputSection: document.getElementById('inputSection'),
    };

    // Validate if all required elements exist
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Missing element: ${key}`);
            return; // Exit if any element is not found
        }
    }

    const { toggleInsert, toggleDelete, insertButton, deleteButton, inputSection } = elements;

    // Functions
    const changeEdit = (activeToggle, inactiveToggle, activeButton, inactiveButton) => {
        // Highlight active toggle
        activeToggle.classList.add('active');
        inactiveToggle.classList.remove('active');

        // Show/Hide buttons
        activeButton.classList.remove('hidden');
        inactiveButton.classList.add('hidden');
    };

    const handleToggleClick = (activeToggle, inactiveToggle, activeButton, inactiveButton) => {
        changeEdit(activeToggle, inactiveToggle, activeButton, inactiveButton);
        inputSection.classList.add('dataInputSection');
    };

    // Event Listeners
    toggleInsert.addEventListener('click', () => {
        handleToggleClick(toggleInsert, toggleDelete, insertButton, deleteButton);
    });

    toggleDelete.addEventListener('click', () => {
        handleToggleClick(toggleDelete, toggleInsert, deleteButton, insertButton);
    });
});

