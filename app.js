const climate=document.getElementById("climate")
const consumption=document.getElementById("consumption")
const resorces=document.getElementById("resources")
const people=document.getElementById("people")

const save = document.getElementById("save")
const iframe = document.getElementById("frame")

climate.onclick=()=>{
    climate.style.background = "#2F80ED"
    consumption.style.background = "transparent"
   resorces .style.background = "transparent"
   people.style.background = "transparent"

   document.body.style.backgroundImage =  "url(https://i1.faceprep.in/prograd-junior/climate-change-bg.png)"
   save.innerHTML = "Do your bit! Save trees, use renewable energy soureces and prefer to travel green"
   iframe.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"


}




consumption.onclick=()=>{
    consumption.style.background = "#4FAF61"
    climate.style.background = "transparent"
   resorces .style.background = "transparent"
   people.style.background = "transparent"

   document.body.style.backgroundImage =  "url(https://i1.faceprep.in/prograd-junior/food-wastage-bg.png)"
   save.innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the left overs."
   iframe.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
   

}






resorces.onclick=()=>{
    resorces.style.background = "#F2994A"
    climate.style.background = "transparent"
    consumption.style.background = "transparent"
   people.style.background = "transparent"

   document.body.style.backgroundImage =   "url(https://i1.faceprep.in/prograd-junior/natural-resources-bg.png)"
   save.innerHTML = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
   iframe.src ="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}