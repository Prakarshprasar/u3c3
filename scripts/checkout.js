// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount=JSON.parse(localStorage.getItem("amount"))
  document.getElementById("wallet").innerText=amount
  let movie=JSON.parse(localStorage.getItem("movie"))

  let btn=document.getElementById("confirm")
  btn.addEventListener("click",bookTicket)
  function bookTicket(){
      let inp=document.getElementById("user_name").value
    let m=document.getElementById("number_of_seats").value;
    let updatedAmount=+amount-(+m*100)
    if(updatedAmount>0&&m>=1&&inp!=null){
      localStorage.setItem("amount",JSON.stringify(updatedAmount))
      alert("Booking Successful!")
      window.location.href="checkout.html"
    }else{
        if(m>=1&&inp!=null){
            alert("Insufficient Balance !")
        }else{
            alert("Invalid Credentials")
        }

      
    }
  }
  let main=document.getElementById("movie")

  let img=document.createElement("img");
  img.src=movie.Poster
  let title=document.createElement("h3");
  title.innerText=movie.Title;

  main.append(img,title)
