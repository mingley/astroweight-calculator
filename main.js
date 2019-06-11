var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

var select = document.getElementById ("planets");
// 1. 
// Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

    planets.forEach(function([planetName, gravity]){
        var pick = document.createElement ("option");
        pick.innerHTML = planetName;
        pick.value = planetName;
        select.appendChild(pick);
    });
    

 // 2. Write the code to return the correct weight

function calculateWeight(weight, planetName) {  
    planets.forEach (function (pick)
    {if (planetName == pick [0]) {
            gravity = pick [1];}
    })
    return weight*gravity;
    };

// 3. Create a variable called userWeight and assign the value of the user's weight.

// 4. Create a variable called planetName and assign the name of the selected planet from the drop down.

// 5. Create a variable called result and assign the value of the new calculated weight.

// 6. Write code to display the message shown in the screenshot.

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

function handleClickEvent() {
var userWeight = document.getElementById ("user-weight").value;
var planetName = document.getElementById ("planets").value;
var result = calculateWeight (userWeight, planetName);
document.getElementById ("output").innerText = 
        'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
};