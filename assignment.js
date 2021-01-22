// https://github.com/isouravx/js-assignment

// kilometerToMeter

function kilometerToMeter(kilometer) {
    
    // its universal 1 kilometer = 1000 meter

    var meter = kilometer * 1000;
    if (meter >= 0) {
        return meter; 
    }
    else {
        return "Distance can't be negative try again";
    }
}

// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {

    // We're given 1pc watch price is 50, 1pc mobile price is 100, 1pc laptop price is 500

    var budgetForWatch = watch * 50;
    var budgetForMobile = mobile * 100;
    var budgetForLaptop = laptop * 500;
    var total = budgetForWatch + budgetForMobile + budgetForLaptop;
    
    if (watch, mobile, laptop >= 0) {
        return total;
    }
    else {
        return "Item Number Can't be Negative try again"
    }
}

// hotelCost

function hotelCost(numberOfDays) {
    var cost = 0;
    if (numberOfDays <= 10) {
        cost = numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        var firstTendays = 10 * 100;
        var remainingDays = numberOfDays - 10;
        var nextTenDays = remainingDays * 80;
        cost = firstTendays + nextTenDays;
    }
    else {
        var firstTendays = 10 * 100;
        var nextTenDays = 10 * 80;
        var remainingDays = numberOfDays - 20;
        var lastDays = remainingDays * 50;
        cost = firstTendays + nextTenDays + lastDays;
    }
    if (numberOfDays >= 0) {
        return cost;
    }
    else {
        return "Days can't be Negative try again"
    }
} 

// megaFriend

function megaFriend(arr) {
    var largestName = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i].length > largestName.length) {
            largestName=arr[i]
        }
    }
    return largestName;
}
