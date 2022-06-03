let output = document.querySelector(".output");
let reverse = document.querySelector(".reverse")
const putNumber = (propses) => {
    output.innerText += propses
}

const clearFunction = () => {
    output.innerText = ''
}

const showResult = () => {
    output.innerText = executeCalculation(output.innerText)
}

const clearLast = () => {
    output.innerText = output.innerText.slice(0, output.innerText.length - 1)
}

const rev = () => {
    output.innerText = executeCalculation(output.innerText) * -1
}

const percent = () => {
    output.innerText = executeCalculation(output.innerText) / 100
}

const executeCalculation = (calculation) => {
    let fn = new Function(`return (${calculation});`);
    try {
        return fn();
    } catch (error) {
        console.log(error);
        return;
    }
}