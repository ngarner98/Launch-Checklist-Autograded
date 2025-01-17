// Write your JavaScript code here!

// const { addDestinationInfo, formSubmission } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const submit = document.getElementById("formSubmit");




window.addEventListener("load", function() {

    const form = document.querySelector("form");    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
        form.addEventListener("submit", event=>{
        
            let pilot = document.querySelector("input[name=pilotName]").value;
            let copilot = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoLevel = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();

     })
    
 });
