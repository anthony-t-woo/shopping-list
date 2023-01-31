export function renderListItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    item.is_bought ? div.classList.add('notBought') : div.classList.add('bought');
    p.textContent = `${item.quantity} x ${item.item}`;
    div.append(p);
    return div;
}
