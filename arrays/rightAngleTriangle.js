
const args = process.argv.slice(2);

const rows = parseInt(args[0]) ?? 5;
for (let i = 0; i < rows; i++) {

    // using am inner loops to print the stars
    // for each row, we need to print i+1 stars
    // let str = "";
    // for (let j = 0; j <= i; j++) {
    //     str += "* ";
    // }
    // console.log(str)

    // using the repeat method to print the stars
    // for each row, we need to print i+1 stars
    const str = "* ".repeat(i+1);
    console.log(str);
}

