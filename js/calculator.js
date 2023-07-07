
function calcBMI() {
  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");
  var genderInput = document.getElementById("gender");
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var lifestyleInput = document.getElementById("lifestyle");
  var weightUnitInput = document.getElementById("weightUnit");
  var resultDiv = document.getElementById("result");

  var name = nameInput.value;
  var age = parseInt(ageInput.value);
  var gender = genderInput.value;
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value) / 100; // convert cm to meters
  var lifestyle = lifestyleInput.value;
  var weightUnit = weightUnitInput.value;

  if (name === "" || ageInput.value === "" || gender === "" || weightInput.value === "" || heightInput.value === "" || lifestyle === "") {
    alert("Please fill in all the input fields.");
    return;
  }

  if (!/^[a-zA-Z]+$/.test(name)) {
    alert("Please enter a valid name using only alphabetic characters.");
    return;
  }

  if (isNaN(age) || age <= 0 || age > 100) {
    alert("Please enter a valid age between 1 and 100.");
    return;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight.");
    return;
  }

  if (isNaN(height) || height <= 0) {
    alert("Please enter a valid height.");
    return;
  }

  if (weightUnit === "lbs") {
    // Convert weight from pounds to kilograms
    weight = weight / 2.205;
  }

  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // round to 2 decimal places

  var bmiRange = "";
  var interpretation = "";

  if (bmi < 18.5) {
    bmiRange = "Underweight";
    interpretation = "You are underweight. <a href='https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/healthy-ways-to-gain-weight/'>Click here</a> for information on managing your weight.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiRange = "Normal weight";
    interpretation = "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiRange = "Overweight";
    interpretation = "You are overweight.";
  } else {
    bmiRange = "Obese";
    interpretation = "You are obese. <a href='https://www.nhlbi.nih.gov/health/educational/lose_wt/eat/calories.htm'>Click here</a> for information on managing your weight.";
  }

  var idealWeight = 0;
  if (gender === "Male") {
    idealWeight = 22 * (height * height);
  } else if (gender === "Female") {
    idealWeight = 21 * (height * height);
  }
  idealWeight = idealWeight.toFixed(2);

  var targetedWeight = 0;
  if (bmiRange === "Underweight" || bmiRange === "Normal weight") {
    targetedWeight = idealWeight - weight;
  } else if (bmiRange === "Overweight" || bmiRange === "Obese") {
    targetedWeight = weight - idealWeight;
  }
  targetedWeight = targetedWeight.toFixed(2);

  resultDiv.innerHTML = "Name: " + name + "<br> Age: " + age + "<br> Gender: " + gender + "<br> Lifestyle: " + lifestyle + "<br><br> Your BMI is " + bmi + "<br> BMI Range: " + bmiRange + "<br> Interpretation: " + interpretation + "<br><br> Ideal Weight: " + idealWeight + " kg" + "<br> Targeted Weight: " + targetedWeight + " kg";
}

function switchWeightUnit() {
  var weightUnitInput = document.getElementById("weightUnit");
  var weightUnitLabel = document.getElementById("weightUnitLabel");
  var weightLabel = document.getElementById("weightLabel");

  if (weightUnitInput.value === "kg") {
    weightUnitLabel.innerHTML = "Weight Unit: kg";
    weightLabel.innerHTML = "Weight (kg):";
  } else {
    weightUnitLabel.innerHTML = "Weight Unit: lbs";
    weightLabel.innerHTML = "Weight (lbs):";
  }
}

