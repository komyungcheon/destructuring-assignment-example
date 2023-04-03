// let [firstName,secondName]= ["alpha","beta","gamma","delta"]
// console.log(firstName,secondName);

// let [firstName,,thirdName]= ["alpha","beta","gamma","delta"]
// console.log(firstName,thirdName);

// let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);
// console.log(lastName);

// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
//
// // console.log(firstName);
// // console.log(secondName);
//
// [firstName, secondName] = [secondName, firstName]
//
// console.log(firstName);
// console.log(secondName);

// function NamesList() {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
// console.log(firstName);
// console.log(secondName);

// let masks = {x:21,y:-34,z:47};
// let x = masks.x;
// let y = masks.y;
// let z = masks.z;
// console.log(x,y,z);

const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
const { section2 : { alpha: alpha2, beta: beta2 }} = marks;
console.log(beta1);