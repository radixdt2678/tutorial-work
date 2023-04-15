var btn = document.querySelector(".button");

btn.addEventListener("mouseover", function() {
  this.textContent = "ON";
  this.style.backgroundColor = "red"
  this.style.color = "white"
 
})
btn.addEventListener("mouseout", function() {
  this.textContent = "OFF";
  this.style.backgroundColor = "blue"
})
