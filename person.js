class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
