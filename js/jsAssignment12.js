
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const word = document.getElementById("wordInput").value.trim();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => showResults(data))
        .catch(() => {
            document.getElementById("result").innerHTML = "<p class='text-red-500'>Word not found, please try again.</p>";
        });
});

function showResults(data) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    if (data && data.length) {
        const { word, phonetic = "Not available", phonetics, meanings, origin } = data[0];

        resultContainer.appendChild(createElement("h2", `Word: ${word}`, ["text-2xl", "font-semibold", "text-gray-800"]));
        resultContainer.appendChild(createElement("p", `Transcription: ${phonetic}`, ["text-gray-600", "italic"]));
        resultContainer.appendChild(createElement("p", `Origin: ${origin}`, ["text-gray-500", "italic"]));


        meanings.forEach(meaning => {
            const partOfSpeech = capitalize(meaning.partOfSpeech);
            resultContainer.appendChild(createElement("div", `${partOfSpeech}:`, ["mt-4", "font-semibold", "text-gray-700"]));

            meaning.definitions.forEach(def => {
                const defElement = createElement("p", `- ${def.definition}`, ["ml-6", "text-gray-700"]);
                if (def.example) defElement.appendChild(createElement("i", ` (Example: "${def.example}")`, ["text-gray-500"]));
                resultContainer.appendChild(defElement);
            });
        });
    } else {
        resultContainer.innerHTML = "<p class='text-red-500'>Word not found, please try again.</p>";
    }
}

function createElement(tag, text, classes = []) {
    const el = document.createElement(tag);
    el.textContent = text;
    classes.forEach(cls => el.classList.add(cls));
    return el;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
