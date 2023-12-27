let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let currentEquipment = 0;
let fighting;
let monsterHealth;
let inventoryWeapon = ["stick"];
let inventoryEquipment = ["adventurer gear"];
let CharSkills = ["normal atk"];
let blessingTEXT = "";
let skillCardsTEXT = "";
let skillNumStart = 0;
let CharStatus = [
{ name: "poison", turn: 999  },
{ name: "stun", turn: 1 },
];
let raffleSkill = [];
let CharacterSkillList = [];
let CharacterBlessings = [];
let characterClass;
let hoverImage = "";
let AvatarImage = "";


const backgDescrip = document.querySelector("#descript");
const avatarCard = document.querySelector("#characterDisplay");
const namebutton = document.querySelector("#nameButton");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#characterProfileIcon");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
const monitor = document.querySelector("#game-monitor");
const log = document.querySelector("#logs");
const inGameIconsLeft = document.querySelector('.inGameIconsLeft');

/* attribute */
let charName = document.querySelector('#nameInput');
const charNameText = document.querySelector("#nameText");
const classText = document.querySelector("#classText");
const baseStrText = document.querySelector("#baseStatTextStr");
const baseMgkText = document.querySelector("#baseStatTextMgk");
const baseSpdText = document.querySelector("#baseStatTextSpd");
const baseAgiText = document.querySelector("#baseStatTextAgi");
const baseDefText = document.querySelector("#baseStatTextDef");
const baseResText = document.querySelector("#baseStatTextRes");
const baseHpText = document.querySelector("#baseStatTextHp");
const addedStrText = document.querySelector("#inventoryStatStr");
const addedMgkText = document.querySelector("#inventoryStatMgk");
const addedSpdText = document.querySelector("#inventoryStatSpd");
const addedAgiText = document.querySelector("#inventoryStatAgi");
const addedDefText = document.querySelector("#inventoryStatDef");
const addedResText = document.querySelector("#inventoryStatRes");
const addedHpText = document.querySelector("#inventoryStatHp");




