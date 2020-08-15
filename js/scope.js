//Global scope
const NAME = "Funny";

function test() {
    const NAME = "Lucky";
    console.log(NAME);
}
test();

console.log(NAME);