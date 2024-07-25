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
            vueLink:"https://vuejs.org/"
        }
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            if(randomNum < 0.5){
                return "Learn Vue"
            } 
            else {
                return "Master Vue"
            }
        }
    }
})

// step two is mounting or connecting the vue app.
app.mount("#user-goal");