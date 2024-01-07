document.getElementById('calculate').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const bmi = weight / (height * height);
  
    let result = '';
    if (isNaN(bmi)) {
      result = 'Please enter valid values for weight and height.';
    } else {
      result = `Your BMI is ${bmi.toFixed(1)}. You are `;
      if (bmi < 18.5) {
        result += 'underweight.';
      } else if (bmi >= 18.5 && bmi < 25) {
        result += 'normal weight.';
      } else {
        result += 'overweight.';
      }
    }
  
    document.getElementById('result').textContent = result;
  });
  