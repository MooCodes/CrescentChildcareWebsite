const homeDiv = document.querySelector("#home")
const learningDiv = document.querySelector("#program")
const aboutDiv = document.querySelector("#about")
const contactDiv = document.querySelector("#contact")

const homeLink = document.querySelector("#homeLink")
const learningLink = document.querySelector("#programLink")
const aboutLink = document.querySelector("#aboutLink")
const contactLink = document.querySelector("#contactLink")

homeLink.addEventListener("click", () => {
    homeDiv.style.display = 'block'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'none'
    homeLink.classList.add('active-link')
    learningLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
    contactLink.classList.remove('active-link')
})

learningLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'block'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'none'
    learningLink.classList.add('active-link')
    homeLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
    contactLink.classList.remove('active-link')
})

aboutLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'block'
    contactDiv.style.display = 'none'
    aboutLink.classList.add('active-link')
    homeLink.classList.remove('active-link')
    learningLink.classList.remove('active-link')
    contactLink.classList.remove('active-link')
})

contactLink.addEventListener("click", () => {
    homeDiv.style.display = 'none'
    learningDiv.style.display = 'none'
    aboutDiv.style.display = 'none'
    contactDiv.style.display = 'block'

    contactLink.classList.add('active-link')
    homeLink.classList.remove('active-link')
    aboutLink.classList.remove('active-link')
    learningLink.classList.remove('active-link')
})