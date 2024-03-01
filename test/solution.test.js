// Write your tests here!
const findStudentByName = require("../src/solution.js");
const expect = require("chai").expect;

describe("findStudentByName", () => {
  it("Should return the entire obeject for the student if the name matches", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = { name: "Leo Yeon-Joo", score: 8.9 };
    const actual = findStudentByName(students, "Leo Yeon-Joo");
    expect(actual).to.eql(expected);
  })
  it("Should return null if name cannot be found", () => {
   const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const actual = findStudentByName(students, "Mari Cornwell");
    expect(actual).to.be.null;
  })
})