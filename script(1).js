function openPopup() {
    document.getElementById('time').innerHTML =Date();
}

function textHideAndSeek() {
  
  if (document.getElementById('farfromhome').style.display == "block") {
      document.getElementById('farfromhome').style.display = "none";
  } else { 
      document.getElementById('farfromhome').style.display = "block";
  } 
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
