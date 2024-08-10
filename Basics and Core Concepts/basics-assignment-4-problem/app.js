Vue.createApp({
    data(){
        return {
            user_class: "",
            status: "visible",
            background_color: "",
        }
    },
    methods:{
        toggle(){
            if (this.status === "visible"){
                this.status = "hidden";
            }
            else{
                this.status = "visible";
            }
        }
    }
}).mount("#assignment")