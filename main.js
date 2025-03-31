var inp = document.getElementById('inputt');
var out = document.getElementById('outputt');
var select = document.getElementById('languageSelect');
var submit = document.getElementById('cli');
var loader = document.getElementById('loader');

async function translateText() {
    const text = inp.value.trim();
    const targetLang = select.value;

    if (text === "") {
        out.textContent = "Please enter text to translate!";
        return;
    }


    loader.style.display = "block";
    out.textContent = "";

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();


        loader.style.display = "none";
        out.textContent = data[0][0][0];

    } catch (error) {
        loader.style.display = "none";
        out.value = "Error in translation!";
        console.error("Translation Error:", error);
    }
}

submit.addEventListener('click', translateText);
