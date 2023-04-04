module.exports = function (firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    console.log(`${this.firstName} ${this.lastName}`);
};
