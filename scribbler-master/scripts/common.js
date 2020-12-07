var modal = document.getElementById('signup'); 
var modal2 = document.getElementById('signin'); 

window.onclick = function(event) { 
    if (event.target == modal) { 
        modal.style.display = "none"; 
    } 
 } 

window.onclick = function(event) { 
    if (event.target == modal2) { 
        modal2.style.display = "none"; 
    } 
 } 
