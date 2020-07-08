function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getNounPrefix() {
  var nounIndex = getRandomIntInclusive(0, nounsList.length - 1);
  return nounsList[nounIndex];
}

function getApprenticeName() {
  var apprenticeIndex = getRandomIntInclusive(0, 99);
  if (apprenticeIndex == 0) {
    return "face";
  }
  else {
    return "paw";
  }
}

function getWarriorName() {
  var warriorIndex = getRandomIntInclusive(0, warriorsList.length - 1);
  return warriorsList[warriorIndex];
}

function getName() {
  var catType = document.querySelector('input[name="catType"]:checked').value;
  if (catType == undefined) {
    alert("Select a cat type first.")
  }
  
  var nounPrefix = getNounPrefix();
  console.log(nounPrefix);
  
  switch(catType) {
    case "leader":
      return nounPrefix + "star";
      break;
    case "warrior":
      return nounPrefix + getWarriorName();
      break;
    case "apprentice":
      return nounPrefix + getApprenticeName();
      break;
    default:
      // must be kit
      return nounPrefix + "kit";
    }
}

function displayName() {
  document.getElementById("nameLabel").innerHTML = "";
  
  //display waiting graphic
  var loader = document.getElementById("loading-screen");
  loader.classList.toggle('show');
  
  //set timer for a few seconds
  //Get random wait time
  var timeoutDuration = getRandomIntInclusive(500, 2000);
  setTimeout(showResults, timeoutDuration)
}

function showResults() {
  var name = getName();
  console.log(name);
  
  //hide waiting graphic
  var loader = document.getElementById("loading-screen");
  loader.classList.toggle('show');
  
  //Update the display with the name
  document.getElementById("nameLabel").innerHTML = name;
}