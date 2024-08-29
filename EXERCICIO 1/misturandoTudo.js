var i;
for (i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divisível por 3 e por 5");
    }
    else if (i % 3 === 0) {
        console.log("Divisível por 3");
    }
    else if (i % 5 === 0) {
        console.log("Divisível por 5");
    }
    else {
        console.log(i);
    }
}
