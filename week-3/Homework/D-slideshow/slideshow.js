// Write your code here
// Write your code here


const img1 ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.vandal.net%2Fi%2F640x360%2F2-2022%2F20222221932696_1.jpg&imgrefurl=https%3A%2F%2Fvandal.elespanol.com%2Fanalisis%2Fxsx%2Felden-ring%2F102077&tbnid=bXA_XAVl1TWDfM&vet=12ahUKEwihvIya4YX4AhXBgHMKHZ9rAYoQMygVegUIARDoAQ..i&docid=69ZSy4xTFFEgHM&w=640&h=360&q=elden%20ring&ved=2ahUKEwihvIya4YX4AhXBgHMKHZ9rAYoQMygVegUIARDoAQ'
const img2 ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fgmedia.playstation.com%2Fis%2Fimage%2FSIEPDC%2Fgod-of-war-hub-hero-banner-featured-01-en-09jul21%3F%24native--t%24&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fes-es%2Fgod-of-war%2F&tbnid=bjk4Etr2JXWoqM&vet=12ahUKEwiNzMrv4YX4AhUPghoKHZb0AdgQMygBegUIARDbAQ..i&docid=vq1mhiUW7b8RgM&w=2819&h=2082&q=god%20of%20war&ved=2ahUKEwiNzMrv4YX4AhUPghoKHZb0AdgQMygBegUIARDbAQ'
const img3 ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fimg%2Frnd%2F202009%2F2923%2FLyLrdlIfqiVzvynWJGtNfbU8.png&imgrefurl=https%3A%2F%2Fstore.playstation.com%2Fes-es%2Fproduct%2FEP9000-CUSA10212_00-HRZCE00000000000&tbnid=NvfxLLmbCfV2tM&vet=12ahUKEwii9MaO4oX4AhUFBRoKHbTPATMQMygBegUIARDfAQ..i&docid=BvzqmtEwIysffM&w=3840&h=2160&q=horizon%20zero%20dawn&ved=2ahUKEwii9MaO4oX4AhUFBRoKHbTPATMQMygBegUIARDfAQ'
const img4 ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fimg%2Frnd%2F202010%2F2723%2FknxU5uU5aKvQChKX5OvWtSGC.png&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fen-us%2Fgames%2Fsekiro-shadows-die-twice%2F&tbnid=oY8uNWqEnx97IM&vet=12ahUKEwji0pjI4oX4AhVBw4UKHdXtCwMQMygBegUIARDYAQ..i&docid=_WoJS0A-xl1zQM&w=1024&h=1024&q=sekiro&ved=2ahUKEwji0pjI4oX4AhVBw4UKHdXtCwMQMygBegUIARDYAQ'
const img5 ='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstaticctf.akamaized.net%2FJ3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn%2F4kvUGP06XxwIDPMDgrganQ%2Fd022a2a43a52926fc81f9c8784d24f1b%2Fmedia0.jpg&imgrefurl=https%3A%2F%2Fwww.ubisoft.com%2Fes-mx%2Fgame%2Fprince-of-persia%2Fsands-of-time-remake&tbnid=kRxNANkJc_t37M&vet=12ahUKEwixxbb24oX4AhVGrhoKHc36D6wQMygBegUIARDeAQ..i&docid=N6sHnMndg9d7PM&w=960&h=540&q=prince%20of%20persia&ved=2ahUKEwixxbb24oX4AhVGrhoKHc36D6wQMygBegUIARDeAQ'


const gamesImages = [img1, img2, img3, img4, img5]
console.log(gamesImages);

const autoPreviousButton = document.querySelector('#auto-back-btn')
const backButton = document.querySelector('#back-btn')
const stopButton = document.querySelector('#stop-btn')
const nextButton = document.querySelector('#foward-btn')
const automaticButton = document.querySelector('#auto-foward-btn')
const selectImage = document.querySelector('#random-images')
const showNumber = document.querySelector('#show-number')

let index = 0
let intervalVar
let delayedInterval = 2000

// adding click event to the buttons

autoPreviousButton.addEventListener('click', autoBackEvent)
backButton.addEventListener('click', backEvent)
stopButton.addEventListener('click', stopEvent)
nextButton.addEventListener('click', fowardEvent)
automaticButton.addEventListener('click', autofowardEvent)

function showImage() {
    selectImage.src = gamesImages[index]
    showNumber.textContent = index

}

function backEvent() {
    index = index == 0 ? gamesImages.length - 1 : index -1
    showImage()
    
}

function fowardEvent() {
    index = index ==  gamesImages.length - 1 ? 0 : index +1
    showImage ()
    
}
function autoBackEvent() {
    resetInt(backEvent)
}

function autofowardEvent() {
    resetInt(fowardEvent)
}

function stopEvent() {
    resetInt()
}

function resetInt(fnc) {
    if (intervalVar) clearInterval(intervalVar)
    if (typeof fnc === 'function') {
        intervalVar = setInterval(fnc, delayedInterval)
    }
}
showImage ()