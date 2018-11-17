let a = null;
let b = null;

function recreate_matrix(rows_id, columns_id, container_id) {
    let rows = parseInt(document.getElementById(rows_id).value);
    let columns = parseInt(document.getElementById(columns_id).value);
    let container = document.getElementById(container_id);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    return new MatrixInOuter(container, container_id, rows, columns)
}

function recreate_a_matrix(rows_id, columns_id, container_id) {
    a = recreate_matrix(rows_id, columns_id, container_id)
}

function recreate_b_matrix(rows_id, columns_id, container_id) {
    b = recreate_matrix(rows_id, columns_id, container_id)
}

function performOperation(new_form_container_id, operation_form_id) {
    let form = document.getElementById(operation_form_id);
    for (let child = form.firstChild; child !== null; child = child.nextSibling) {
        if (child.checked) {
            let operation = child.value;
            let left = a.get_values();
            let right = b.get_values();
            let c;
            try {
                switch (operation) {
                    case 'add':
                        c = left.add(right);
                        break;
                    case 'sub':
                        c = left.subtract(right);
                        break;
                    case 'mul':
                        c = left.multiply(right);
                        break;
                    default:
                        throw new Error('operation doesn\'t found');
                }
            } catch (e) {
                alert(e.toString());
                throw e;
            }
            let container = document.getElementById(new_form_container_id);
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            let c_inouter = new MatrixInOuter(container, new_form_container_id, c.rows, c.columns);
            c_inouter.set_values(c);
            return
        }
    }
}