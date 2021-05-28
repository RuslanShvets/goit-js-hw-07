let input = document.getElementById("name-input");
let Output = document.getElementById("name-output");
input.oninput = function () {
    if (input.value.trim() === '') {                  
       Output.innerHTML = 'незнайомець';     
    } else{                                    
    Output.innerHTML = input.value.trim();          
    }

}
