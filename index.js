function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('home').addEventListener('click', function(e) {
  e.preventDefault()
  document.getElementById('sub-header').style.display = "block";
  document.getElementById('about').style.display = "none";
  document.getElementById('Services').style.display = 'none'

})

document.getElementById('about-container').addEventListener('click', function(e){
  e.preventDefault()
  document.getElementById('sub-header').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('about').style.display = "block";

})
document.getElementById('services-container').addEventListener('click', function(e){
  e.preventDefault()

  document.getElementById('Services').style.display = 'block'
  document.getElementById('sub-header').style.display = "none";
  document.getElementById('about').style.display = "none";
})
document.getElementById('contact-me').addEventListener('click', function(e){
  e.preventDefault()

  document.getElementById('Services').style.display = 'none'
  document.getElementById('sub-header').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('contacts').style.display = "block";
})
