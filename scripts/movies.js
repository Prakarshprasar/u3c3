// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
  let amount=JSON.parse(localStorage.getItem("amount"))
  document.getElementById("wallet").innerText=amount
    function getMovies(){
      let query=document.getElementById("search").value;
      let url=`https://www.omdbapi.com/?apikey=6258c36d&s=${query}`;

      fetch(url)
      .then(function(res){
        return res.json()
      })
      .then(function(res){
        
        append(res.Search)
      })

      
    }
    function append(data){

      // console.log(data)
      let maindiv=document.getElementById("movies")
      maindiv.innerHTML=null;
      data.forEach(function(el){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.Poster;
        let title=document.createElement("h3");
        title.innerText=el.Title;
        let btn=document.createElement("button");
        btn.innerText="Book Now"
        btn.setAttribute("class","book_now")
        btn.onclick=()=>{
          store(el)
        }

        div.append(img,title,btn)
        maindiv.append(div)

        
      })

    }
    function store(el){
      localStorage.setItem("movie",JSON.stringify(el))
      window.location.href="checkout.html"
    }
    function debounce(func,delay){
      if(id){
        clearTimeout(id)
      }
      id=setTimeout(function(){
        func()
      },delay)
    }
