/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import {
    checkAuth,
    createListItem,
    getListItems,
    buyItem,
    deleteList,
    getDepartments,
} from './fetch-utils.js';
import { renderDepartmentOption, renderListItem } from './render-utils.js';
checkAuth();
/* Get DOM Elements */
const formEl = document.querySelector('.add-item-form');
const listContainerEl = document.querySelector('#list-container');
const deleteButtonEl = document.querySelector('#delete-list');
const deptSelectEl = document.querySelector('#dept-select');
/* State */
let itemsData = [];
let deptData = [];
/* Events */
window.addEventListener('load', async () => {
    fetchAndDisplayList();
    fetchAndDisplayDepartments();
});

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const insert = { item: formData.get('item'), quantity: formData.get('qty') };
    formEl.reset();
    await createListItem(insert);
    fetchAndDisplayList();
});

deleteButtonEl.addEventListener('click', async () => {
    await deleteList();
    fetchAndDisplayList();
});
/* Display Functions */
async function fetchAndDisplayList() {
    itemsData = await getListItems();
    console.log(itemsData);
    listContainerEl.textContent = '';
    itemsData.forEach((item) => {
        const div = renderListItem(item);
        if (!item.bought) {
            div.addEventListener('click', async () => {
                await buyItem(item.id);
                fetchAndDisplayList();
            });
        }
        listContainerEl.append(div);
    });
}

async function fetchAndDisplayDepartments() {
    deptData = await getDepartments();
    deptData.forEach((dept) => {
        const option = renderDepartmentOption(dept);
        deptSelectEl.append(option);
    });
}
