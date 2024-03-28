let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here
const James = {
    age: 18,
    criminalRecords: null,
}

isOver18 = James.age > 18
hasCriminalBlacklist = James.criminalRecords != null
isAllow = isOver18 && !hasCriminalBlacklist

console.log(isAllow);