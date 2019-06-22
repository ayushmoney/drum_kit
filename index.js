
for(var i=0;i<7;i++)
{
	document.querySelectorAll("button")[i].addEventListener("click",cli);
}
function cli(){

	var pressed= this.innerHTML;
	switch(pressed)
	{
		case "w":{document.querySelectorAll("button")[0].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[0].classList.remove("shadow");},100); 
			var ar=new Audio("sounds/snare.mp3");
					ar.play();
					
					alert("j");
					break;

		}
		case "a": var ar=new Audio("sounds/kick-bass.mp3");
					ar.play();
					document.querySelectorAll("button")[1].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[1].classList.remove("shadow");},100);
					break;
		case "s": var ar=new Audio("sounds/crash.mp3");
					ar.play();
					document.querySelectorAll("button")[2].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[2].classList.remove("shadow");},100);
					break;
		case "d": var ar=new Audio("sounds/tom-1.mp3");
					ar.play();
					document.querySelectorAll("button")[3].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[3].classList.remove("shadow");},100);
					break;
		case "j": var ar=new Audio("sounds/tom-2.mp3");
					ar.play();
					document.querySelectorAll("button")[4].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[4].classList.remove("shadow");},100);
					break;
		case "k": var ar=new Audio("sounds/tom-3.mp3");
					ar.play();
					document.querySelectorAll("button")[5].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[5].classList.remove("shadow");},100);
					break;
		case "l": var ar=new Audio("sounds/tom-4.mp3");
					ar.play();
					document.querySelectorAll("button")[6].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[6].classList.remove("shadow");},100);
					break;
		default:alert("ERROR");
				break;
	}
}
document.addEventListener("keydown",function(m){

	var pressed= m.key;
	switch(pressed)
	{
		case "w": var ar=new Audio("sounds/snare.mp3");
					ar.play();
					document.querySelectorAll("button")[0].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[0].classList.remove("shadow");},100);
					break;
		case "a": var ar=new Audio("sounds/kick-bass.mp3");
					ar.play();
					document.querySelectorAll("button")[1].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[1].classList.remove("shadow");},100);
					break;
		case "s": var ar=new Audio("sounds/crash.mp3");
					ar.play();
					document.querySelectorAll("button")[2].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[2].classList.remove("shadow");},100);
					break;
		case "d": var ar=new Audio("sounds/tom-1.mp3");
					ar.play();
					document.querySelectorAll("button")[3].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[3].classList.remove("shadow");},100);
					break;
		case "j": var ar=new Audio("sounds/tom-2.mp3");
					ar.play();
					document.querySelectorAll("button")[4].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[4].classList.remove("shadow");},100);
					break;
		case "k": var ar=new Audio("sounds/tom-3.mp3");
					ar.play();
					document.querySelectorAll("button")[5].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[5].classList.remove("shadow");},100);
					break;
		case "l": var ar=new Audio("sounds/tom-4.mp3");
					ar.play();
					document.querySelectorAll("button")[6].classList.add("shadow");
					setTimeout(function(){document.querySelectorAll("button")[6].classList.remove("shadow");},100);
					break;
		default:alert("ERROR");
				break;
	}
})