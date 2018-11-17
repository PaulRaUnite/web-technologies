class Matrix {
    constructor(rows, columns, values) {
        this.rows = rows;
        this.columns = columns;
        this.values = values;
        this.check_dimensions(rows, columns);
    }

    check_dimensions(rows, columns) {
        if (this.values.length !== rows) {
            throw new RangeError('rows != values.length')
        }
        for (let i = 0; i < rows; i++) {
            let row = this.values[i];
            if (columns !== row.length) {
                throw new RangeError('columns != values[i].length')
            }
        }
    }

    dimentions() {
        return [this.rows, this.columns]
    }

    add(right) {
        right.check_dimensions(this.rows, this.columns);

        let matrix = [];
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.columns; j++) {
                row.push(this.values[i][j] + right.values[i][j])
            }
            matrix.push(row);
        }
        return new Matrix(this.rows, this.columns, matrix)
    }

    subtract(right) {
        right.check_dimensions(this.rows, this.columns);

        let matrix = [];
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.columns; j++) {
                row.push(this.values[i][j] - right.values[i][j])
            }
            matrix.push(row);
        }
        return new Matrix(this.rows, this.columns, matrix)
    }

    multiply(right) {
        right.check_dimensions(this.columns, right.columns);

        let matrix = [];
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < right.columns; j++) {
                let sum = 0;
                for (let k = 0; k < this.columns; k++) {
                    sum += this.values[i][k] * right.values[k][j]
                }
                row.push(sum);
            }
            matrix.push(row);
        }
        return new Matrix(this.rows, right.columns, matrix)
    }
}

class MatrixInOuter {
    constructor(root, prefix, rows, columns) {
        console.log(rows, columns);
        let matrix = document.createElement('div');
        matrix.className = 'matrix';

        let ids_matrix = [];
        let matrix_table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            let row = document.createElement('tr');
            let ids_rows = [];
            for (let j = 0; j < columns; j++) {
                let cell_input = document.createElement('input');
                cell_input.setAttribute('type', 'number');
                cell_input.setAttribute('step', 'any');
                cell_input.value = '0';
                let id = i * rows + j;
                let id_str = prefix + id.toString();
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
        root.appendChild(matrix);

        this.matrix_ids = ids_matrix;
        this.rows = rows;
        this.columns = columns;
    }

    get_values() {
        return new Matrix(this.rows, this.columns,
            this.matrix_ids.map(row => row.map(v => {
                let raw = document.getElementById(v).value;
                return parseFloat(raw);
            })));
    }

    set_values(matrix) {
        matrix.check_dimensions(this.rows, this.columns);
        this.matrix_ids.map((row, i) => row.map((v, j) => {
            let cell = document.getElementById(v);
            cell.value = matrix.values[i][j];
        }));
    }
}