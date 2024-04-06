const form = document.querySelector(".inputForm");


function handleFormSubmit(e) {
    e.preventDefault();
    const prompt = e.srcElement[0].value;
    const quantity = e.srcElement[1].value;

    console.log(prompt, quantity);
}

form.addEventListener("submit", handleFormSubmit);