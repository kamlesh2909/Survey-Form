function submitForm() {
    // Perform validation here if needed

    // Gather input values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Display the values in a popup
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dateOfBirth}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobileNumber}`);

    // Reset the form
    document.getElementById('survey-form').reset();
  }

  function resetForm() {
    document.getElementById('survey-form').reset();
  } 