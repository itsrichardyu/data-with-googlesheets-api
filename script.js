// spreadsheetID: Replace with Google Sheets spreadsheet ID from address bar
/** For example:
 * If this is your spreadsheet URL: https://docs.google.com/spreadsheets/d/1AnwoQpMaHZjsnDaQopAA9CR3ae8/edit
 * Then "1AnwoQpMaHZjsnDaQopAA9CR3ae8" is the spreadsheet ID
 */
const spreadsheetID = "";

// apiKey: API key provided by Google Developers/Cloud Platform dashboard 
/** How to get an API key - **OAuth is NOT required
 * Create a project on https://console.cloud.google.com/apis/dashboard
 * Dashboard -> "Enable APIs and Services" -> search for Google Sheets API and enable it
 * Credentials -> "Create Credentials" -> "API key"
 * Restrict access to your website AND only enable Google Sheets API
 */
const apiKey = "";

// dataRange: Data in A1 notation, e.g. Sheet!A1:A5
const dataRange = "";

// GET request to Google API
let xhr = new XMLHttpRequest();
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${dataRange}?key=${apiKey}`;
let response;
let parsedResponse;

xhr.onreadystatechange = () => {
    if (xhr.readyState == xhr.DONE)
    {
    response = JSON.parse(xhr.responseText);
    parsedResponse = response.values[0];
    }
}

xhr.open("GET", url, false);
xhr.send();

console.log(parsedResponse);

// Update HTML
document.getElementById("eventName").innerHTML = parsedResponse[0];
document.getElementById("eventDateTime").innerHTML = parsedResponse[2];
document.getElementById("eventSignup").innerHTML = "Signup link: " + parsedResponse[3];
document.getElementById("eventGraphic").src = parsedResponse[4];
document.getElementById("eventGraphic").style.height = "300px";
document.getElementById("eventGraphic").style.width = "300px";
