/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { checkAuth, createListItem } from './fetch-utils.js';

checkAuth();

/* Get DOM Elements */
const formEl = document.querySelector('.add-item-form');
/* State */
let listData = [];
/* Events */
window.addEventListener('load', async () => {});

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const insert = { item: formData.get('item'), quantity: formData.get('qty') };
    await createListItem(insert);
});
/* Display Functions */
