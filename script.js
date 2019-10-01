
document.addEventListener("DOMContentLoaded",

	function (event){
		function sayHello(event){
		console.log(event);
		this.textContent = "TAI";
		
		
	}

	document.querySelector("button").addEventListener("click",sayHello);
	document.querySelector("body").addEventListener("mousemove",
		function(event){
			if (event.shiftKety===true){
			console.log("x= "+event.clientX);
			console.log("y= "+event.clientY);
			}
		}

		);
	}
);

