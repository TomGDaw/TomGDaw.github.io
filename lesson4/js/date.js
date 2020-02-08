let d = new Date();

document.getElementById("currentDate").textContent = d.getFullYear();

//**************************/

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    document.getElementById("lastUpdated").textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);
} catch (e) {
    alert('Error with code or your browser does not support Locale')
}


