const findTheOldest = function(people) {
    const age = people.map((person) => {
        if (person.yearOfDeath === undefined) {
            return 2024 - person.yearOfBirth;
        } else {
        return person.yearOfDeath - person.yearOfBirth;
        }
    });
    const oldest = Math.max(...age);
    const index = age.indexOf(oldest);
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
