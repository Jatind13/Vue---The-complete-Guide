const app = Vue.createApp({
    data(){
        return {
           userInput:'',
           show:false
        }
    },
    methods:{
        handleToggle(){
            console.log("lol test")
            this.show = !this.show
        }
    }
});

app.mount("#assignment")