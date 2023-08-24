// Initialize game properties
const game = { timer: null, start: null };

// Create Message Element
const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Click Shape To Start";
document.body.prepend(message);

// Create a Box
const box = document.createElement("div");
box.classList.add("box");

// Get reference to the output container
const output = document.querySelector(".output");
output.append(box);

// Add event listener to the box
box.addEventListener("click", () => {
  clearTimeout(game.timer); // Clear any existing timer

  // Hide the box and set a new timer to add a box after a random delay
  box.style.display = "none";
  game.timer = setTimeout(addBox, randomNumbers(3000));

  // Check if the game is in the starting state
  if (!game.start) {
    message.textContent = "Watch for the box and click it";
    game.start = new Date().getTime(); // Record the game start time
  } else {
    // Calculate the time taken to click and update the message
    const current = new Date().getTime();
    const duration = (current - game.start) / 1000;
    message.textContent = `It took ${duration.toFixed(2)} seconds to click`;
    game.start = null; // Reset the game start time
  }
});

// Generate random numbers between 0 and max
function randomNumbers(max) {
  return Math.floor(Math.random() * max);
}

// Function to add a new box
function addBox() {
  const container = output.getBoundingClientRect();
  const dim = [randomNumbers(50) + 20, randomNumbers(50) + 20];
  box.style.display = "block";
  box.style.width = `${dim[0]}px`;
  box.style.height = `${dim[1]}px`;
  box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
  box.style.left = randomNumbers(container.width - dim[0]) + "px";
  box.style.top = randomNumbers(container.height - dim[1]) + "px";
  box.style.borderRadius = randomNumbers(50) + "%";
}

// Initial call to add a box when the page loads
addBox();


























// const game = { timer: 0, start: null };

// // Create Message Element
// const message = document.createElement("div");
// message.classList.add("message");
// message.textContent = "Click To Start";
// document.body.prepend(message);

// // Create a Box
// const box = document.createElement("div");
// box.classList.add("box");

// const output = document.querySelector(".output");
// output.append(box);

// box.addEventListener("click", () => {
//   box.textContent = "";
//   box.style.display = "none";
//   game.timer = setTimeout(addBox, randomNumbers(3000));
//   if (!game.start) {
//     message.textContent = "Watch for element and click it";
//   } else {
//     const current = new Date().getTime();
//     const duration = (current - game.start) / 1000;
//     message.textContent = `It took ${duration} seconds to click`;
//   }
// });

// function randomNumbers(max) {
//   return Math.floor(Math.random() * max);
// }

// function addBox() {
//   game.start = new Date().getTime();
//   const container = output.getBoundingClientRect();
//   const dim = [randomNumbers(50) + 20, randomNumbers(50) + 20];
//   box.style.display = "block";
//   box.style.width = `${dim[0]}px`;
//   box.style.height = `${dim[1]}px`;
//   box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
//   box.style.left = randomNumbers(container.width - dim[0]) + "px";
//   box.style.top = randomNumbers(container.height - dim[1]) + "px";
//   box.style.borderRadius = randomNumbers(50) + "%";
// }
