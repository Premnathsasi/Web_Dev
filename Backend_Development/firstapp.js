var name = 'prem'
const obj = {
  name: 'John',
  regularFunction: function() {
    console.log('Regular function:', this.name);
  },
  arrowFunction: () => {
    console.log('Arrow function:', this.name);
  },
};

obj.regularFunction();
obj.arrowFunction();