let container = document.getElementById('container');

const size = 3;

function create_matrix(name, id_prefix, size) {
    let matrix = document.createElement('div');
    matrix.className = 'matrix';
    let header = document.createElement('p');
    header.innerHTML = name;
    matrix.appendChild(header);

    let ids_matrix = [];
    let matrix_table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        let row = document.createElement('tr');
        let ids_rows = [];
        for (let j = 0; j < size; j++) {
            let cell_input = document.createElement('input');
            cell_input.setAttribute('type', 'text');
            cell_input.value = '0';
            let id = i * size + j;
            let id_str = id_prefix + id.toString();
            ids_rows.push(id_str);
            cell_input.id = id_str;
            let cell = document.createElement('td');
            cell.appendChild(cell_input);
            row.appendChild(cell);
        }
        ids_matrix.push(ids_rows);
        matrix_table.appendChild(row)
    }
    matrix.appendChild(matrix_table);
    return [ids_matrix, matrix]
}

function get_matrix_values(id_matrix) {
    return id_matrix.map(row => row.map(v => {
        let raw = document.getElementById(v).value;
        return parseInt(raw);
    }));
}

function set_matrix_values(id_matrix, values_matrix) {
    id_matrix.map((row, i) => row.map((v, j) => {
        let cell = document.getElementById(v);
        cell.value = values_matrix[i][j];
    }));
}

function multiply_matrices(left, right, size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let cell = 0;
            for (let k = 0; k < size; k++) {
                cell += left[i][k] * right[k][j]
            }
            row.push(cell);
        }
        matrix.push(row);
    }
    return matrix;
}
let [a_ids, a] = create_matrix('Matrix A', 'a', size);
let [b_ids, b] = create_matrix('Matrix B', 'b', size);
let [c_ids, c] = create_matrix('Matrix C', 'c', size);
let button = document.createElement('input');
button.setAttribute('type', 'button');
button.value = 'Multiply';
button.onclick = function() {
    let values_a = get_matrix_values(a_ids);
    let values_b = get_matrix_values(b_ids);
    let values_c = multiply_matrices(values_a, values_b, size);
    set_matrix_values(c_ids, values_c)
};

container.appendChild(a);
container.appendChild(b);
container.appendChild(button);
container.appendChild(c);