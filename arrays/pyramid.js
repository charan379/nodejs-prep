const args = process.argv.slice(2);

const rows = parseInt(args[0]);

console.time("s");
for (let i = 0; i < rows; i++) {

    // console.log("  ".repeat(rows - i - 1) + " *".repeat(2 * i + 1))

    let space = "  ";
    for (let j = 0; j < rows - i - 1; j++) {
        space += "  ";
    }

    let star = " *";
    for (let y = 0; y < (2 * i); y++) {
        star += " *";
    };

    console.log(space + star)
}

console.timeEnd("s")
