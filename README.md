!['wireframe for shopping list app'](/assets/wireframe.jpeg)
!['data model for shopping list app'](/assets/data_model.png)

## HTML

    - h3 element for greeting
    - Form to input shopping list item
        - input for item
        - input for quantity
        - submit button
    - Button to delete list
    - Emtpty div to inject list data from database

## Slices

### On load, user should be able to see a list of their shopping list items

    - fetch data from database
    - render to state and append to dom

### On form submit, user should be able to add item to shopping list

    - get data from form and insert as a new row to supabase
    - fetch, render and append to display updated list

### On click of list item, user should be able to mark the list item as bought (strike through text)

    - click event listener for list item
        - calls update row function to change bool of bought column to true

### On click of delete list button, user should be able to delete their entire list

    - click event listener for delete button
    - calls delete function to delete all rows with matching user id
