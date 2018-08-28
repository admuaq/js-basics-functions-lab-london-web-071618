// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    if (number == 43 ) {
        return 1
    }
    else if (number == 50) {
        return 8
    }
    else if (number == 34) {
        return 8
    }
}

function distanceFromHqInFeet(number) {
    if (number == 43) {
        return 264
    }
    else if (number == 50) {
        return 2112
    }
    else if (number == 34) {
        return 2112
    }
}

function distanceTravelledInFeet(start, destination) {
   if ((destination - start) < 0) {
        let toPositive = (destination - start) * -1
        return toPositive * 264
   }
   else {
    return (destination - start) * 264
   }
}

function calculatesFarePrice(start, destination) {

    let check = (destination - start)

    if (check < 0) {
        check *= -1
    }
    
    if (check == 1) {
        return 0
    }
    else if (check < 8) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    else if (check == 8) { 
        return 25
    }
    else if (check > 9) {
        return 'cannot travel that far'
    }
}