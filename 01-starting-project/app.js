/* ------------ Declarative Approach --------------- */

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ""
        };
    },
    methods: {
        addGoal() {
            console.log("This is true")
            this.goals.push(this.enteredValue)
        }
    }
}).mount("#app")


/* ------------------Imperative Approach---------------------- */

// Implementaion using the pure Javascript.
// const buttonEle = document.querySelector('button')
// const inputEle = document.querySelector('input')
// const listEle = document.querySelector('ul')

// function addGoal(){
//     const enteredValue = inputEle.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = enteredValue;
//     listEle.appendChild(listItem);
//     inputEle.value = ''
// }

// buttonEle.addEventListener('click', addGoal);