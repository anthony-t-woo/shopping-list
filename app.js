/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { checkAuth, createListItem, getListItems, buyItem } from './fetch-utils.js';
import { renderListItem } from './render-utils.js';
checkAuth();
/* Get DOM Elements */
const formEl = document.querySelector('.add-item-form');
const listContainerEl = document.querySelector('#list-container');
/* State */
let itemsData = [];
/* Events */
window.addEventListener('load', async () => {
    fetchAndDisplayList();
});

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const insert = { item: formData.get('item'), quantity: formData.get('qty') };
    formEl.reset();
    await createListItem(insert);
    fetchAndDisplayList();
});
/* Display Functions */
async function fetchAndDisplayList() {
    itemsData = await getListItems();
    listContainerEl.textContent = '';
    itemsData.forEach((item) => {
        const div = renderListItem(item);
        if (!item.bought) {
            div.addEventListener('click', async () => {
                await buyItem(item.id);
            });
        }
        listContainerEl.append(div);
    });
}
