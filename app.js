console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    let res = "";
    if (i % 3 == 0) {
        res += "FIZZ";
    }
    if (i % 5 == 0) {
        res += "BUZZ";
    }
    if (res.length > 0) {
        console.log("i = " + i + " --> " + res);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3a:\n==========\n");
let i = 1;
while (i <= 100) {
    if (i % 2 > 0) {
        console.log(i);
    }
    i++;
}

console.log("EXERCISE 3b:\n==========\n");
i = 1;
do {
    if (i % 2 > 0) {
        console.log(i);
    }
    i++;
} while (i <= 100)

console.log("EXERCISE 3c:\n==========\n");
i = 1;
while (i <= 100) {
    let res = "";
    if (i % 3 == 0) {
        res += "FIZZ";
    }
    if (i % 5 == 0) {
        res += "BUZZ";
    }
    if (res.length > 0) {
        console.log("i = " + i + " --> " + res);
    }
    i++;
}

console.log("EXERCISE 3d:\n==========\n");
i = 1;
do {
    let res = "";
    if (i % 3 == 0) {
        res += "FIZZ";
    }
    if (i % 5 == 0) {
        res += "BUZZ";
    }
    if (res.length > 0) {
        console.log("i = " + i + " --> " + res);
    }
    i++;
} while (i <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundValBool = false;
for (let i = 0; i <= n; i++) {
    if (i == value) {
        console.log("Found value! value = " + value + "\nLoop size = " + n);
        foundValBool = true;
        break;
    }
}
if (!foundValBool) {
    console.log("Did not find value.  value = " + value + "\nLoop size = " + n);
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let nn = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log("fizzDivisor = " + fizzDivisor + "\nBuzzDivisor = " + buzzDivisor);
for (let i = start; i <= nn; i++) {
    let res = "";
    if (i % fizzDivisor == 0) {
        res += "FIZZ";
    }
    if (i % buzzDivisor == 0) {
        res += "BUZZ";
    }
    if (res.length > 0) {
        console.log("i = " + i + " --> " + res);
    }
}