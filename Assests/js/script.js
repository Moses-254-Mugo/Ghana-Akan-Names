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