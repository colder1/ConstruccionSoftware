let fullOp = "";
let res = 0;

function handleClick(number) {

    if (number === "CE") {
        fullOp = "";
        showNumber("0");
        return;
    }

    if (number === "+/-") {
        if (fullOp === "" || fullOp === "0") return;

        let index = -1;
        const operadores = ["+", "-", "*", "/", "^"];

        for (let i = fullOp.length - 1; i >= 0; i--) {
            if (operadores.includes(fullOp[i])) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            fullOp = fullOp.startsWith("-") ? fullOp.slice(1) : "-" + fullOp;
        } else {
            let antes = fullOp.slice(0, index + 1);
            let numero = fullOp.slice(index + 1);
            numero = numero.startsWith("-") ? numero.slice(1) : "-" + numero;
            fullOp = antes + numero;
        }

        showNumber(fullOp);
        return;
    }

    if (number === ".") {
        let partes = fullOp.split(/[\+\-\*\/\^]/);
        let ultimo = partes[partes.length - 1];

        if (!ultimo.includes(".")) {
            fullOp += ".";
            showNumber(fullOp);
        }
        return;
    }

    const operadores = ["+", "-", "*", "/", "^"];

    if (operadores.includes(number)) {
        if (fullOp === "" && number !== "-") return;
        let ultimo = fullOp[fullOp.length - 1];
        if (operadores.includes(ultimo)) return;
    }

    fullOp = (fullOp === "0") ? number : fullOp + number;
    showNumber(fullOp);
}

function calculate() {
    if (fullOp === "") return;

    let operadores = ["+", "-", "*", "/", "^"];
    let index = -1;
    let op = "";

    for (let i = 1; i < fullOp.length; i++) {
        if (operadores.includes(fullOp[i])) {
            index = i;
            op = fullOp[i];
            break;
        }
    }

    if (index === -1) {
        showNumber("Invalid Input");
        return;
    }

    let a = Number(fullOp.slice(0, index));
    let b = Number(fullOp.slice(index + 1));

    if (isNaN(a) || isNaN(b)) {
        showNumber("Invalid Input");
        return;
    }

    if (op === "+") res = a + b;
    if (op === "-") res = a - b;
    if (op === "*") res = a * b;
    if (op === "/") {
        if (b === 0) {
            showNumber("Cannot Divide by Zero");
            fullOp = "";
            return;
        }
        res = a / b;
    }
    if (op === "^") res = a ** b;

    showNumber(res);
    addToHistory(fullOp, res);
    fullOp = res.toString();
}

function showNumber(n) {
    document.getElementById("screen").innerHTML = n;
}

function addToHistory(operation, result) {
    let history = document.getElementById("history");

    let item = document.createElement("div");
    item.className = "history-item";

    let opText = document.createElement("div");
    opText.className = "history-operation";
    opText.innerHTML = operation;

    let resText = document.createElement("div");
    resText.className = "history-result";
    resText.innerHTML = "= " + result;

    item.appendChild(opText);
    item.appendChild(resText);

    history.prepend(item);
}

function clearHistory() {
    document.getElementById("history").innerHTML = "";
}