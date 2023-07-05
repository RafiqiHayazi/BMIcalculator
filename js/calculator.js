
    function calcBMI() {
      var weightInput = document.getElementById("weight");
      var heightInput = document.getElementById("height");
      var resultDiv = document.getElementById("result");
      var nameInput = document.getElementById("name");
      var ageInput = document.getElementById("age");
      var activitylevelInput = document.getElementById("activitylevel");
      var goalInput = document.getElementById("goal");
      var bloodInput = document.getElementById("blood");
      var tweightInput = document.getElementById("tweight");
     

      
      var weight = parseFloat(weightInput.value);
      var height = parseFloat(heightInput.value) / 100; // convert cm to meters
      var name = nameInput.value;
      var age = parseFloat(ageInput.value);
      var activitylevel = activitylevelInput.value;
      var goal = goalInput.value;
      var blood = parseFloat(bloodInput.value);
      var tweight = parseFloat(tweightInput.value);
      
      if (isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(blood) || isNaN(tweight)) {
        alert("Please enter valid values for weight and height.");
        return;
      }
      
      var bmi = weight / (height * height);
      bmi = bmi.toFixed(2); // round to 2 decimal places
      
      resultDiv.innerHTML = "Your name is " + name + " and your age is "+ age + ". " + "You "+ activitylevel + " and your target weight is "+ tweight +  "kg. " + "Your goal is to have "+ goal + " in the future. " + "Your blood pressure read is "+ blood +  " mmHg. "   +   " Your BMI is "+ bmi ;
    }

