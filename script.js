//VARIABLES

let weight = parseInt (prompt('Enter your weight (kg)'));
let height = parseFloat (prompt('Enter your height (m)'));
let gender = prompt('Enter your gender as M or F');
let bmiCategory;


//BMI CALCULATIONS

let bmi = weight / height ** 2;

if (bmi < 18.5 ) {
    bmiCategory = 'Underweight'
} else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = 'Healthy'
} else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Overweight'
} else {
    bmiCategory = 'Obese'
}


//OUTPUT

console.log(`Your BMI is: ${bmi} which is ${bmiCategory}`);