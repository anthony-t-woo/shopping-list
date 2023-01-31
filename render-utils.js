export function renderListItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    item.is_bought ? div.classList.add('bought') : div.classList.add('notBought');
    p.textContent = `${item.quantity}X ${item.item}`;
    div.append(p);
    return div;
}
