const findTheOldest = function(peopleArray) {
    for (let person of peopleArray) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    const oldestPerson = peopleArray.reduce((oldest, current) => {
        if ((oldest.yearOfDeath - oldest.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth)) {
            return oldest;
        }
        else {
            return current;
        }
    }, {name: "default", yearOfBirth: 1950, yearOfDeath: 1950});

    console.log(oldestPerson);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
