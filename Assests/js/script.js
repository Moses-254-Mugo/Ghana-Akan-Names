
function checkAkanName(){
    var day = parseInt(document.getElementById('dob').value);
    var month = parseInt(document.getElementById('mob').value);
    var year = parseInt(document.getElementById('yob').value);
    var gender = document.getElementById('gender').value;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const male_Names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const female_Names = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


    
   
    // validate details
    if(day <= 0 || day > 31){

        alert("Invalid date!");

    } else if(month <= 0 || month > 12){

        alert("Invalid Month!");
    } else if(year < 1500 || year > 2021){

        alert("Invalid year!");

    }

    const a = Math.floor((14 - month / 12));
    const y = year - a;
    const m = month + 12 * a - 2;

    const d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    
    // validate empty inputs
    if(document.getElementById("dob").value.length == 0){
        alert("Day can not be null");
    }
    if(document.getElementById("mob").value.length == 0){
        alert("Month can not be null");
    }
    if(document.getElementById("yob").value.length == 0){
        alert("Incorrect format!!");
    }

    // Output results
    if(gender == "male"){
        
        document.getElementById("output").innerHTML = ("You were born on a " + days[d] + " Your Akan Name is " +  male_Names[d]);
    }
    else if(gender == "female"){

        document.getElementById("output").innerHTML = ("You were born on a "+ days[d] + " Your Akan Name is " + female_Names[d]);
    }

}