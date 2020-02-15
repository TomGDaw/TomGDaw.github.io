let temp =  parseFloat(document.getElementById("temp").innerHTML);
let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);

let windChill = 35.74+0.6215*temp-35.75*Math.pow(windSpeed,0.16)+0.4275*temp*Math.pow(windSpeed,0.16);

if (temp <= 50 && windSpeed > 3.0) {
document.getElementById("windChill").textContent = windChill.toFixed(2);
}
else {
    document.getElementById("windChill").textContent = "N/A";
}