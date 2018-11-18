function draw(files, canvas_id) {
    let canvas = document.getElementById(canvas_id);
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        console.log(file);

        let reader = new FileReader();
        reader.onload = function (event) {
            console.log(this.result);
            let lines = this.result.split('\n');

            ctx.beginPath();
            for (let j = 0; j < lines.length; j++) {
                let [x, y] = lines[j].split(',');
                x = parseInt(x);
                y = parseInt(y);
                console.log(x, y);
                if (j === 0) {
                    console.log('move');
                    ctx.moveTo(x, y);
                } else {
                    console.log('line');
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        };
        reader.readAsText(file);
    }
}

function print(text_id, x_id, y_id, font_size_id, canvas_id) {
    let text = document.getElementById(text_id).value;
    let x = parseInt(document.getElementById(x_id).value);
    let y = parseInt(document.getElementById(y_id).value);
    let font_size = parseInt(document.getElementById(font_size_id).value);
    let canvas = document.getElementById(canvas_id);

    console.log(text, x, y, font_size);
    let ctx = canvas.getContext("2d");
    ctx.font = `${font_size}px Arial`;
    ctx.fillText(text, x, y);
}