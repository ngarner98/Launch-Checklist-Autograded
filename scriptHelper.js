// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
    let destinationData = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>`;
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = destinationData;

 }
 
 function validateInput(testInput) {
    let testInputType;
    if(testInput === "" || testInput === undefined){
        testInputType = "Empty";
    } else if(isNaN(testInput) === false){
        testInputType = "Is a Number";
    } else if(isNaN(testInput) === true){
        testInputType = "Not a Number"
    } return testInputType;
    
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //pilot, copilot, fuel level, cargo mass
    let launchIsAGo = true;
    document.getElementById("faultyItems").style.visibility = 'visible'
    list.style.visibility = "visible"
    if(validateInput(pilot) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML=`Pilot ${pilot} is ready for launch.`;
    }
    if(validateInput(copilot) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML=`Co-pilot ${copilot} is ready for launch.`;
    }
    if(validateInput(fuelLevel) === "Is a Number"){
        if(fuelLevel < 10000){
            
            document.getElementById("fuelStatus").innerHTML=`Fuel level too low for launch`;
            launchIsAGo = false
        }else{
            document.getElementById("fuelStatus").innerHTML=`Fuel level high enough for launch`;
            }
        }
    if(validateInput(cargoLevel) === "Is a Number") {
        if(cargoLevel > 10000){
            
            document.getElementById("cargoStatus").innerHTML=`Cargo mass too heavy for launch`;
            launchIsAGo = false
        }else{
            document.getElementById("cargoStatus").innerHTML=`Cargo mass low enough for launch`;
        }
    }
    if(launchIsAGo === false) {
        document.getElementById("launchStatus").innerHTML=`Shuttle Not Ready for Launch`;
        document.getElementById("launchStatus").style.color="red"
    }else {
        document.getElementById("launchStatus").innerHTML=`Shuttle is Ready for Launch`;
        document.getElementById("launchStatus").style.color="green"
    }
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetSelected = Math.floor(Math.random() * planets.length);
    return planets[planetSelected];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

 