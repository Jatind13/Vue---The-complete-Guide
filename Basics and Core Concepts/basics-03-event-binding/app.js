const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      eventCounter: 0,
      name: "",
      formInput: "",
      firstName: "John",
      lastName: "Doe",
    };
  },
  // computed properties are essentially like methods but the major difference is that 
  // vue will be aware about the dependencies and whenever any of it changes then they will be executed.
  computed:{
    fullName(){
      console.log("it is not running again and again")
        return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    adding(num) {
      this.eventCounter += 5;
    },
    reducing(num) {
      this.eventCounter -= 5;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitted() {
      alert("Form is submitted!");
    },
    resetInput() {
      this.name = "";
    },
    fullName() {
      console.log("It is running!");
      /* Each time the component re-renders (due to any reactive data change), 
      the fullName() method is called again. Even if the values of firstName and lastName 
      haven’t changed, the method will still execute, potentially leading to unnecessary 
      computations and performance overhead.*/

      return `${this.firstName} ${this.lastName}`;
    },
  },
});

app.mount("#events");
