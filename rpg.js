let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let currentEquipment = 0;
let fighting;
let monsterHealth;
let inventoryWeapon = ["stick"];
let inventoryEquipment = ["adventurer gear"];
let skills = [];
let status = [];
let blessings = [];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
const monitor = document.querySelector("#game-monitor");
const log = document.querySelector("#logs");
const equipments = [
  { name: 'adventurer gear', hp: 50, spd: 10, cost:100},
  { name: 'shinobi gear', str: 10, spd: 10, def: 20, cost:100}
];
const weapons = [
 
    { name: 'stick', str: 5, mgk: 5, agi: 20, cost: 0}, 
  
    { name: 'hammer', str: 50, spd: -10, cost:10},
    { name: 'heavy hammer', str: 75, spd: -20, cost:10},
  
 
    { name: 'sword', str: 30,  cost:10},
    { name: 'holy sword', str: 60, agi: 20,  cost:10},
 
  
    { name: 'enchanted stick', mgk: 30, cost:10},
    { name: 'black enchanted stick', mgk: 60, cost:10},
    { name: 'holy enchanted stick', str: 60, agi: 20, cost:10 },

];
let playerbaseStat = [
  {
    str: 10,
    mgk: 10,
    spd: 10,
    agi: 10,
    def: 10,
    res: 10,
    hp: 100
  }
]
const playerskill = [];
const playerBag = [];
const monsters = [
  {
    name: "slime",
    level: 2,
    str: 4,
    mgk: 4,
    spd: 4,
    agi: 4,
    def: 10,
    res: 5,
    hp: 50
  },
  {
    name: "goblin",
    level: 10,
    str: 25,
    mgk: 0,
    spd: 15,
    agi: 20,
    def: 20,
    res: 20,
    hp: 150
  },
  {
    name: "fanged beast",
    level: 20,
    str: 30,
    mgk: 20,
    spd: 30,
    agi: 30,
    def: 40,
    res: 20,
    hp: 140
  },
  {
    name: "dragon",
    level: 50,
    str: 50,
    mgk: 100,
    spd: 30,
    agi: 10,
    def: 200,
    res: 200,
    hp: 500
  }
]
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to dungeon", "Go to guild", "Go to Inn"],
        "button functions": [goStore, goCave, goGuild, goInn],
        text: "You are in the town square. You see a sign that says \"Store\".",
        bgimage: "town.jpg"
    },
    {
        name: "store",
        "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
        "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
        text: "You enter the store.",
        bgimage: "town_store.jpg"
    },
    {
        name: "start",
        "button text": ["How to play", "Ourbackstory", "Records", "Start the game"],
        "button functions": [tutorials, tutorials/*backstory*/, tutorials/*record*/, goTown],
        text: "Welcome to Dragon Quest. You must defeat the dragon that eat humans.\n Should we start the game? Use the buttons above.",
        bgimage: "cover.jpg"
    },
    {
      name: "phase1",
      "button text": ["choice A", "choice B", "choice C", "choice D"],
      "button functions": [ tutorials, tutorials, tutorials, goTown], /*[phase1A, phase1B, phase3A, phase4A],*/
      text: "four gods has gazed upon ur travelling soul while in passing..\nchoose one of the gods gift\n",
      bgimage: "cover.jpg"
    },
    {
      name: "phase2",
      "button text": ["choice A", "choice B", "choice C", "choice D"],
      "button functions": [ tutorials, tutorials, tutorials, goTown],/*[phase2A, phase2B, phase2C, phase2D],*/
      text: "one of the gods is pleased with your choice \n ...while one gods isnt\n choose again",
      bgimage: "cover.jpg"
    },
    {
      name: "phase3",
      "button text": ["choice A", "choice B", "choice C", "choice D"],
      "button functions": [ tutorials, tutorials, tutorials, goTown], /*[phase3A, phase3B, phase3C, phase3D], */
      text: "You're almost by the end of the river.. Choose one last time.. ",
      bgimage: "cover.jpg"
    },
    {
      name: "guild",
      "button text": ["Go to quest board", "Go to mess hall", "Go to desk", "contribute"],
      "button functions": [ tutorials, tutorials, tutorials, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "You enter the guild. Its as chaotic and lively as ever.",
      bgimage: "cave.jpg"
    },
    {
        name: "Inn",
        "button text": ["Buy Foods", "Check-in", "Ask for info", "Gamble"],
        "button functions": [ tutorials, tutorials, tutorials, goTown],/*[attack, dodge, goTown, gambleInn],*/
        text: "You are fighting a monster.",
        bgimage: "cave2.jpg"
    },
    {
      name: "Buy Equipment",
      "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
      "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
      text: "You enter the store.",
      bgimage: "town_store.jpg"
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
        bgimage: "town.jpg"
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️",
        bgimage: "town.jpg"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" ,
        bgimage: "town.jpg"
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

// initialize buttons
button1.onclick = tutorials;
button2.onclick = tutorials;
button3.onclick = tutorials;/*records;*/
button3.onclick = tutorials;/*Start;*/

function update(location) {
  console.log("hello");
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  text.innerText = location.text;
  monitor.style.backgroundImage = `url(${location.bgimage})`;
  console.log(location.bgimage);
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goGuild() {
  update(locations[1]);
}
function goInn() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyItem() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventoryWeapon.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function buyEquipment() {
  if (currentEquipment < equipment.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentEquipment++;
      goldText.innerText = gold;
      let newEquipment = equipments[currentEquipment].name;
      text.innerText = "You now have a " + newEquipment + ".";
      inventoryEquipment.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a equipment.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellEquipment;
  }
}

function sellWeapon() {
  if (inventoryEquipment.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentEquipment = inventoryEquipment.shift();
    text.innerText = "You sold a " + currentEquipment + ".";
    text.innerText += " In your inventory you have: " + inventoryEquipment;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
function sellWeapon() {
  if (inventoryWeapon.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventoryWeapon.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventoryWeapon;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    fighting === 2 ? winGame() : defeatMonster();
  }
  if (Math.random() <= .1 && inventoryWeapon.length !== 1) {
    text.innerText += " Your " + inventoryWeapon.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function tutorials() {
  update(locations[2])
  text.innerText = "click buttons above so something might happen, goodluck!!";
  log.innerText += "The game isnt final yet but i plan to put a tutorial here\n";
}
function start() {
  update(locations[99])
}

function pick(guess) {
  let numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.indexOf(guess) !== -1) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}

    function changeBackgroundImage(bgimage) {
      
      monitor.style.backgroundImage = `url('${bgimage}')`;
      console.log(bgimage);
    }