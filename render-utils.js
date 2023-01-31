export function renderListItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = `${item.quantity}X ${item.item}`;
    div.append(p);
    return div;
}
