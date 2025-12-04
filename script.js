//your JS code here. If required.
//your JS code here. If required.
const output = document.getElementById("output");

// Function to generate a promise with random delay (1–3 seconds)
function createRandomPromise(index) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; // 1 to 3 seconds

    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: delay });
    }, delay * 1000);
  });
}

// Create 3 promises
const promises = [
  createRandomPromise(1),
  createRandomPromise(2),
  createRandomPromise(3)
];

// Run all promises together
Promise.all(promises).then((results) => {
  // Clear the Loading... row
  output.innerHTML = "";

  // Add rows for each promise
  results.forEach((result) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = result.name;

    const timeCell = document.createElement("td");
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);

    output.appendChild(row);
  });

  // Calculate total (max time)
  const totalTime = Math.max(...results.map(r => r.time));

  // Add total row
  const totalRow = document.createElement("tr");

  const totalLabel = document.createElement("td");
  totalLabel.textContent = "Total";

  const totalValue = document.createElement("td");
  totalValue.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalValue);

  output.appendChild(totalRow);
});
