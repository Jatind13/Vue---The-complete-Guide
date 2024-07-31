const app = Vue.createApp({
   data(){
    return {
        name:'',
        name2:''
    }
   },
   methods:{
    alerted(){
        alert("Submitted!!")
    },
    setName(){
     this.name = event.target.value
    },
    confirmedInput(){
        this.name2 = this.name
    }
   }

})

app.mount(
    "#assignment"
)