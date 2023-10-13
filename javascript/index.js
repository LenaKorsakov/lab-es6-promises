// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks

const addLiElement = (step, element) => {
  return (element.innerHTML += `<li>${step}</li>`);
};
const mashedPotatoesList = document.querySelector('#mashedPotatoes');
getInstruction('mashedPotatoes', 0, (step0) => {
  addLiElement(step0, mashedPotatoesList);

  getInstruction('mashedPotatoes', 1, (step1) => {
    addLiElement(step1, mashedPotatoesList);
    getInstruction('mashedPotatoes', 2, (step2) => {
      addLiElement(step2, mashedPotatoesList);
      getInstruction('mashedPotatoes', 3, (step3) => {
        addLiElement(step3, mashedPotatoesList);
        getInstruction('mashedPotatoes', 4, (step4) => {
          addLiElement(step4, mashedPotatoesList);
          addLiElement('Mashed potatoes are ready!', mashedPotatoesList);
          document.querySelector('#mashedPotatoesImg').hidden = false;
        });
      });
    });
  });
});

// Iteration 2 - using promises
const steakList = document.querySelector('#steak');

obtainInstruction('steak', 0)
  .then((step0) => {
    addLiElement(step0, steakList);
  })
  .then(() => obtainInstruction('steak', 1))
  .then((step1) => {
    addLiElement(step1, steakList);
  })
  .then(() => obtainInstruction('steak', 2))
  .then((step2) => {
    addLiElement(step2, steakList);
  })
  .then(() => obtainInstruction('steak', 3))
  .then((step3) => {
    addLiElement(step3, steakList);
  })
  .then(() => obtainInstruction('steak', 4))
  .then((step4) => {
    addLiElement(step4, steakList);
  })
  .then(() => obtainInstruction('steak', 5))
  .then((step5) => {
    addLiElement(step5, steakList);
  })
  .then(() => obtainInstruction('steak', 6))
  .then((step6) => {
    addLiElement(step6, steakList);
    addLiElement('Steak is ready!', steakList);
    document.querySelector('#steakImg').hidden = false;
  });

// Iteration 3 using async/await
const broccoliList = document.querySelector('#broccoli');
const addBroccoliLiElement = (step) => addLiElement(step, broccoliList);
async function makeBroccoli(productName) {
  let currentStep = await obtainInstruction(productName, 0);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 1);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 2);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 3);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 4);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 5);
  addBroccoliLiElement(currentStep);

  currentStep = await obtainInstruction(productName, 6);
  addBroccoliLiElement(currentStep);
  addBroccoliLiElement('Broccoli is ready!');
  document.querySelector('#broccoliImg').hidden = false;
}

makeBroccoli('broccoli');

// Bonus 2 - Promise all
const brusselsSproutsList = document.querySelector('#brusselsSprouts');

const allOfTheInstructions = Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
]).then((values) => {
  values.forEach((value) => {
    addLiElement(value, brusselsSproutsList);
    addLiElement('Brussels sprouts are ready!', brusselsSproutsList);
    document.querySelector('#brusselsSproutsImg').hidden = false;
  });
});
