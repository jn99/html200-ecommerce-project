function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var theName = document.custEmail.email.value
  document.custEmail.email.value=""
  
  console.log("Thanks for signing up for our mailing list, "+theName+"!")
  alert("Thanks for signing up for our mailing list, "+theName+"!")
}

/*Add or Remove item from Cart function*/
var cart = []
var item = ['Reversible Plaid', 'Fringed Plaid', 'Multi Color', 'Northern Lights', 'Ombre Infinity', 'Ashby Twill', 'Wool Cable Knit', 'Etro Paisley-Print Silk']

function cartUpdate(x){
  event.preventDefault()
  
  var i = cart.indexOf(item[x])
  // this item is in the cart?
  if (i == -1){
    // NO, add to cart
    cart.push(item[x])
    console.log("Added: " + item[x])    
  } else {
    // YES, remove from cart
    cart.splice(i, 1);
    console.log("Removed: " + item[x])
  }
  console.log('Item in cart = ' + cart.length);
}