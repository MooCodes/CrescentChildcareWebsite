const homeDiv = document.querySelector("#home")
const learningDiv = document.querySelector("#learning")
const aboutDiv = document.querySelector("#about")
const contactDiv = document.querySelector("#contact")

const homeLink = document.querySelector("#homeLink")
const learningLink = document.querySelector("#learningLink")
const aboutLink = document.querySelector("#aboutLink")
const contactLink = document.querySelector("#contactLink")

homeLink.addEventListener("click", () => {
    homeDiv.style.display = 'block'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'none'
})

learningLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'block'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'none'
})

aboutLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'block'
    contactDiv.style.display = 'none'
})

contactLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'block'
})