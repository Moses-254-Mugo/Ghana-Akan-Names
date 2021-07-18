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

const getDay = (day, month, year) => {
    let d                               // Day of the week
    let dd = day                        // Day of the month
    let mm = month                      // Month
    let yy = year % 100                 // Year (89)
    let cc = (year / 100).toFixed(0)    // Century  (19)

    d = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7

    // console.log(d.toFixed(0));
    return d.toFixed(0)
}

const getName = () => {
    console.log(getDay(day, month, year));

    let _name
    let d = getDay(day, month, year);

    if (gender === 'male') {
        switch (d * 1) {
            case 0:
                _name = 'Kwasi'
                break;
            case 1:
                _name = 'Kwadwo'
                break;
            case 2:
                _name = 'Kwabena'
                break;
            case 3:
                _name = 'Kwaku'
                break;
            case 4:
                _name = 'Yaw'
                break;
            case 5:
                _name = 'Kofi'
                break;
            case 6:
                _name = 'Kwame'
                break;
            default:
                break;
        }
    }
    else {
        switch (d * 1) {
            case 0:
                _name = 'Akousa'
                break;
            case 1:
                _name = 'Adwoa'
                break;
            case 2:
                _name = 'Abenaa'
                break;
            case 3:
                _name = 'Akua'
                break;
            case 4:
                _name = 'Yaa'
                break;
            case 5:
                _name = 'Afua'
                break;
            case 6:
                _name = 'Ama'
                break;
            default:
                break;
        }
    }
    return _name
}