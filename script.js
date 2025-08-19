
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener("input", function(){
    let c = this.value;
    let formula = (c * 9/5) + 32;
    if(!Number.isInteger(formula)){
        formula = formula.toFixed(4);
    }
    fah.value = formula;
});

fah.addEventListener("input", function(){
    let f = this.value;
    let formula = (f - 32) * 5/9;
     if(!Number.isInteger(formula)){
        formula = formula.toFixed(4);
    }
    cel.value = formula;
});