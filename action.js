const grade = document.querySelector(".grade")

const ratingScreen = document.querySelector("#ratings")

const thankScreen = document.querySelector("#thanks")


function selectNumber(clickElement){
  const rating = document.getElementsByClassName("number")

  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("selected")
  }

  clickElement.classList.add("selected")
  console.log(grade)

  grade.textContent=clickElement.textContent;
  console.log(clickElement)

}

function submitRating(){
    // hide rating screen
  ratingScreen.classList.add("hide")
    //show thank you screen
  thankScreen.classList.add("show")
}



  // rating.forEach(element => element.classList.remove("selected"))
  //alternative to for loop