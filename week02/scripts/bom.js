// 1. Get references to HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// 2. Add event listener to the Add Chapter button
button.addEventListener('click', function () {
    // 3. Check if input is not blank
    if (input.value.trim() !== '') {
        // 4. Create list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 5. Set the list item's text to the input value
        li.textContent = input.value;

        // 6. Configure delete button
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // 7. Add the delete button to the list item
        li.append(deleteButton);

        // 8. Add the list item to the unordered list
        list.append(li);

        // 9. Add event to delete button to remove item
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // refocus the input after delete
        });

        // 10. Clear the input field
        input.value = '';
    }

    // 11. Refocus the input field regardless of condition
    input.focus();
});
  


