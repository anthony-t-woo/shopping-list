export function renderListItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    item.is_bought ? div.classList.add('bought') : div.classList.add('notBought');
    p.textContent = `${item.quantity} x ${item.item} from ${item.departments.department}`;
    div.append(p);
    return div;
}

export function renderDepartmentOption(option) {
    const deptOption = document.createElement('option');
    deptOption.textContent = option.department;
    deptOption.value = option.id;
    return deptOption;
}
