var isRunning = true;

while (isRunning === true) {
  //por=pullOverReaction
  var por = prompt("You are driving your car down the 405, when someone drives up next to you and signals for you to pull over. What do you do? (Enter the number)\n\n1.) Pull over to talk to them. \n2.) Flip them off, gun it, and speed way. \n3.) Disregard them and keep driving normally.");

  if (por === "1") {
    var gunReaction = prompt("You pull over to talk to them, but when you do, the other driver points a gun at you and demands your wallet and car.  What do you do? (Again enter the numerical choice) \n\n1.) Pull out your own heater and blast away. \n2.) Give up your wallet and car. \n3.) Try to reason with the perp.");
    if (gunReaction === "1") {
      alert("You are both killed in a gun fight ending in a fiery explosion of both cars.");
    } else if (gunReaction === "2") {
      alert("Congrats you are now broke and carless.  Good luck getting home.");
    } else if (gunReaction === "3") {
      alert("You have a conversation like a reasonable adult.  Then you are shot and killed.");
    } else {
      while (por !== "1" && por !== "2" && por !== "3") {
        gunReaction = prompt("Invalid response. \nYou pull over to talk to them, but when you do, the other driver points a gun at you and demands your wallet and car.  What do you do? (Again enter the numerical choice) \n\n1.) Pull out your own heater and blast away. \n2.) Give up your wallet and car. \n3.) Try to reason with the perp.");
      }
    }
  } else if (por === "2") {
    alert("You get into a road raging car chase, ending in your death in a fiery crash.");
  } else if (por === "3") {
    alert("Congrats! Welcome to driving in Los Angeles.  You have handled this correctly.");
  } else {
    while (por !== "1" && por !== "2" && por !== "3") {
      por = prompt("Invalid response. \nYou are driving your car down the 405, when someone drives up next to you and signals for you to pull over. What do you do? (Enter the number)\n\n1.) Pull over to talk to them. \n2.) Flip them off, gun it, and speed way. \n3.) Disregard them and keep driving normally.");
    }
  }

  isRunning = confirm("Do you want to go again?");
}
alert("Thanks for playing!");
