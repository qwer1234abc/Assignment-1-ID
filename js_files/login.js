// classlist.toggle to toggle between the "active" class
function toggleForm() {
  userinput = document.querySelector(".userinput");
  card = document.querySelector(".formcontainer");
  card.classList.toggle("active");
  userinput.classList.toggle("active");
}
