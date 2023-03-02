const tableBody = document.querySelector('tbody');
const sendButton = document.getElementById('send-button');


      
// Function to create a table row
function createTableRow(data) {
  const row = document.createElement('tr');

  const cell1 = document.createElement('th');
  cell1.textContent = data.column1;
  row.appendChild(cell1);

  const cell2 = document.createElement('td');
  cell2.textContent = data.column2;
  row.appendChild(cell2);


  const cell3 = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  cell3.appendChild(checkbox);
  row.appendChild(cell3);

  const cell4 = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    if (confirm('Are you sure you want to delete this row?')) {
      const rowData = {
        column1: cell1.textContent,
        column2: cell2.textContent
      };
      const json = JSON.stringify(rowData);
      console.log(json);
      // Add code to send JSON data to server-side script for deletion
      row.remove();
    }
  });
  cell4.appendChild(deleteButton);
  row.appendChild(cell4);

  return row;
}

// Function to populate the table with JSON data
function populateTable(data) {
  data.forEach(function(item) {
    const row = createTableRow(item);
    tableBody.appendChild(row);
  });
}

// Function to get the selected rows and return them as JSON
function getSelectedRows() {
  const selectedRows = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    const row = checkbox.parentNode.parentNode;
    const cells = row.querySelectorAll('td');
    const rowData = {
      column1: cells[0].textContent,
      column2: cells[1].textContent
    };
    selectedRows.push(rowData);
  });
  return JSON.stringify(selectedRows);
}

//TESTING ONLY FOR DEMO OF HTML --------------------
const data = [
    {
      "column1": "Covid Vaccine",
      "column2": "Submit a photo of your covid vaccine card or be prepaired to have it with you and show to the front desk upon arrival.",
    },
    {
      "column1": "Fever Test",
      "column2": "You will be tested for a fever upon arrival to the convention to help reduce the spread of COVID-19.",
    },
    {
      "column1": "Age Verification",
      "column2": "To ensure you are 21 to enter the convention pre drivers license must be uploaded and checked to ensure you will be allowed in.",
    }
  ]
populateTable(data);

//TESTING -------------------------------

// Get JSON data and populate the table
fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    populateTable(data);
  });


// Add event listener to send button
sendButton.addEventListener('click', function() {
  const selectedRows = getSelectedRows();
  console.log(selectedRows);
  // Add code to send selected rows to server-side script
});





//Creating new Conditions script
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nameInput = document.getElementById("condition-name-input");
  const descriptionInput = document.getElementById("condition-description-input");

  const data = {
    name: nameInput.value,
    description: descriptionInput.value
  };

  sendJSON(data);
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("condition-name-input");
  const descriptionInput = document.getElementById("condition-description-input");
  nameInput.value = "";
  descriptionInput.value = "";
});

function sendJSON(data) {
  const newCondition = new XMLHttpRequest();
  newCondition.open("POST", "middle-layer.php");
  newCondition.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  newCondition.onload = () => {
    if (newCondition.status >= 200 && newCondition.status < 300) {
      console.log("Data sent successfully!");
    } else {
      console.log("Failed to send data.");
    }
  };
  newCondition.onerror = () => {
    console.log("Failed to send data.");
  };
  newCondition.send(JSON.stringify(data));
}

