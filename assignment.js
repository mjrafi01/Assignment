//Covert Feet to mile

function feetToMile(feet) {
    var miles=feet/5280;  //5,280 ft = 1 mi
    return miles;
}
var miles=feetToMile(5280);
console.log('Miles   ' +(miles).toFixed(5));


// Wood Calculator

function woodCalculator(chairCount,tableCount,bedCount) {
    var totalWood=(chairCount+3*tableCount+5*bedCount);
    return totalWood;
}
var woodNeed=woodCalculator(4,8,9);
console.log("You need " +woodNeed + " cubic feet Wood")

// brick Calculator
function brickCalculator(floor) {

    var brickPieces=0;
    var floorHeightBefore11=15;
    var floorHeightBefore21=12;
    var floorHeightAfter20=10;

    if (floor <= 10) {
        brickPieces=floor*floorHeightBefore11* 10000;
    }
    else if(floor <=20){
        brickPieces= (10* floorHeightBefore11 * 10000)+(floor-10)*floorHeightBefore21*1000;
    }
    else{
        brickPieces= (10* floorHeightBefore11 * 10000)+(floor-10)*floorHeightBefore21*1000+(floor-20)*floorHeightAfter20+1000;
    }
    return brickPieces;
}
var brickPieces =brickCalculator(17);
console.log("Total "+brickPieces +" pieces brick");





//find Tiny Friend Name

function tinyFriend(friendsName){
    
    if(!friendsName.length){ //Checking Empty Array
        console.log("This array is empty");
    }
    else{
     var temp=friendsName[0].length;
     var max;
     for (var i = 0; i < friendsName.length; i++) {
         if (friendsName[i].length <= temp) {
           var temp = friendsName[i].length;
           tinyName = friendsName[i];
         }
     }
     return tinyName;
 
   }
    }
   var listOfFriends=["Rafi","Kafi","Saf"];
   var tinyFriendArr= tinyFriend(listOfFriends);
   console.log(tinyFriendArr +" is my Tiny Friend");