const form = document.querySelector(".inputForm");
const cardGrid = document.querySelector(".cardGrid");


async function generateImage(prompt, quantity) {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                n: parseInt(quantity),
                size: "512x512",
                response_format: "b64_json"
            })
        });

        const { data } = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}



function handleFormSubmit(e) {
    e.preventDefault();
    const prompt = e.srcElement[0].value;
    const quantity = e.srcElement[1].value;

    const cardMockup = Array.from({ length: quantity }, () => {
        return ` <div style="display:flex;justify-content:center; align-items:center;background:#fff" class="card">
           <div>
            <img  src="./assets/Growing_ring.gif" alt="" />
           </div>
        </div>
        `
    }).join("");

    cardGrid.innerHTML = cardMockup;
    generateImage(prompt, quantity);
}

form.addEventListener("submit", handleFormSubmit);