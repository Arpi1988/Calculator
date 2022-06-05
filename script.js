const resultInput = document.querySelector(".result-input");
const calcButtons = document.querySelector(".calc-buttons-area");
console.log(calcButtons);

const signs = ["+", "-", "/", "*"];

let a = "";
let b = "";
let sign = "";

calcButtons.addEventListener("click", (e) => {
    const target = e.target;
    const targetClassName = target.className;
    const value = target.value;
    console.log(value);

    if (!targetClassName.includes("button")) {
        return;
    }
    if (resultInput.value === "" && !isFinite(value) && value === "0") {
        return;
    }

    if (value === "C") {
        resultInput.value = "";
        return;
    }

    if (sign === "" && isFinite(value)) {
        a += value;
        resultInput.value += value;
    }

    if (!!a && signs.includes(value)) {
        sign = value;
        resultInput.value = value;
    }

    if (!!a && !!sign && isFinite(value)) {
        if (signs.includes(resultInput.value)) {
            resultInput.value = "";
        }
        b += value;
        resultInput.value += value;
    }

    if (value === "=" && !!a && !!b && !!sign) {
        const result = calc(a, b, sign);
        resultInput.value = result;
        a = result;
        b = "";
        sign = "";
    }
});

function calc(x, y, action) {
    switch (action) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
    }
}