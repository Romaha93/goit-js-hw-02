'use strict';

function checkForSpam(message) {
    
    const messageNormalized = message.toLowerCase();
    const testWord1 = messageNormalized.includes("spam");
    const testWord2 = messageNormalized.includes("sale");
    
    if (testWord1 || testWord2) {
        return true;
    } else {
        return false;
    }
    
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


