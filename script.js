const output = document.getElementById("output");

// Function to generate a promise with random delay
function createRandomPromise(index) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; // 1–3 seconds
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: delay });
    }, delay * 1000);
  });
}

const promises = [
  createRandomPromise(1),
  createRandomPromise(2),
  createRandomPromise(3),
];

Promise.all(promises).then((results) => {
  // REMOVE ONLY the loading row
  const loadingRow = document.getElementById("loading");
  if (loadingRow) loadingRow.remove();

  // Add rows for each resolved promise
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Total row (max time)
  const totalTime = Math.max(...results.map(r => r.time));

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
