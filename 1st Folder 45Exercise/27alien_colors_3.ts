 // Alien Color #3: Turn your if_else chain from Exercise 5-4 into an if-else chain.
 // . write three version of this program, making sure each message is printed for the appropriate color alien.
 
 let alienColors: string = "green";

 // . If the alien is green, print a message that the player earned 5 point.
 // . If the alien is gyellow, print a message that the player earned 10 point.
 // . If the alien is red, print a message that the player earned 15 point.
 
 // version 1 of the program
 if(alienColors === "green"){
  console.log("version 1: player earned 5 points.");
 }

else if(alienColors === "yellow"){
    console.log("player earned 10 points.");
 }

else if(alienColors === "red"){
     console.log("player earned 15 points.");
}
else{
console.log("please select right color")
}

// version 2 of the program
alienColors = "yellow";

if(alienColors === "green"){
 console.log(" player earned 5 points.");
}
else if(alienColors === "yellow"){
console.log("version 2: player earned 10 points.");
}      
 else if(alienColors === "red"){
     console.log("player earned 15 points.");
 }
else{
    console.log("please select right color")
}


// version 3 of the program
alienColors = "red";

if(alienColors === "green"){
   console.log("player earned 5 points.");
}
else if(alienColors === "yellow"){
   console.log("player earned 10 points.");
}  
else if(alienColors === "red"){
   console.log("version 3: player earned 15 points.");
  }
  else{
    console.log("please select right color")
  }




