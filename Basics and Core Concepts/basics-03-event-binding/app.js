const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      eventCounter:0,
      name:'',
      formInput:''
    };
  },
  methods:{
    add(){
      this.counter++;
    },
    reduce(){
      this.counter--;
    },
    adding(num){
      this.eventCounter+=5;
    },
    reducing(num){
      this.eventCounter-=5;
    },
    setName(event){
      this.name = event.target.value
    },
    submitted(){
      alert("Form is submitted!")
    },
    resetInput(){
      this.name =''
    }
  }
});

app.mount('#events');
