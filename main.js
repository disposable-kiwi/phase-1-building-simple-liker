// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").classList.add("hidden");
let hearts = document.getElementsByClassName("like-glyph");
for(let i =0; i<hearts.length; i++){
  hearts[i].addEventListener('click', (event)=>{
    // console.log(event.target.textContent);
    // debugger;
    if(event.target.textContent === EMPTY_HEART){
      mimicServerCall()
      .then(()=>{
        hearts[i].textContent = FULL_HEART;
        hearts[i].classList.remove("activated-heart");
      })
      .catch(()=>{
        document.getElementById("modal").classList.remove("hidden");
        setTimeout(()=>{document.getElementById("modal").classList.add("hidden");},3000);
      });
    }else if(event.target.textContent===FULL_HEART){
        hearts[i].textContent = EMPTY_HEART;
        hearts[i].classList.add("activated-heart");
    } 
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
