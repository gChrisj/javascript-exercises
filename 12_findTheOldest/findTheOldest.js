const findTheOldest = function(people) {
    let age = 0;
    let oldest;
    for(person in people){
        if(age < people[person].yearOfDeath - people[person].yearOfBirth){
            age = people[person].yearOfDeath - people[person].yearOfBirth;
            oldest = people[person];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