const skillsSetText = document.querySelector("#skillsSetsText");
const blessingDisplay = document.querySelector("#blessingDisplay");
const blessingText = document.querySelector("#blessingText");

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
const playerbaseStat = 
  {
    str: 10,
    mgk: 10,
    spd: 10,
    agi: 10,
    def: 10,
    res: 10,
    hp: 100
  }

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
    hp: 100
  },
  {
    name: "goblin shaman",
    level: 15,
    str: 5,
    mgk: 35,
    spd: 35,
    agi: 0,
    def: 20,
    res: 20,
    hp: 120
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
    name: "evolve fanged beast",
    level: 30,
    str: 20,
    mgk: 20,
    spd: 50,
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
        name: "town square", //0
        "button text": ["Go to store", "Go to dungeon", "Go to guild", "Go to Inn"],
        "button functions": [goStore, goCave, goGuild, goInn],
        text: "You are in the town square. You see a sign that says \"Store\".",
        bgimage: "bgimages/town.jpg"
    },
    {
        name: "store", //1
        "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
        "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
        text: "You enter the store.",
        bgimage: "bgimages/town_store.jpg"
    },
    {
        name: "Intro", //2
        "button text": ["How to play", "Ourbackstory", "Records", "Start the game"],
        "button functions": [tutorials, tutorials/*backstory*/, tutorials/*record*/, phase1],
        text: "Welcome to Dragon Quest. You must defeat the dragon that eat humans.\n Should we start the game? Use the buttons above.",
        bgimage: "bgimages/cover.jpg"
    },
    {
      name: "phase1", //3
      "button text": ["Shield", "Ninja", "Wizard", "Priest"],
      "button functions": [phase1A, phase1B, phase1C, phase1D],
      text: "four gods has gazed upon ur travelling soul while in passing..\nchoose one of the gods gift\n",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "phase2", //4
      "button text": ["random", "random", "random", "random"],
      "button functions": [ phase2E, phase2E, phase2E, phase2E ],
      text: "one of the gods is pleased with your choice \n ...they want to give you a blessing choose a god",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "phase3", //5
      "button text": ["skill", "skill", "skill", "skill"],
      "button functions": [phase3I, phase3I, phase3I, phase3I], /*[phase3A, phase3B, phase3C, phase3D], */
      text: "You're almost by the end of the river.. Choose one last time.. ",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "NameInput", //6
      "button text": ["name", "your", "character", "to continue"],
      "button functions": [ tutorials2, tutorials2, tutorials2, tutorials2],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "last thing.. what is your name",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "goGuild", //7
      "button text": ["Go to quest board", "Go to mess hall", "Go to desk", "contribute"],
      "button functions": [ tutorials, tutorials, tutorials, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "You enter the guild. Its as chaotic and lively as ever.",
      bgimage: "bgimages/cave.jpg"
    },
    {
        name: "goInn", //8
        "button text": ["Buy Foods", "Check-in", "Ask for info", "Gamble"],
        "button functions": [ tutorials, tutorials, tutorials, goTown],/*[attack, dodge, goTown, gambleInn],*/
        text: "You are fighting a monster.",
        bgimage: "bgimages/cave2.jpg"
    },
    {
      name: "Buy Equipment",
      "button text": ["Buy equipment", "Buy weapon", "Buy Equipment", "Go to town square"],
      "button functions": [buyItem, buyWeapon, buyEquipment, goTown],
      text: "You enter the store.",
      bgimage: "bgimages/town_store.jpg"
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
        bgimage: "bgimages/town.jpg"
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️",
        bgimage: "bgimages/town.jpg"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" ,
        bgimage: "bgimages/town.jpg"
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
button4.onclick = phase1;/*Start;*/

nameButton.onclick = declareCharName;

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
function tutorials2() {
  update(locations[6])
  text.innerText = "click buttons above so something might happen, goodluck!!";
  log.innerText += "Name ur character\n";
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




function declareCharName() {
 
  const characterName = charName.value;
  nameButton.style.display = 'none';
  charName.style.display = 'none';
  nameText.innerText = characterName;
  console.log(characterName);
  log.innerText += "START YOUR JOURNEY TO KILL THE DRAGON!";
  

  update(locations[0]);
}
button5.addEventListener('click', function() {
  const expanded  = this.getAttribute('aria-expanded') === 'true' || false;
  
  if (expanded) {
    this.setAttribute('aria-expanded', 'false');
    backgDescrip.classList.add('animate-scale')
    backgDescrip.style.display = 'none'; // Hide the div
    backgDescrip.setAttribute('aria-hidden', 'true');
    ; 
  } else {
    this.setAttribute('aria-expanded', 'true');
    backgDescrip.classList.remove('animate-scale'); 
    backgDescrip.style.display = 'grid'; // Show the div
    backgDescrip.setAttribute('aria-hidden', 'false');
  }
});


function phase1() {
  log.innerText += "You are being reborn to another world.. \n"
  log.innerText += "Your physical form  depends on your choices while in passing \n"
  log.innerText += "Choose your destiny \n"
  update(locations[3]);
}
function phase1A() {
  const charClass = {
    name: "ShieldHero",
    str: 30,
    mgk: 0,
    spd: 5,
    agi: 0,
    def: 15,
    res: 10,
    hp: 150,
    classImage: "newimages/Shield.png",
    classHoverImage: "newimages/hoverShield.png",
    BgCard: "newimages/descrip1.jpg"
  }
  bgDescripAvatar(charClass.BgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "You are the ShieldHero, a male edgy MC you have no bitches\n that turned furry";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;

  updateAttributes();
    setTimeout(function() {
      backgDescrip.style.display = 'grid';
      backgDescrip.style.opacity = '1';     
}, 1000)
  setTimeout(function() {
    update(locations[4]); 
}, 2000)
}
function phase1B() {
  const charClass = {
    name: "ShinobiWoman",
    str: 25,
    mgk: 0,
    spd: 25,
    agi: 15,
    def: 0,
    res: 0,
    hp: 110,
    classImage: "newimages/Ninja.png",
    classHoverImage: "newimages/hoverNinja.png",
    classBgCard: "newimages/descrip2.jpg"
  }
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "Big booby ninja, high speed and killer dmg";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  

  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';     
}, 1000)
  setTimeout(function() {
    update(locations[4]); 
}, 2000)
}
function phase1C() {
  const charClass = {
    name: "MagicalWoman",
    str: 0,
    mgk: 40,
    spd: 5,
    agi: 15,
    def: 0,
    res: 5,
    hp: 110,
    classImage: "newimages/Wizard.png",
    classHoverImage: "newimages/hoverWizard.png",
    classBgCard: "newimages/descrip3.jpg"
  }
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  console.log(playerbaseStat);
  log.innerText += "small boing boing, EXPLOSIOON";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;
  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';     
}, 1000)
  setTimeout(function() {
    update(locations[4]); 
}, 2000)
}
function phase1D() {
  const charClass = {
    name: "CorruptPriest",
    str: 0,
    mgk: 20,
    spd: 10,
    agi: 0,
    def: 15,
    res: 15,
    hp: 120,
    classImage: "newimages/Priest.png",
    classHoverImage: "newimages/hoverPriest.png",
    classBgCard: "newimages/descrip4.jpg" 
  }
  bgDescripAvatar(charClass.classBgCard, charClass.classImage);
  characterClass = charClass.name;
  playerbaseStat.str += charClass.str;
  playerbaseStat.mgk += charClass.mgk;
  playerbaseStat.spd += charClass.spd;
  playerbaseStat.agi += charClass.agi;
  playerbaseStat.def += charClass.def;
  playerbaseStat.res += charClass.res;
  playerbaseStat.hp += charClass.hp;
  HoverImage = charClass.classHoverImage;
  console.log(playerbaseStat);
  log.innerText += " You have become a Priest\nNobody dying in this party. We do it with style by dying slowly with cigarrette and alcohol";
  AvatarImage = charClass.classImage;
  hoverImage = charClass.classHoverImage;

  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';
    avatarCard.style.opacity = "1";     
}, 500);
  setTimeout(function() {
    update(locations[4]); 
}, 1000);
}



