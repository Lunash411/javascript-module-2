// Part 1 - selecting the buttons


const selectBlueButton = document.querySelector('#blueBtn')
const selectOrangeButton = document.querySelector('#orangeBtn')
const selectGreenButton = document.querySelector('#greenBtn')
const jumbotron = document.querySelector('.jumbotron')
const donateBikeButton = document.querySelector('.buttons .btn-primary')
const volunteerButton = document.querySelector('.buttons .btn-primary')

//Adding an event listener to the blue button

selectBlueButton.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#588fbd'
    donateBikeButton.style.backgroundColor ='#ffa500'
    volunteerButton.style.backgroundColor ='black'
    volunteerButton.style.color ='white'

})


//Adding an event listener to the orange button

selectOrangeButton.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#f0ad4e'
    donateBikeButton.style.backgroundColor ='#5751fd'
    volunteerButton.style.backgroundColor ='#31b0d5'
    volunteerButton.style.color ='white'

})

//Adding an event listener to the green button

selectGreenButton.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#87ca8a'
    donateBikeButton.style.backgroundColor ='black'
    volunteerButton.style.backgroundColor ='#8c9c08'
})


/*-----------------Part 2------------*/

const selecForm = document.querySelector('form')
const selectSubmitButton = document.querySelector('form button')
const inputEmail = document.querySelector('#exampleInputEmail1')
const inputName = document.querySelector('#example-text-input')
const descriptionArea = document.querySelector('#exampleTextarea')

// Adding the event handler

function onSubmit(e) {
    {
        e.preventDefault()
        if (
            inputEmail.value.trim().lenght === 0 ||
            inputEmail.value.trim().includes('@') === false
        ) {
            inputEmail.style.backgroundColor = 'red'
        } else if (inputName.value.trim().lenght === 0) {
            inputName.style.backgroundColor = 'red'
        } else if (descriptionArea.value.trim().lenght === 0) {
            descriptionArea.style.backgroundColor = 'red'
        } else {
            alert('Thank you for filling out the form')
            inputEmail.value = ''
            inputName.value = ''
            descriptionArea.value = ''

        }
    }
    
}


selectSubmitButton.addEventListener('click', onSubmit)