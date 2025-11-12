function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector("#resultado").innerHTML = result
}

function resetar() {
    document.querySelector(".input-min").value = "";
    document.querySelector(".input-max").value = "";
    document.querySelector("#resultado").innerHTML = "";
}