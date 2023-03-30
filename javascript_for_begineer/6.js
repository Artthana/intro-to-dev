for (let i = 0; i < 10; i++) {
    // console.log(i);
    if (i % 2 === 0) {
        console.log(i + " even number")
    } else if (i === 5) {
        break;
    } else {
        console.log(i + " old number")
    }
}