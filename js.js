const emojis = ["🎮", "💻", "🎧", "⚽"]
const emojisContainer = document.getElementById("emojis-container")
const emojisInput = document.getElementById("emojis-input")
const addEnd = document.getElementById("add-end-btn")
const addStrat = document.getElementById("add-beginning-btn")
const removeEnd = document.getElementById("remove-end-btn")
const removeStrat = document.getElementById("remove-beginning-btn")




function renderEmojis() {
    emojisContainer.innerHTML = ""
    for (let i = 0; i < emojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojis[i]
        emojisContainer.append(emoji)
    }
}

renderEmojis()

addEnd.addEventListener("click", function () {
    if (emojisInput.value) {
        emojis.push(emojisInput.value)
        emojisInput.value = ""
        renderEmojis()
    }

})

addStrat.addEventListener("click", function () {
    if (emojisInput.value) {
        emojis.unshift(emojisInput.value)
        emojisInput.value = ""
        renderEmojis()
    }
})

removeEnd.addEventListener("click", function () {
    emojis.pop()
    renderEmojis()
})

removeStrat.addEventListener("click", function () {
    emojis.shift()
    renderEmojis()
})

