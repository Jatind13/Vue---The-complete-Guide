const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      eventCounter:0,
      name:''
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
    }
  }
});

app.mount('#events');
