const findTheOldest = function(arr) {
    let result = {};
    let oldest = 0;
    let ageStore = 0;
    let today = new Date();
    let year = today.getFullYear();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath) {
            ageStore = arr[i].yearOfDeath - arr[i].yearOfBirth;
            if (ageStore > oldest) {
                result = arr[i];
                oldest = ageStore;
            }
        }
        else {
            ageStore = year - arr[i].yearOfBirth;
            if (ageStore > oldest) {
                result = arr[i];
                oldest = ageStore;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
