result_text = document.getElementById("result");
height = document.getElementById("height");
weight = document.getElementById("weight");

function calculate(){
    eel.bmi_calculator(height.value, weight.value)(result);
}
function result(result){
    result_text.innerHTML = result;
}