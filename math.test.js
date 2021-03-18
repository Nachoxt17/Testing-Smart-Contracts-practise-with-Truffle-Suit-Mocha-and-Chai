/**+-For Every file you will Test you have to create a "*file-to-test-name*.test.js", usually you put all these "***.test.js" files together
 * in a Folder called "test".*/
/**+-(1)-First, we require the file we are going to Test, like this:_.*/
const { add } = require("./math");
/**+-(2)-Then, we need to import the Assertion Method of Chai for comparing the Results of the Act of the Test with Arranged(fake) Data with the Expected Output Data
 * (https://www.youtube.com/watch?v=7z9zACk_Jgw&list=PLbbtODcOYIoHnn7pbX1fOeA8TopL1fpRL&index=5), like this:_.*/
const assert = require("chai").assert;

/**+-(3)-Next we are going to define a Describe Block that is something that comes from Mocha and allows you to regroup in a same Unit different Test that are related.
 * +-(A)-Its 1st Argument of "describe(***, ***)" will be a String with the Name of the Group of Tests. In our case it will be "add()" because all our Test will be
 * related with the "add()" Function.
 * +-(B)-The 2nd Argument will be a Callback Function without Arguments in wich we will define our Tests related to "add()" in the Describe Block.*/
describe("add()", () => {
  /**+-(4)-Inside the Describe Block, we call the Mocha Method called "it(***)", as a 1st Argument we write a String describing the Conditions of the Test to be
   * considered Successful and the 2nd Argument will be a Callback Function without Arguments in wich we will write the Test Itself.*/
  it("Should add 2 Numbers.", () => {
    /**+-(5)-The First thing to do in a Test is to Arrange Data(to Invent Fake Testing Data), like this = {.*/
    const a = 1;
    const b = 1;
    //}.
    /**+-(6)-Now comes the "Act" part of the Arrange-Act-Assert pattern, we define a "const" executing the Function with our Arranged Data, like this = {.*/
    const actual = add(a, b);
    //}.
    /**+-(7)-Finally, comes the "Assert" part when we compare the Value that we got with the Expected Value with the "assert.equal(***, ****)" Method we Imported
     *from Chai using as 1st Argument the "const" with Value we Got and as 2nd Argument the Expected Value, like this = {.*/
    assert.equal(actual, 2);
    //}.
  });
});
/**+-(8)-To Executing the Test, we will have to have Mocha Installed globally(you can do it with the command "npm i -g mocha") and then you
 *execute the command "mocha *file-to-test-name*.test.js", in our case will be "mocha math.test.js".*/
