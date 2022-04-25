// Store the wallet amount to your local storage with key "amount"
let cart_money=JSON.parse(localStorage.getItem("amount"))||100
  localStorage.setItem("amount",JSON.stringify(cart_money))
  document.getElementById("wallet").innerText=cart_money
  document.getElementById("add_to_wallet").addEventListener("click",myFunction)

  function myFunction(){
    let inp=document.getElementById("amount").value;
    cart_money=Number(cart_money)+(+inp);
    document.getElementById("wallet").innerText=cart_money

    localStorage.setItem("amount",JSON.stringify(cart_money))

    
  }

  document.getElementById("book_movies").addEventListener("click",goToMovies)

  function goToMovies(){
    window.location.href="movies.html"
  }

