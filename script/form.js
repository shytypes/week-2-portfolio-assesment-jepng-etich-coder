//get the form element
let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
  event.preventDefault() // Prevent the form from submitting the default way

  //get the input elements
  let firstNameInput = document.getElementById('firstName')
  let secondNameInput = document.getElementById('secondName')
  let emailInput = document.getElementById('email')
  let messageInput = document.getElementById('message')
  let output = document.getElementById('output')

  //access the values typed in by the user
  const firstName = firstNameInput.value
  const secondName = secondNameInput.value
  const email = emailInput.value
  const message = messageInput.value

  //   console.log(firstName, secondName, email, message)

  //now lets display the values in the output
  output.innerHTML = `
    <p style="color:green">Message sent!</p>
    <ul>
      <li> First Name: ${firstName}</li>
      <li>Second Name: ${secondName}</li>
      <li>Email: ${email}</li>
      <li>Message: ${message}</li>
    </ul>
  `
})
