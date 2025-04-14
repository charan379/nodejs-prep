function getRandomNumber() {
    return Math.floor(Math.random() * 41);
}

do {
    const num = getRandomNumber();
    console.log(num)
    if (num === 40) break;

} while (true)