function updateAttributes() {

classText.innerText = `${characterClass}`;  
baseStrText.innerText = `${playerbaseStat.str}`;
baseMgkText.innerText = `${playerbaseStat.mgk}`;
baseSpdText.innerText = `${playerbaseStat.spd}`;
baseAgiText.innerText = `${playerbaseStat.agi}`;
baseDefText.innerText = `${playerbaseStat.def}`;
baseResText.innerText = `${playerbaseStat.res}`;
baseHpText.innerText = `${playerbaseStat.hp}`;
}

/*phase2 blessings */

function phase2E() {
  let diceRoll = Math.round(Math.random()*100);
  let blessingsNum = 0;
  console.log(diceRoll);
  if (diceRoll >= 91 ){ 
    blessingsNum = 4;
  } else if (diceRoll < 90 && diceRoll > 61) {
    blessingsNum = 3;
  } else if (diceRoll < 60 && diceRoll > 21) {
    blessingsNum = 2;
  } else {
    blessingsNum = 1;
  }
  console.log(blessingsNum);
  
  blessingRaffle(blessingsNum);
  
}

function blessingRaffle(blessingsNum) {

  const blessings = [
    {name: "FastHands",
    rarity: "common",
    buff: "playerbaseStat.agi += 20;"
    },
    {name: "FastHands",
    rarity: "common",
    buff: "playerbaseStat.agi += 20;"
    },
    {name: "QuickSteps",
    rarity: "common",
    buff: "playerbaseStat.spd += 20;"
    },
    {name: "QuickSteps+",
    rarity: "intermediate",
    buff: "playerbaseStat.spd += 40; playerbaseStat.agi += 10;"
    },
    {name: "LightWeight",
    rarity: "common",
    buff: "playerbaseStat.spd += 30; playerbaseStat.str -= 10;"
    },
    {name: "LightWeight",
    rarity: "common",
    buff: "playerbaseStat.spd += 30; playerbaseStat.str -= 10;"
    },
    {name: "Ironheart",
    rarity: "common",
    buff: "playerbaseStat.hp += 40;"
    },
    {name: "ThickFat",
    rarity: "common",
    buff: "playerbaseStat.res += 20;"
    },
    {name: "ThickSkin",
    rarity: "common",
    buff: "playerbaseStat.def += 20;"
    },
    {name: "ThickFat",
    rarity: "common",
    buff: "playerbaseStat.res += 20;"
    },
    {name: "ThickSkin",
    rarity: "common",
    buff: "playerbaseStat.def += 20;"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SparklingMana",
    rarity: "common",
    buff: "playerbaseStat.mgk += 10; playerbaseStat.res += 10"
    },
    {name: "SpideyPower",
    rarity: "intermediate",
    buff: "playerbaseStat.str += 50;"
    },
    {name: "SpideySense",
    rarity: "intermediate",
    buff: "playerbaseStat.agi += 50;"
    },
    {name: "GiantMagic",
    rarity: "intermediate",
    buff: "playerbaseStat.mgk += 50;"
    },
    {name: "SpideyPower",
    rarity: "intermediate",
    buff: "playerbaseStat.str += 50;"
    },
    {name: "SpideySense",
    rarity: "intermediate",
    buff: "playerbaseStat.agi += 50;"
    },
    {name: "GiantMagic",
    rarity: "intermediate",
    buff: "playerbaseStat.mgk += 50;"
    },
    {name: "FlyingRaijin",
    rarity: "intermediate",
    buff: "playerbaseStat.spd += 50;"
    },
  ]
  
  for(let i = 0; i < blessingsNum; i++) {
   
    let blessingsIndex = Math.floor(Math.random() * blessings.length);
    CharacterBlessings.push(blessings[blessingsIndex].name);
    let blessingTextHtml = `<span class="blessingDisplay ${blessings[blessingsIndex].rarity}"> [${blessings[blessingsIndex].name}] </span>`;
    blessingTEXT += blessingTextHtml;
    log.innerText += "\n You recieved the blessing named " + blessings[blessingsIndex].name + "\n with a [" + blessings[blessingsIndex].rarity + "] rarity and effect of [" + blessings[blessingsIndex].buff + "] .\n";
    eval(blessings[blessingsIndex].buff);
    updateAttributes();
  }
  blessingText.innerHTML = blessingTEXT;
  console.log(CharacterBlessings);
  let diceRoll2 = Math.floor(Math.random()*100);
  if (diceRoll2 > 60) {
    log.innerText += "\n the gods would like to give you more";
    update(locations[4]);
  } else {
    update(locations[5]);
  }
}
function bgDescripAvatar(bgCardImage, Avatar) {
  backgDescrip.style.backgroundImage = `url('${bgCardImage}')`;
  avatarCard.style.backgroundImage = `url('${Avatar}')`;
 
}


