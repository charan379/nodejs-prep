
function numberTriangle(num) {

    for (let i = 1; i <= num; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j.toString() + " ";
        }

        console.log(row);

    }
};

// numberTriangle(process.argv.slice(2)[0] || 5);

function numbersSeriesTriangle(num) {

    let col = 1;

    for (let i = 1; i <= num; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += col.toString() + " ";

            col++;
        }

        console.log(row);

    }
};

numbersSeriesTriangle(process.argv.slice(2)[0] || 5)
