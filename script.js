const button = document.getElementById("checker")
button.addEventListener("click", () => {

    const txtarea = document.getElementById("text");
    const count = document.getElementById("count");
    const txt = txtarea.value.toLowerCase();

    const vowels = 'aeiou';
    let vowelCount = 0;
    

    for (let i = 0; i < txt.length; i++) {
        
        if ( vowels.includes(txt[i])) {
            vowelCount++;
        }
    }
    count.textContent = ` Vowel Count : ${vowelCount}`;
})
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", () => {
    document.getElementById("text").value = "";
    document.getElementById("count").textContent = "Vowel Counter : 0"
})