class Skill {


  constructor(name, type, rarity, target, baseDamage = 0, additionalDamage, baseHeal = 0, additionalHeal, special, manaCost = 0, cost = 0) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.target = target;
    this.baseDamage = baseDamage;
    this.additionalDamage = additionalDamage;
    this.baseHeal = baseHeal;
    this.additionalHeal = additionalHeal;
    this.special = special;
    this.cost = cost;
    this.manaCost = manaCost;
  }

  
}

// Skills available in the market
const skillDex = {
  normalatk: new Skill("Normal Atk", "damage", "common", "enemy", 0, "atk + mgk", 0, 0, "none", 0, 50),

  manaball: new Skill("Manaball", "damage", "common", "enemy", 20, "mgk * 1.5", 0, 0, "none", 20, 50),
  manablast: new Skill("Manablast", "damage", "common", "enemy", 20, "mgk * 2.2", 0, 0, "none", 20, 50),
  manabarrier: new Skill("Manabarrier", "shield", "common", "ally", 0, 0, 0, 0, "shield = 2 * (res * mgk);", 20, 50),
  
  shieldbash: new Skill("Shieldbash", "damage", "common", "enemy", 0, 0, 20, "def + res", "none", 0, 50),
  bullcharge: new Skill("Bullcharge", "damage", "common", "enemy", 0, 0, 20, "(def + res)* 1.2", "none", 0, 50),

  slash: new Skill("Slash", "damage", "common", "enemy", 10, "str*1.2", 0, 0, "none", 0, 50),
  heavyslash: new Skill("Heavyslash", "damage", "common", "enemy", 10, "str * 2", 0, 0, "none", 0, 50),

  heal: new Skill("Heal", "heal", "common", "ally", 0, 0, 20, "mgk * 2", "none", 20, 50),
  hugeheal: new Skill("Hugeheal", "heal", "common", "ally", 0, 0, 20, "mgk * 2", "none", 20, 50),

  lizardskin: new Skill("Lizardskin", "buff", "common", "ally", 0, 0, 20,  0, "res += res + (mgk * 1.2); turn = 2;", 20, 50),
  windaura: new Skill("Windaura", "buff", "common", "ally", 0, 0, 20,  0, "spd += 30; turn = 3;", 20, 50),
}
skillDexLibrary = [ "normalatk", "manaball", "manablast", "manabarrier", "shieldbash", "bullcharge", "slash", "heavyslash", "heal", "hugeheal", "lizardskin", "windaura"];


