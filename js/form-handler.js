function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var theName = document.custEmail.email.value
  document.custEmail.email.value=""
  
  console.log("Thanks for signing up for our mailing list, "+theName+"!")
  alert("Thanks for signing up for our mailing list, "+theName+"!")
}