function displayWindowSize() {
		   
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        
        document.getElementById("result").innerHTML
            = "Width: " + w + ", " + "Height: " + h;
    }
    window.addEventListener("resize", displayWindowSize);
    
    displayWindowSize();