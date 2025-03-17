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
    resolveButton.addEventListener("click", function (event) {
        riskDashContainer.removeChild(riskCard);

        // Task 6 - adding a stop propagation
        event.stopPropagation();
    });


    //adds the button to the cards
    riskCard.appendChild(resolveButton);

    // adds the card to the dashboard container
    riskDashContainer.appendChild(riskCard);


    //Task 4: Categorizing Risks by Level

    // if statement to give cards classes based on level
    if (riskLevel === "High") {
        riskCard.classList.add("high-level")
    } if (riskLevel === "Medium") {
        riskCard.classList.add("med-level")
    } if (riskLevel === "Low") {
        riskCard.classList.add("low-level")
    };

    // creates function that highlights cards in colors based on their level
    function highlightCards() {
        //grabs all of the cards that have those classes
        const highLevelCards = document.querySelectorAll(".high-level");
        const medLevelCards = document.querySelectorAll(".med-level");
        const lowLevelCards = document.querySelectorAll(".low-level");

        //creates arrays out of the classes, then goes through each one and highlights a color
        Array.from(highLevelCards).forEach(card => {
            card.style.backgroundColor = "red";
        });
        Array.from(medLevelCards).forEach(card => {
            card.style.backgroundColor = "yellow";
        });
        Array.from(lowLevelCards).forEach(card => {
            card.style.backgroundColor ="green";
        });
    };

    highlightCards();
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

    // resets the input boxes to empty, once submitted
    newRisk.reset();
});

//Task 3 - test data
addRiskItem("Market Fluctuations", "High", "Finance");


// Task 4 - test data
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5: Implementing Bulk Updates

// grabs the button by using its Id
const increaseLevelBtn = document.getElementById("increaseLevelBtn");

//adds an event listener to the increase level button
increaseLevelBtn.addEventListener('click', (event) => { //works on a click
    // grabs the risk cards by class and makes them an array
    const riskCards = document.querySelectorAll(".riskCard");
    const riskCardsArray = Array.from(riskCards);

    // goes through the array and increase the levels based on value
    riskCardsArray.forEach(card => {
        // grabs the risk levels and the value of the risk level
        const riskLevel = document.querySelectorAll("#riskLevel");
        let riskLevelValue = riskLevel.value;

        // uses if statement to go through the level and changes to a certain value based on previous value
        if (riskLevelValue === 'Medium') {
            riskLevel.value = 'High';
            card.style.backgroundColor = 'red';
        }
        else if (riskLevelValue === 'Low') {
            riskLevel.value = 'Medium';
            card.style.backgroundColor = 'yellow'
        };
    });

    // Task 6 - adding a stop propagation
    event.stopPropagation();
});


// Task 5 - Test Data
addRiskItem("Employee Retention", "Low", "HR");