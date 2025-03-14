//Task 1: Creating the Base Structure

console.log(`Risk Dashboard Loaded`); // Prints "Risk Dashboard Loaded" in the console

// assigns the variable an element by grabbing its id
const riskDashContainer = document.getElementById("riskDashboard");


// Task 2: Adding Risk Items Dynamically

// creates function to make the risk cards
function addRiskItem(riskName, riskLevel, department) {
    // uses method to create a div and assign it a class
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    // formats the cards information
    riskCard.innerHTML = ` 
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    //Task 3: Removing Risk Items

    // grabs element by id, gives it text and an ID
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolveButton");

    //uses an eventlistener for when resolve is clicked to delete the card
    resolveButton.addEventListener("click", function () {
        riskDashContainer.removeChild(riskCard);
    });

    //adds the button to the cards
    riskCard.appendChild(resolveButton);

    // adds the card to the dashboard container
    riskDashContainer.appendChild(riskCard);
};

// test data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// assigns the variable an element by grabbing its id
const newRisk = document.getElementById("newRisk");

// adds an event listener to the form
newRisk.addEventListener("submit", (event) => {
    // allows for the change to stay in the HTML page
    event.preventDefault(); 

    // assigns the variables the values that are inputted
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("riskDepartment").value;

    // runs the function, creating a new risk card
    addRiskItem(riskName, riskLevel, department);

});