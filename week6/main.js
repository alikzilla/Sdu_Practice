const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

submit.addEventListener("click", () => {
    const name = input.value;

    if (name.length != 0) {
        output.textContent = "Welcome to the site, " + name;
    } else {
        alert("Write yout name!")
    }
    input.value = "";
});
