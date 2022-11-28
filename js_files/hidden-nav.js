// dropdown menu
var navigation = document.querySelector(".navigation-hidden");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("actives");
  navigation.classList.toggle("actives");
};
