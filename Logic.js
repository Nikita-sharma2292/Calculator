var buttons = document.querySelectorAll(".button");
let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        if (e.target.value == 'AC') {
            string = "";
            document.querySelector(".text").value = string;
        }
        else if (e.target.value == 'DE') {
            string = document.querySelector(".text").value.toString();
            document.querySelector(".text").value = string.substring(0, string.length - 1);
        }
        else if (e.target.value == '=') {
            string = eval(string);
            document.querySelector(".text").value = string;
        }
        else {
            string = string + e.target.value;
            document.querySelector(".text").value = string;
        }
    })
})
