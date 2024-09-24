let input = document.getElementById("input")
let clear = document.getElementById("clear")
let result = document.getElementById("result")
let del = document.getElementById("del")
let inputs = document.querySelectorAll(".operator");

clear.addEventListener("click", () => {
    input.value = "";
})


result.addEventListener("click", () => {
     if (input.value.length == 0) {
       input.value = "Only numbers are allowed";
     }
      input.value = eval(input.value);
 })

del.addEventListener("click", () => {
   input.value= input.value.slice(0,-1)
})

// Invalid
inputs[2].addEventListener("click", () => {
  if (input.value.length == 1 && input.value == "." ) {
    input.value = "Only numbers are allowed";
  }
})
inputs[3].addEventListener("click", () => {
  if (input.value.length == 1 && input.value=='/') {
    input.value = "Only numbers are allowed";
  }
});
inputs[4].addEventListener("click", () => {
  if (input.value.length == 1 && input.value == "*") {
    input.value = "Only numbers are allowed";
  }
});
inputs[5].addEventListener("click", () => {
  if (input.value.length == 1 && input.value == "-") {
    input.value = "Only numbers are allowed";
  }
});
inputs[6].addEventListener("click", () => {
  if (input.value.length == 1 && input.value == "+") {
    input.value = "Only numbers are allowed";
  }
});
inputs[8].addEventListener("click", () => {
  if (input.value.length == 1 && input.value == "%") {
    input.value = "Only numbers are allowed";
  }
});