/*
console.log(skillDex["shieldbash"].type);
locations.forEach((item , index) => {
  console.log(index+ skillDexLibrary[index]);
});
console.log(skillDex["bullcharge"]); */

function phase3I() {
  let diceRoll3 = Math.round(Math.random()*100);
  console.log(diceRoll3);
  

  if (diceRoll3 >= 91 ){ 
    skillNumStart = 5;
  } else if (diceRoll3 < 90 && diceRoll3 > 81) {
    skillNumStart = 4;
  } else if (diceRoll3 < 80 && diceRoll3 > 41) {
    skillNumStart = 3;
  } else {
    skillNumStart = 2;
  }
  let skillBunos = [];
  skillBunos.push(skillDexLibrary[0]);

  for (let i = 0 ; i < skillDexLibrary.length; i++){
  if (playerbaseStat.str > 15 && i >= 6 & i <= 7) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if ((playerbaseStat.def >= 15 || playerbaseStat.res >= 15) && i >= 3 & i <= 5) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.mgk > 15 && i >= 2 & i <= 3) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.hp > 150 && i >= 9 & i <= 12) {
    skillBunos.push(skillDexLibrary[i]);
  }
 
}
  
  
  for (let i = 0; i < skillNumStart; i++) {
    
    let skillBunosIndex = Math.floor(Math.random() * skillBunos.length);
    CharSkills.push(skillBunos[skillBunosIndex]);
    let skillCardsTT = `<span class="skillDisplay ${skillDex[skillBunos[skillBunosIndex]].rarity}"> [${skillBunos[skillBunosIndex]}] </span>`;
    skillCardsTEXT += skillCardsTT;
    log.innerText += "\n You recieved the skill named " + skillBunos[skillBunosIndex] + "\n with a [" + skillDex[skillBunos[skillBunosIndex]].rarity + "] rarity.\n";
    
  }
  console.log(skillCardsTEXT);
  console.log(CharSkills);
  skillsSetText.innerHTML = skillCardsTEXT;

  
  let diceRoll2 = Math.floor(Math.random()*100);
  if (diceRoll2 > 50) {
    log.innerText += "\n the gods would like to give you more";
    update(locations[5]);
  } else {
    nameButton.style.display = 'block';
    charName.style.display = 'block';
    update(locations[6]);
  }
 
}

/*
function skillRaffle() {
  if(playerbaseStat.str > 20) {
    
  }
  if(playerbaseStat.mgk > 20) {
    
  }
  if(playerbaseStat.def > 20
    || playerbaseStat.res > 20) {
    
  }
  if(playerbaseStat.agi > 20) {
    
  }
}

function skillRollRaffle(num) {
  for(let i = 0; i < num; i++){

  }
}
*/














//event listeners

avatarCard.addEventListener('mouseover', () => {
  setTimeout(function() {
    avatarCard.style.backgroundImage = `url('${hoverImage}')`;
    avatarCard.style.transform = 'scaleY(1.15)';
   
    console.log(hoverImage);
    console.log(skillDex["manaball"].cost);   
}, 500);
  
});

avatarCard.addEventListener('mouseout', () => {
  setTimeout(function() {
  avatarCard.style.backgroundImage = `url('${AvatarImage}')`;
  avatarCard.style.transform = 'scaleY(1)';
  console.log(AvatarImage);
}, 200);
});
