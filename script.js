const heroImage = document.getElementById(`heroimage`)
const left = document.getElementById(`left`)
const right = document.getElementById(`right`)
const heading = document.getElementById(`heading`)
const paragraph = document.getElementById(`paragraph`)
let index = 0

const mobileHeroImages = [
    `images/mobile-image-hero-1.jpg`,
    `images/mobile-image-hero-2.jpg`,
    `images/mobile-image-hero-3.jpg`
]
const desktopHeroImages = [
    {
        image: `images/desktop-image-hero-1.jpg`,
        heading: `Discover innovative ways to decorate`,
        paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        image: `images/desktop-image-hero-2.jpg`,
        heading: `We are available all across the globe`,
        paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        image: `images/desktop-image-hero-3.jpg`,
        heading: `Manufactured with the best materials`,
        paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    }
]

if(window.innerWidth <= 640) {
    heroImage.src = `images/mobile-image-hero-1.jpg`
}

const moveBackward = () => {
    index = (index - 1 + desktopHeroImages.length) % desktopHeroImages.length
    heroImage.src = desktopHeroImages[index].image
    heading.innerHTML = desktopHeroImages[index].heading
    paragraph.innerHTML = desktopHeroImages[index].paragraph
    if(window.innerWidth <= 640) {
        heroImage.src = mobileHeroImages[index]
    }
}
left.addEventListener(`click`, moveBackward)
left.addEventListener(`keypress`, moveBackward)

const moveForward = () => {
    index = (index + 1) % desktopHeroImages.length
    heroImage.src = desktopHeroImages[index].image
    heading.innerHTML = desktopHeroImages[index].heading
    paragraph.innerHTML = desktopHeroImages[index].paragraph
    if(window.innerWidth <= 640) {
        heroImage.src = mobileHeroImages[index]
    }
}
right.addEventListener(`click`, moveForward)
right.addEventListener(`keypress`, moveForward)

const toggleNavigation = () => {
    const navigation = document.getElementById(`navigation`)
    const menuicon = document.getElementById(`menuicon`)
    const closeicon = document.getElementById(`closeicon`)

    navigation.classList.toggle(`toggle`)
    closeicon.classList.toggle(`toggle`)
}
menuicon.addEventListener(`click`, toggleNavigation)
menuicon.addEventListener(`keypress`, toggleNavigation)
closeicon.addEventListener(`click`, toggleNavigation)
closeicon.addEventListener(`keypress`, toggleNavigation)