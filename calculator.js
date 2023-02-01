let string = " ";
let buttons = document.querySelectorAll('.btn');
let change = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            string = eval(string);
            console.log(string)
            document.querySelector('input').value = string;
            change = 1;
        }
        else if (e.target.value == "Del") {
            string = string.slice(0, string.length - 1);
            document.querySelector("input").value = string;
        } else if (e.target.value == "RESET") {
          string = "";
          console.log(string);
          document.querySelector("input").value = string;
        } else {
          if (change != 0) {
            document.querySelector("input").value = "";
            string = "";
            change = 0;
          }
          string = string + e.target.innerHTML.trim();
          document.querySelector("input").value = string;
        }
       
    })
})




