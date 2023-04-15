function displayWindowSize() {
		
        // Get width and height of the window
        
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
    
        // Display result inside a div element
        document.getElementById("result").innerHTML
            = "Width: " + w + ", " + "Height: " + h;
    }
    window.addEventListener("resize", displayWindowSize);
    
    // Calling the function for the first time
displayWindowSize();

