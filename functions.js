let day = document.querySelector('#day-input')
let day_title = document.querySelector('#day-title')
let month = document.querySelector('#month-input')
let month_title = document.querySelector('#month-title')
let year = document.querySelector('#year-input')
let year_title = document.querySelector('#year-title')
let entered_years = document.querySelector('#entered-years')
let entered_months = document.querySelector('#entered-months')
let entered_days = document.querySelector('#entered-days')

let error_nav = document.querySelector('#error_nav')
error_nav.style.visibility = 'hidden'

let btn = document.querySelector('#btn')

let date = new Date()

//check errors
function check(){
    if(day.value === '' || /[a-zA-Z]/.test(day.value) || (day.value > 31 || day.value == 0)){
        day.style.borderColor = 'red'
        day_title.style.color = 'red'
        error_nav.style.visibility = 'visible'
        } else if(month.value === '' || /[a-zA-Z]/.test(month.value) || (month.value > 12 || month.value == 0)){
            month.style.borderColor = 'red'
            month_title.style.color = 'red'
            error_nav.style.visibility = 'visible'
        } else if(year.value === '' || /[a-zA-Z]/.test(year.value) || year.value > date.getFullYear()){
        year.style.borderColor = 'red'
        year_title.style.color = 'red'
        error_nav.style.visibility = 'visible'
        } else if((day.value > 30 && (month.value.match(/(4|6|9|11)/))) || (day.value > 28 && month.value == 2)){
            month.style.borderColor = 'red'
            month_title.style.color = 'red'
            day.style.borderColor = 'red'
            day_title.style.color = 'red'
            error_nav.style.visibility = 'visible'
            error_nav.innerHTML = 'date is invalid'
        } 
}
//fire errors and/or calculate age 
btn.addEventListener('click', ()=>{
        if(day.value === '' || month.value === '' || year.value === ''){
            check()
        } else {
            //calculate age and display on UI
        entered_days.innerHTML= (date.getDay() - day.value + 30)
        entered_months.innerHTML = (date.getMonth() - month.value + 12)
        entered_years.innerHTML = (date.getFullYear() - year.value )
        }
})
//change colors when writting something
day.addEventListener('change', ()=>{
    day_title.style.color = '#696969'
    day.style.borderColor = 'grey'
    error_nav.style.visibility = 'hidden'
})
month.addEventListener('change', ()=>{
    month_title.style.color = '#696969'
    month.style.borderColor = 'grey'
    error_nav.style.visibility = 'hidden'
})
year.addEventListener('change', ()=>{
    year_title.style.color = '#696969'
    year.style.borderColor = 'grey'
    error_nav.style.visibility = 'hidden'
})
