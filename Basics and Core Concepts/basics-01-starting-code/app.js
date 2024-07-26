// To be noted : if we try to control an HTML element with vue 
// then we will be controlling all of it child elements as well.

/* Okay now to have the Vue app connected to html and making it work we have
the below code that needs to be added : 
It has 2 main parts , 
- Vue app creation 
- Mounting or connecting the Vue app to html.
*/

const app = Vue.createApp({
    // now this object have some keys or the pre-defined
    //values that we need to use for better communication 
    // one of them is data , like the variables .
    data(){
        return{
            courseGoal:"Learn Vue with Jatin!",
            //now let's learn how to handle the data in the Vue app.
            courseGoalA: "Master all the the topics in vue",
            courseGoalB: "Become a good developer",
            courseGoalC: '<h2>Good course it is </h2>',
            vueLink:"https://vuejs.org/"
        }
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            if(randomNum < 0.5){
                // now here we will use data property using the the 'this' keyword which is nothing 
                // but more of a core of Vue.
                return `Learn Vue and ${this.courseGoalA}`
            } 
            else {
                return `Master Vue and ${this.courseGoalB}`
            }
        }
    }
})

// step two is mounting or connecting the vue app.
app.mount("#user-goal");

/* 
- In the context of a Vue component, this refers to the Vue instance itself. This allows you to access the properties and methods defined within the component.d

*/