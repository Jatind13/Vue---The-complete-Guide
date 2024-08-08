const app = Vue.createApp({
    data(){
        return {
            counter: 0
        }
    },
    computed:{
        message(){
            if(this.counter < 37 ){
                return "Not there yet!"
            } else {
                return "Too much!"
            }
        }
    },
    watch:{
        counter(newValue){
            const that = this;
            if(newValue > 40){
                setTimeout(function () {
                  that.counter = 0;
                }, 5000);
            }
          }   
    },
    methods:{
        addition(num){
            this.counter+=num
        }
    }
})

app.mount("#assignment")