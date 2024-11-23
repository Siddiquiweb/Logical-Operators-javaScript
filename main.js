function checkAge() {
  var age = document.getElementById("ageInput").value;
  var resultBox = document.getElementById("result");

  // AND operator: Both conditions must be true
  if (age >= 30 && age <= 50) {
    resultBox.textContent = "You are young!";
    resultBox.style.color = "green";
  } 
  // OR operator: At least one condition must be true
  else if (age == 5 || age == 600) {
    resultBox.textContent = "This is true for special age!";
    resultBox.style.color = "blue";
  } 
  // New condition for ages below 30
  else if (age < 30 && age > 0) {
    resultBox.textContent = "You are very young!";
    resultBox.style.color = "orange";
  } 
  // Condition for invalid or extreme inputs
  else {
    resultBox.textContent = "Age or very old.";
    resultBox.style.color = "red";
  }
}