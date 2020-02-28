    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar").css("background-color", "rgba(0, 0, 0, 0.5)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });

// img-skills-1
function myOverFunction1() {
  document.getElementsByClassName("img-skills")[0].src="img/languages-2.svg";
  document.querySelector("#skills > div > div > div:nth-child(1) > ul").style.display = "block";
}

function myOutFunction1() {
	document.getElementsByClassName("img-skills")[0].src="img/languages.svg";
	document.querySelector("#skills > div > div > div:nth-child(1) > ul").removeAttribute("style")
}

// img-skills-2
function myOverFunction2() {
  document.getElementsByClassName("img-skills")[1].src="img/motivation-2.svg";
  document.querySelector("#skills > div > div > div:nth-child(2) > ul").style.display = "block";
}

function myOutFunction2() {
	document.getElementsByClassName("img-skills")[1].src="img/motivation.svg"
	document.querySelector("#skills > div > div > div:nth-child(2) > ul").removeAttribute("style")
}

// img-skills-3
function myOverFunction3() {
  document.getElementsByClassName("img-skills")[2].src="img/web-2.svg";
  document.querySelector("#skills > div > div > div:nth-child(3) > ul").style.display = "block";
}

function myOutFunction3() {
	document.getElementsByClassName("img-skills")[2].src="img/web.svg"
	document.querySelector("#skills > div > div > div:nth-child(3) > ul").removeAttribute("style")
}

// img-skills-4
function myOverFunction4() {
  document.getElementsByClassName("img-skills")[3].src="img/software-2.svg";
  document.querySelector("#skills > div > div > div:nth-child(4) > ul").style.display = "block";
}

function myOutFunction4() {
	document.getElementsByClassName("img-skills")[3].src="img/software.svg"
	document.querySelector("#skills > div > div > div:nth-child(4) > ul").removeAttribute("style")
}