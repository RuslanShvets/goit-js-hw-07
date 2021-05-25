const input = document.getElementById("name-input");
const Output = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {                  
       Output.innerHTML = 'незнайомець';     
    } else{                                    
    Output.innerHTML = input.value;          
    }
}