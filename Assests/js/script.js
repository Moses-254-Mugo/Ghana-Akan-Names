// 
const form = document.querySelector('.birthday__input')
const gender = document.querySelector('input[name="gender"]:checked').value
const dayControl = document.querySelector('#birthday__day')
const monthControl = document.querySelector('#birthday__month')

const year = parseInt(document.querySelector('#birthday__year').value)
const submitBtn = document.querySelector('#birthday__submit')

const birthdayOutput = document.querySelector('.birthday__output')
const akanName = document.querySelector('#birthday__name')

const day = parseInt(dayControl.value)
const month = parseInt(monthControl.value)

let _akanName
let err = ['all fields are required']

dayControl.addEventListener('change', () => {
    validate()
})

monthControl.addEventListener('change', () => {
    validate()
})


submitBtn.addEventListener('click', () => {
    console.log(validate());

    if (validate()) {
        console.log(`${gender} ${day} ${month} ${year}`);
        
        _akanName = getName()
        akanName.textContent = _akanName

        birthdayOutput.style.display = 'block'
    }
    else {
        alert(`Invalid: ${err}.`)

        if (err.indexOf('day') >= 0)
            dayControl.value = ''
            
        if (err.indexOf('month') >= 0)
            monthControl.value = ''

        err = []
    }
})

const validate = () => {
    if (day <= 0 || day > 31)
        err.push('day')

    if (month <= 0 || month > 12)
        err.push('month')

    if (err.length !== 1) {
        err.shift()

        return false
    }
    return true
}
