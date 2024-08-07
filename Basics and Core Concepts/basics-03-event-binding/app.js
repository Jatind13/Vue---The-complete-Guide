const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      eventCounter: 0,
      name: "",
      formInput: "",
      firstName: "John",
      lastName: "Doe",
      counterWatch: 0,
      message: ''
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
  watch: {
    /*
    ->The watch option is an object where the keys are the names of 
      data properties you want to watch.
    ->The counter watcher monitors changes to the counter property.
    ->It receives two arguments: newValue (the new value of counter)
     and oldValue (the previous value of counter).
    ->When counter reaches 5, the watcher updates the message property.*/ 
    counterWatch(newValue, oldValue) {
      if (newValue === 5) {
        this.message = 'Counter reached 5!';
      }
    }
    /* If you're simply transforming or deriving a value from other 
    reactive data, a computed property is usually better because 
    it's automatically cached and more declarative. */
    // So for event driven changes prefer the event handlers.
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
    incrementCounter() {
      this.counterWatch++;
    }
  },
});

app.mount("#events");
