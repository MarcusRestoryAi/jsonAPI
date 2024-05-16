let myFunc = async () => {
    //const filePath = "./data.json"
    const issURL = "https://api.wheretheiss.at/v1/satellites/25544";

    //Hämta data från json fil
    let response = await fetch(issURL)
    let myObj = await response.json()

    //Skriv ut output
    console.log(myObj);
}

myFunc()