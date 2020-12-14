// Write your JavaScript code here!
window.addEventListener("load",function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            return response.json();
         }).then(function(json){
            const div = document.getElementById("missionTarget");
            div.innerHTML = 
            `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[1].name}</li>
               <li>Diameter: ${json[1].diameter}</li>
               <li>Star: ${json[1].star}</li>
               <li>Distance from Earth: ${json[1].distance}</li>
               <li>Number of Moons: ${json[1].moons}</li>
            </ol>
            <img src="${json[1].image}">
             `;
         })
   let form = document.querySelector("form");
   let faultyItems = document.querySelector("#faultyItems");
   let pilotStatus = document.querySelector("#pilotStatus");
   let copilotStatus = document.querySelector("#copilotStatus");
   let fuelStatus = document.querySelector("#fuelStatus");
   let cargoStatus = document.querySelector("#cargoStatus");
   let launchStatus = document.querySelector("#launchStatus");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if(pilotName.value === ""|| copilotName.value === ""|| fuelLevel.value === ""|| cargoMass.value===""){
         alert("All fields are required");
         
      } else if(isNaN(pilotName.value)===false){
            alert("Pilot name should be string");
      }else if(isNaN(copilotName.value)===false){
            alert("Co-Pilot name should be string");
      }else if(isNaN(fuelLevel.value)===true){
            alert("Fuel level should be numbers");
      }else if(isNaN(cargoMass.value)===true){
            alert("Cargo Mass should be numbers");
      }else{ 
            
         if(fuelLevel.value<10000 && cargoMass.value>10000){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            launchStatus.innerHTML = "Shuttle not ready for launch";          
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.style.color = "red";
         }else if(fuelLevel.value<10000 && cargoMass.value<10000){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red";
         }else if(fuelLevel.value>10000 && cargoMass.value>10000){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }else{
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatusinnerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";

         }
      }
     
            
      
   });
   
});


