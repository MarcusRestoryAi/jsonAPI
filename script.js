document.getElementById("btnFetch").addEventListener("click", fetchData)

document.getElementById("btnLoop").addEventListener("click", () => {
    myInterval = setInterval(fetchData, 2000);
})

document.getElementById("btnLoopStop").addEventListener("click", () => {
    clearInterval(myInterval)
})

let myInterval;

async function fetchData() {
    const issURL = "https://api.wheretheiss.at/v1/satellites/25544";

    //Hämta data från json fil
    let response = await fetch(issURL)
    let myObj = await response.json()

    //hämta data frå response objekt
    let name = myObj.name

    //SKriv ut värdet till User
    document.getElementById("output").innerText = name;

    let strOutput = "";

    //For in loop för att skriva ut ISS värden
    for(x in myObj) {
        strOutput += `<div>${x}: ${myObj[x]}</div>`
    }

    document.getElementById("issData").innerHTML = strOutput;
}