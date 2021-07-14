function bmiCalc() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    document.getElementById("output").innerHTML = (weight / Math.pow(height, 2));
}
