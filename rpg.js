let xP = 0;
let healtH = 100;
let manA = 100;
let golD = 50;
let charLevel = 0;
let currentWeapon = 0;
let currentEquipment = 0;
let monsterHealth;
let inventoryWeapon = ["stick"];
let inventoryEquipment = ["adventurer gear"];
let CharSkills = ["normal atk"];
let blessingTEXT = "";
let skillCardsTEXT = "";
let skillNumStart = 0;
let characterName = "";
let towndistance = 0;
let heroesParty = [];
let CharStatus = [
{ name: "poison", turn: 999  },
{ name: "stun", turn: 1 },
];
let score = 0;
let raffleSkill = [];
let CharacterSkillList = [];
let CharacterBlessings = [];
let characterClass = "";
let hoverImage = "";
let AvatarImage = "";

//profilePanel
const backgDescrip = document.querySelector("#descript");
const avatarCard = document.querySelector("#characterDisplay");
const namebutton = document.querySelector("#nameButton");
const skillsSetText = document.querySelector("#skillsSetsText");
const blessingDisplay = document.querySelector("#blessingDisplay");
const blessingText = document.querySelector("#blessingText");
const scoreText = document.querySelector("#scoreText");
//buttons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#characterProfileIcon");
const button9 = document.querySelector("#button9");
const button10 = document.querySelector("#button10");
const button11 = document.querySelector("#button11");
const button12 = document.querySelector("#button12");

//statusText
const text = document.querySelector("#text");
const manaText = document.querySelector("#manaText");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
const monitor = document.querySelector("#game-monitor");
const log = document.querySelector("#logs");
//topbuttons
const inGameIconsLeft = document.querySelector('.inGameIconsLeft');
//modal1CharacterName
const modal1 = document.querySelector("#enterCharacterName");




//fight
const fightGame = document.querySelector("#fightGame");
const containersForTheeMonsters = document.querySelector(".containersForTheeMonsters");
var distancefromTown = 0;
const characterFaceAvatar = document.querySelector("#characterFaceAvatar");
const nameTextAvatar = document.querySelector("#nameTextAvatar");
const healthTextAvatar = document.querySelector("#healthTextAvatar");
const manaTextAvatar = document.querySelector("#manaTextAvatar");
let fightAvatarImageGlobal = "";
const FightText = document.querySelector("#FightText");

/* attribute */
let charName = document.querySelector('#nameInput');
const nameText = document.querySelector("#nameText");
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


const maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
const  maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);

const playerskill = [];
const playerBag = [];



//futureshopITems
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

const monsters = [
  { //0
    name: "slime",
    level: 2,
    health: 100,
    mana: 100,
    str: 4,
    mgk: 4,
    spd: 4,
    agi: 4,
    def: 10,
    res: 5,
    monsterImage: "monsImages/slime.jpg"
  },
  { //1
    name: "goblin",
    level: 10,
    health: 200,
    mana: 100,
    str: 25,
    mgk: 0,
    spd: 15,
    agi: 20,
    def: 20,
    res: 20,
    monsterImage: "monsImages/goblin.jpg"
  },
  { //2
    name: "goblin shaman",
    level: 15,
    health: 150,
    mana: 200,
    str: 5,
    mgk: 35,
    spd: 25,
    agi: 0,
    def: 20,
    res: 20,
    monsterImage: "monsImages/goblinShaman.jpg"
  },
  { //3
    name: "goblin Hob",
    level: 25,
    health: 450,
    mana: 200,
    str: 45,
    mgk: 0,
    spd: 25,
    agi: 0,
    def: 60,
    res: 60,
    monsterImage: "monsImages/hobGoblin.png"
  },
  {
    name: "fanged beast",
    level: 20,
    health: 400,
    mana: 200,
    str: 30,
    mgk: 20,
    spd: 30,
    agi: 30,
    def: 40,
    res: 20,
    monsterImage: "monsImages/legosi.jpg"
  },
  { //5
    name: "evolve beast",
    level: 30,
    health: 500,
    mana: 400,
    str: 20,
    mgk: 20,
    spd: 50,
    agi: 30,
    def: 40,
    res: 20,
    monsterImage: "monsImages/magicLegosi.jpg"
  },
  { //6
    name: "dragon",
    level: 50,
    health: 1000,
    mana: 1000,
    str: 50,
    mgk: 100,
    spd: 30,
    agi: 10,
    def: 200,
    res: 200,
    monsterImage: "monsImages/veldora.jpg"
  }
]
const locations = [
    {
        name: "town square", //0
        "button text": ["Go to store", "Go to dungeon", "Go to guild", "Go to Inn"],
        "button functions": [goTown, goDungeon, goTown, goInn],
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
      "button text": ["recieve", "a", "random", "blessing"],
      "button functions": [ phase2E, phase2E, phase2E, phase2E ],
      text: "one of the gods is pleased with your choice \n ...they want to give you a blessing choose a god",
      bgimage: "bgimages/afterlife.jpg"
    },
    {
      name: "phase3", //5
      "button text": ["recieve", "a", "random", "skill"],
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
      name: "goDungeon", //7
      "button text": ["dungeon time", "dungeon time", "DUNGEON!", "back to town"],
      "button functions": [ goGoblin, tutorials, tutorials, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "You enter the goblin cave",
      bgimage: "bgimages/cave.jpg"
    },
    {
    name: "goGoblin", //8
    "button text": ["forward", "forward", "forward", "back"],
    "button functions": [ caveEvent, caveEvent, caveEvent, goBackTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
    text: "you explore the goblin cave",
    bgimage: "bgimages/cave.jpg"
    },
    {
      name: "goForest", //9
      "button text": ["forward", "forward", "forward", "back"],
      "button functions": [tutorials, tutorials, tutorials, goBackTown],/*[attack, dodge, goTown, gambleInn],*/
      text: "You are fighting a monster.",
      bgimage: "bgimages/cave2.jpg"
    },
    {
      name: "goFarFarAway", //10
      "button text": ["forward", "forward", "forward", "back"],
      "button functions": [tutorials, tutorials, tutorials, goBackTown],/*[attack, dodge, goTown, gambleInn],*/
      text: "You are fighting a monster.",
      bgimage: "bgimages/cave2.jpg"
    },
    {
        name: "goInn", //11
        "button text": ["Rest", "Rest", "Rest", "exit"],
        "button functions": [ checkIn, checkIn, checkIn, goTown],/*[attack, dodge, goTown, gambleInn],*/
        text: "You are in the Inn rent a room to restore mana and health for 50 gold",
        bgimage: "bgimages/Inn.jpg"
    },
    {
      name: "Buy guild", //12
      "button text": ["Buy equipment1", "Buy weapon", "Buy Equipment", "Go to town square"],
      "button functions": [tutorials, tutorials, tutorials, goBackTown],
      text: "You enter the guild.",
      bgimage: "bgimages/receptionist.jpg"
    },

];

// initialize buttons
button1.onclick = tutorials;
button2.onclick = tutorials;
button3.onclick = tutorials;/*records;*/
button4.onclick = phase1;/*Start;*/
nameButton.onclick = declareCharName;
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




//updates
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
//functioning locations
function goTown() {
  update(locations[0]);
}



function goStore() {
  update(locations[1]);
}

function goDungeon() {
  distancefromTown = 0;
  update(locations[7]);
}
function goGoblin() {
  console.log(characterName);
  update(locations[8]);
}


//non-Functioninglocations
function goGuild() {
  update(locations[12]);
}
function goInn() {
  update(locations[11]);
}

function checkIn() {
  InitializeCharStatus();
  if (golD >= 50) {
  golD -= 50;
  goldText.innerText = golD;
  update(locations[0]);
  } else {
    log.innerText = "\nyou dont have enough gold";
  update(locations[0]);
  }

}

function buyItem() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = golD;
    healthText.innerText = healtH;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = golD;
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
      goldText.innerText = golD;
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
    golD += 15;
    goldText.innerText = golD;
    let currentEquipment = inventoryEquipment.shift();
    text.innerText = "You sold a " + currentEquipment + ".";
    text.innerText += " In your inventory you have: " + inventoryEquipment;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
function sellWeapon() {
  if (inventoryWeapon.length > 1) {
    golD += 15;
    goldText.innerText = golD;
    let currentWeapon = inventoryWeapon.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventoryWeapon;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}


/*temporary function */
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


function changeBackgroundImage(bgimage) {
      
      monitor.style.backgroundImage = `url('${bgimage}')`;
      console.log(bgimage);
}

function declareCharName() {
 
  characterName = charName.value;
  nameButton.style.display = 'none';
  charName.style.display = 'none';
  modal1.style.display = 'none';
  nameText.innerText = characterName;
  console.log(characterName);

  log.innerText += "\nSTART YOUR JOURNEY TO KILL THE DRAGON!";
  log.innerText += "\n press charater button on top to hide character panel";
  InitializeCharStatus();
  update(locations[0]);
}



function phase1() {
  log.innerText += "You are being reborn to another world.. \n"
  log.innerText += "Your physical form  depends on your choices while in passing \n"
  log.innerText += "Choose your destiny \n"
  update(locations[3]);
}
function phase1A() {
  const charClass = {
    name: "ShieldHero",
    str: 20,
    mgk: 0,
    spd: 5,
    agi: 0,
    def: 20,
    res: 20,
    hp: 150,
    classImage: "newimages/Shield.png",
    classHoverImage: "newimages/hoverShield.png",
    BgCard: "newimages/descrip1.jpg",
    classFightAvatar: "avatarChar/ShieldAvatar.png"
  }
  characterClass = charClass.name;
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
  fightAvatarImageGlobal = charClass.classFightAvatar;
  console.log(fightAvatarImageGlobal);
  updateAttributes();
    setTimeout(function() {
      backgDescrip.style.display = 'grid';
      backgDescrip.style.opacity = '1';     
}, 1000)

  update(locations[4]); 

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
    classBgCard: "newimages/descrip2.jpg",
    classFightAvatar: "avatarChar/NinjaAvatar.png"
  }
  
  characterClass = charClass.name;
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
  fightAvatarImageGlobal = charClass.classFightAvatar;

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
    classBgCard: "newimages/descrip3.jpg",
    classFightAvatar: "avatarChar/WizardAvatar.png"
  }
  
  characterClass = charClass.name;
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
  fightAvatarImageGlobal = charClass.classFightAvatar;
  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';     
}, 1000)
    update(locations[4]); 

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
    classBgCard: "newimages/descrip4.jpg",
    classFightAvatar: "avatarChar/PriestAvatar.png"

  }
  
  characterClass = charClass.name;
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
  fightAvatarImageGlobal = charClass.classFightAvatar;

  updateAttributes();
  setTimeout(function() {
    backgDescrip.style.display = 'grid';
    backgDescrip.style.opacity = '1';
    avatarCard.style.opacity = "1";     
}, 500);
    update(locations[4]); 

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
  if (diceRoll2 > 80) {
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



// Skills available in the market
const skillDex = [
  //0
  {name: "normal atk", type: "damage", rarity: "common", target: "enemy", baseDamage: 0, additionalDamage: "str + mgk", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 0, cost: 50},
  {name: "manaball", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 1.5", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 30, cost: 50},
  {name: "manablast", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 2.2", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 50, cost: 50},
  {name: "manabarrier", type: "buff", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 0, additionalHeal: 0, special: "res += (1.5 * mgk)", manaCost: 30, cost: 50},
  //4
  {name: "shieldbash", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: "1.5 * (def + res)", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 30, cost: 50},
  //5
  {name: "bullcharghe", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "(def + res)* 1.2", special: "", manaCost: 30, cost: 50},

  {name: "slash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 1.2", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 30,  cost: 50},
  {name: "heavyslash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 2", baseHeal: 0, additionalHeal: 0, special: "", manaCost: 50, cost: 50},

  {name: "heal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "", manaCost: 10, cost: 50},
  {name: "hugeheal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "", manaCost: 20, cost: 50},
  //10
  {name: "lizardskin",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "res += 10 + (mgk * 1.2)", manaCost: 30, cost: 50},
  {name: "windaura",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "spd += 20", manaCost: 20, cost: 30},

  //12
  {name: "Wrath", type: "damage", rarity: "unique", target: "ally", baseDamage: playerbaseStat.def, additionalDamage: "(str * 2) + res + def", baseHeal: 0, additionalHeal:  0, special: "dmg += ((res + def) / 3)", manaCost: 50, cost: 50},
  {name: "Swallow Reversal",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.spd, additionalDamage: "(spd + agi) * 1.5", baseHeal: 0, additionalHeal:  0, special: "spd += 10", manaCost: 50, cost: 50},
  {name: "Explosion",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.mgk, additionalDamage: "mgk + (mana * 2)", baseHeal: 0, additionalHeal:  0, special: "mana = 0", manaCost: 0, cost: 50},
  {name: "purification",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.res, additionalDamage: "(2 * res) + def", baseHeal: 0, additionalHeal: "", special: "health += (res + def)", manaCost: 50, cost: 50}

]
monsterSkillDex = [
  
    {name: "fang", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str", baseHeal: 0, additionalHeal: "", special: "", manaCost: 20, cost: 50},
    {name: "heavySwing", type: "dmg", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str + def + res", baseHeal: 0, additionalHeal: "", special: "", manaCost: 60, cost: 50},
    {name: "dark pulse", type: "dmg", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "mgk", baseHeal: 0, additionalHeal: "", special: "", manaCost: 30, cost: 50},
    
    {name: "heal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "", manaCost: 20, cost: 50},
    {name: "hugeheal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "", manaCost: 40, cost: 50},

    
    {name: "dragonBreath", type: "dmg", rarity: "common", target: "enemy", baseDamage: 0, additionalDamage: "str + mgk", baseHeal: 0, additionalHeal: "", special: "", manaCost: 60, cost: 50},
    {name: "dragonClaw", type: "dmg", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "mgk", baseHeal: 0, additionalHeal: "", special: "", manaCost: 30, cost: 50},
    
  
]

function phase3I() {
  let skillDexLibrary = [ "normal atk", "manaball", "manablast", "manabarrier", "shieldbash", "bullcharge", "slash", "heavyslash", "heal", "hugeheal", "lizardskin", "windaura"];
  let uniqueSkill = ["Wrath", "Swallow Reversal", "Explosion", "purification"];
  let diceRoll3 = Math.round(Math.random()*100);
  console.log(diceRoll3);
  if (characterClass == "ShieldHero") {
    CharSkills.push(uniqueSkill[0]);
  } else if (characterClass == "ShinobiWoman") {
    CharSkills.push(uniqueSkill[1]);
  } else if (characterClass == "MagicalWoman") {
    CharSkills.push(uniqueSkill[2]);
  } else if (characterClass == "CorruptPriest") {
    CharSkills.push(uniqueSkill[3]);
  } 

  if (diceRoll3 >= 81 ){ 
    skillNumStart = 3;
  } else if (diceRoll3 < 80 && diceRoll3 > 41) {
    skillNumStart = 2;
  } else {
    skillNumStart = 1;
  }
  let skillBunos = [];
  skillBunos.push(skillDexLibrary[0]);

  for (let i = 0 ; i < skillDexLibrary.length; i++){
  if (playerbaseStat.str > 15 && i >= 6 && i <= 7) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if ((playerbaseStat.def >= 15 || playerbaseStat.res >= 15) && i >= 3 && i <= 5) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.mgk > 15 && i >= 2 && i <= 3) {
    skillBunos.push(skillDexLibrary[i]);
  }
  if (playerbaseStat.hp > 150 && i >= 9 && i <= 12) {
    skillBunos.push(skillDexLibrary[i]);
  }
 
}
  
  
for (let i = 0; i < skillNumStart; i++) {
    
    let skillBunosIndex = Math.floor(Math.random() * skillBunos.length);
    if (CharSkills.includes(skillBunos[skillBunosIndex])) {
      let diceRoll4 = Math.round(Math.random()*100);
      if (diceRoll4 >= 81 ){ 
        playerbaseStat.str += 10;
        playerbaseStat.mgk += 10;
        console.log("str and mgk");
      } else if (diceRoll4 < 80 && diceRoll4 > 61) {
        playerbaseStat.def += 10;
        playerbaseStat.res += 10;
        console.log("def res");
      } else if (diceRoll4 < 60 && diceRoll4 > 41) {
        playerbaseStat.spd += 20;
        console.log("speed");
      } else {
        playerbaseStat.hp += 20;
        playerbaseStat.agi += 10;
        console.log("hp and agi");
      }
      updateAttributes();
      console.log(`${skillBunos[skillBunosIndex].name} is in the skillList already!`);
    } else {
      CharSkills.push(skillBunos[skillBunosIndex]);
    let skillCardsTT = `<span class="skillDisplay ${skillDex[skillBunosIndex].rarity}"> [${skillDex[skillBunosIndex].name}] </span>`;
    skillCardsTEXT += skillCardsTT;
    log.innerText += "\n You recieved the skill named " + skillDex[skillBunosIndex].name + "\n with a [" + skillDex[skillBunosIndex].rarity + "] rarity.\n";
    }
   
  }
  let skillCardsTEXTUNique = `<span class="skillDisplay unique"> [ ${CharSkills[1]} ] </span>`;
  skillCardsTEXT += skillCardsTEXTUNique;
  console.log(skillCardsTEXT);
  console.log(CharSkills);
  skillsSetText.innerHTML = skillCardsTEXT;

  
  
    modal1.style.display = 'flex';
    charName.style.display = 'block';
    nameButton.style.display = 'block';
    update(locations[6]);
  
 
}

function caveEvent() {
  let diceRoll6 = Math.floor(Math.random()*100);
  console.log(diceRoll6);
  if (diceRoll6 > 90) {
    treasureRoom();
  }
  if (diceRoll6 > 70 && diceRoll6 < 89) {
    campRoom();
  } else {
    gFight();
  }
} 
function treasureRoom() {
  console.log("yey tressure");
  golD += 100;
  goldText.innerText = golD;
  towndistance++;
  log.innerText += "\nU stumble upon a treasure chest";
  goGoblin();
}
function campRoom() {
  
  if (healtH <= maxhealtH) {
    healtH += 30;
  }
  
  healthText.innerText = healtH;
  manaText.innerText = manA;
  log.innerText += "\nyou spot an adventurers camp\n your rested and regain some health";
  console.log("refreshing");
  goGoblin();
}

function gFight() {
  distancefromTown++;
  let diceRoll6 = Math.floor(Math.random()*100);
  let enemyNum = 0;
  diceRoll6 += (distancefromTown * 25);
  if (diceRoll6 < 60) {
    enemyNum = 1;
  } else if (diceRoll6 < 100 && diceRoll6 > 61) {
    enemyNum = 2;
  } else {
    enemyNum = 3;
  }
  console.log(enemyNum + "enemy");
  fighting(enemyNum);
  
}



function fighting(number) {
  fightGame.style.display = 'flex';
  
/* stats inside the fight */
let monstersFight = [];
let monsterID = [];
let monsterImageinFight = [];
let healthFight = [];
let manaFight = [];
let strFight = [];
let mgkFight = [];
let spdFight = [];
let agiFight = [];
let defFight = [];
let resFight = [];
let EveryoneOnFightSpeed = [];
let indexSpeed = [];
let turnFight = [];
let SpeedSum = 0;
let CurrentTurn = 0;
let WhosTurn = [];

  /* character join the Fight */
  healthFight.push(healtH);
  manaFight.push(manA);
  strFight.push(playerbaseStat.str);
  mgkFight.push(playerbaseStat.mgk);
  spdFight.push(playerbaseStat.spd);
  agiFight.push(playerbaseStat.agi);
  defFight.push(playerbaseStat.def);
  resFight.push(playerbaseStat.res);

  //initiaize2ndbuttons
  button9.onclick = tutorials3;
  button10.onclick = tutorials3;
  button11.onclick = tutorials3;
  button12.onclick = tutorials3;

  /*i tried using constructor but im too beginner and makes me work slower
  since i have to apply everything as i learned it.
  */
  initializeGoFight();
  let EnemyCardsTextAll = "";
  let ID = "";
  if (distancefromTown > 200) {
    monstersFight.push(monsters[5].name);
    monsterID.push(ID); 
  } else {
  for(let i = 0; i < number; i++) {
    let diceRoll = Math.floor(Math.random()*10);
    diceRoll += (distancefromTown * 30);
    if (i == 0) {
      ID = "A";
    } else if (i == 1) {
      ID = "B";
    } else if (i == 2) {
      ID = "C";
    }
    
    if (diceRoll <= 30) {
      monstersFight.push(monsters[0].name);
      monsterID.push(ID);
    } else if (diceRoll > 31 && diceRoll <= 60 ) {
      monstersFight.push(monsters[1].name);
      monsterID.push(ID);
    } else if (diceRoll > 61 && diceRoll <= 80 ) {
      monstersFight.push(monsters[2].name);
      monsterID.push(ID); }
      else if (diceRoll > 81 && diceRoll <= 90 ) {
      monstersFight.push(monsters[3].name);
      monsterID.push(ID);
    }
    else if (diceRoll >= 91 && diceRoll < 150) {
      monstersFight.push(monsters[4].name);
      monsterID.push(ID);
    } else if (diceRoll >= 151){
      monstersFight.push(monsters[5].name);
      monsterID.push(ID); }
  }
}
    /* INITIALIZE MONSTER CARDS need another function to update monstercards*/
    console.log(monstersFight);
    console.log("monserID");
    console.log(monsterID);
  for(let i = 0; i < monstersFight.length; i++) {
    for (let j = 0; j < monsters.length; j++) {
      if( monsters[j].name == monstersFight[i]){
        
        monsterImageinFight.push(monsters[j].monsterImage);
        healthFight.push(monsters[j].health);
        manaFight.push(monsters[j].mana);
        strFight.push(monsters[j].str);
        mgkFight.push(monsters[j].mgk);
        spdFight.push(monsters[j].spd);
        agiFight.push(monsters[j].agi);
        defFight.push(monsters[j].def);
        resFight.push(monsters[j].res);
        
        

        const EnemyCardsText = `  
        <div class="monsterContainer">
        <div class="monsterImg">
        <img src="${monsters[j].monsterImage}">
        </div>
        <div class="descriptEnemyFight">
        <p> ${monsters[j].name} ${monsterID[i]} <p>
        <p> Health: ${monsters[j].health} </p>
        <p> Mana: ${monsters[j].mana} </p>
        </div>
        </div>
        `;

        console.log(monstersFight);
        console.log(healthFight);
        console.log(manaFight);
        console.log(strFight);
        console.log(mgkFight);
        console.log(spdFight);
        console.log(agiFight);
        console.log(defFight);
        console.log(resFight);
        
        EnemyCardsTextAll += EnemyCardsText;
      }
      containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
    }
  }
  /* to get speed of every character involve in the fight */
  EveryoneOnFightSpeed.push(playerbaseStat.spd);
  /* initial speedSum number used for index in turns later */ 
  SpeedSum = playerbaseStat.spd;
  for (let k = 1; k < spdFight.length; k++) {
    EveryoneOnFightSpeed.push(spdFight[k]);
    SpeedSum += spdFight[k];
    
    console.log("SpeedSum"+ SpeedSum);
  }
  for(let m = 0; m < EveryoneOnFightSpeed.length; m++){
  let speedCalcOnFight = Math.floor((SpeedSum / (EveryoneOnFightSpeed[m])));
  console.log(speedCalcOnFight + "spdcaclonFight");
  
  indexSpeed.push(Number(speedCalcOnFight));
  
  }
  console.log("indexSpeed");
  console.log(EveryoneOnFightSpeed);
  console.log(indexSpeed);
  
  let turn = 0;
  
  for (let l = 0; l < SpeedSum; l++) {
    while(turn < 80) {
    turnFight.push(turn);
    turn++;
  }}
  console.log(turnFight);
  let z = 0;

  for (let s = 0 ; s < turnFight.length ; s++) {
      while(z < 20) {
      if ((turnFight[s] % indexSpeed[0]) == 0) {
        WhosTurn.push(characterName);
      }
      if ((turnFight[s] % indexSpeed[1]) == 0){
        WhosTurn.push(monsterID[0]);
      }
      
      if ((turnFight[s] % indexSpeed[2]) == 0){
        WhosTurn.push(monsterID[1]);
      }
      
      if ((turnFight[s] % indexSpeed[3]) == 0){
        WhosTurn.push(monsterID[2]);
      }
      z++;
    }
}
  console.log(WhosTurn);


  const battlePhase = [
    {
      name: "yourTurn",
      "button text": ["Normal Atk", "Skills", "UniqueSkill", "flee"],
      "button functions": [normalAtk, useSkill, uniqueSkill, Run],
      text: "Your turn"
    },
    {
      name: "endYourTurn",
      "button text": ["continue", "---", "---", "---"],
      "button functions": [endMyTurn, tutorials3, tutorials3, tutorials3],
      text: "End turn"
    },
    {
      name: "enemyTurn",
      "button text": ["continue", "continue", "continue", "continue"],
      "button functions": [continueBattle, continueBattle, continueBattle, continueBattle],
      text: "Enemy Turn"
    },
    {
      name: "End",
      "button text": ["End", "continue", "continue", "continue"],
      "button functions": [endBattle, tutorials3, tutorials3, tutorials3],
      text: "You have Won the battle!"
    },
    {
      name: "other",
      "button text": ["run", "continue", "continue", "continue"],
      "button functions": [continueBattle, continueBattle, continueBattle, continueBattle],
      text: "Enemy Turn"
    }
  ];
  

  TurnChecker(CurrentTurn);

  function updatephase(Phases) {
    
    updateMonsterHealth();

    monsterStats.style.display = "none";
    button9.innerText = Phases["button text"][0];
    button10.innerText = Phases["button text"][1];
    button11.innerText = Phases["button text"][2];
    button12.innerText = Phases["button text"][3];
    button9.onclick = Phases["button functions"][0];
    button10.onclick = Phases["button functions"][1];
    button11.onclick = Phases["button functions"][2];
    button12.onclick = Phases["button functions"][3];
    text.innerText = Phases.text;
 
    

  }

  function TurnChecker(TurnCheckerTurn) {
    console.log(WhosTurn[TurnCheckerTurn]);
    if(monstersFight.length <= 0){
      button9.classList.remove('inactivebutton');
      updatephase(battlePhase[3]);
    } else {
    if(WhosTurn[TurnCheckerTurn] == characterName) {
       button9.classList.remove('inactivebutton');
       button10.classList.remove('inactivebutton');
       button11.classList.remove('inactivebutton');
       button12.classList.remove('inactivebutton');
      FightText.innerText += "\nYour TURN..";
      FightText.scrollTop = FightText.scrollHeight;
      updatephase(battlePhase[0]);
    } else if ((
    (WhosTurn[CurrentTurn]  ==  monsterID[0]) ||
    (WhosTurn[CurrentTurn]  ==  monsterID[1]) ||
    (WhosTurn[CurrentTurn]  ==  monsterID[2]) )
    && healthFight[1] > 0 )
    {
       
      FightText.innerText += "\nEnemy turn ..";
        button9.classList.remove('inactivebutton');
       button10.classList.remove('inactivebutton');
       button11.classList.remove('inactivebutton');
       button12.classList.remove('inactivebutton');
      updatephase(battlePhase[2]);
    } else {
      CurrentTurn++;
      FightText.innerText += `\n current turn: ${CurrentTurn}`;
      FightText.scrollTop = FightText.scrollHeight;
      TurnChecker(CurrentTurn);
    }
  }
  }







  function normalAtk() {
    //initialize
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
   

    button9.onclick = tutorials3;
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button10.innerText = " --- ";
    button11.innerText = " --- ";
      if(monstersFight.length >= 1 ){
        button9.innerText = `${monstersFight[0]} ${monsterID[0]}`;
        button9.onclick = normalAtking1;
        button9.classList.remove('inactivebutton');
      }
      if (monstersFight.length >= 2 ){
        
        button10.onclick = normalAtking2;
       
        button10.innerText = `${monstersFight[1]} ${monsterID[1]}`;
        button11.innerText = " --- ";
        button10.classList.remove('inactivebutton');
      }
      if(monstersFight.length >= 3 ){
       
        button11.onclick = normalAtking3;
        button11.innerText = `${monstersFight[2]} ${monsterID[2]}`;
        button11.classList.remove('inactivebutton');
      }
  
      button12.onclick = InitializeMyTurn();
      button12.innerText = "go back";
      button12.classList.remove('inactivebutton');
  
  }

  function useSkill() {
    //initialize
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
   
    console.log(CharSkills);
    button9.onclick = tutorials3;
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button10.innerText = " --- ";
    button11.innerText = " --- ";
      if(CharSkills.length >= 3){
        button9.innerText = `${CharSkills[2]}`;
        button9.onclick = function() {useSkillOn(CharSkills[2])};
      }
      if (CharSkills.length >= 4){
        button10.onclick = function() {useSkillOn(CharSkills[3])};
        button10.innerText = `${CharSkills[3]}`;
        button11.innerText = " --- ";
        button10.classList.remove('inactivebutton');
      }
      if(CharSkills.length >= 5){
        button11.onclick = function() {useSkillOn(CharSkills[4])};
        button10.innerText = `${CharSkills[4]}`;
        button11.classList.remove('inactivebutton');
      }
  
      button12.onclick = InitializeMyTurn();
      button12.innerText = "go back";
      button12.classList.remove('inactivebutton');
      button12.classList.remove('inactivebutton');
  
  }
  function uniqueSkill() {
    let str = strFight[0];
    let spd = spdFight[0];
    let res = resFight[0];
    let agi = agiFight[0];
    let def = defFight[0];
    let mgk = mgkFight[0];
    let mana = manaFight[0];
    let health = healthFight[0];
    let j = 0;
    for(let i = 0; i < skillDex.length ; i++) {
      if(CharSkills[1] == skillDex[i].name) {
        j = i;
      }
    }
    let dmg = 0;
      dmg = skillDex[j].baseDamage + Math.floor(eval(skillDex[j].additionalDamage));
      eval(skillDex[j].special);
      manA -= skillDex[j].manaCost;
      button9.classList.add('inactivebutton');
      button10.classList.add('inactivebutton');
      button11.classList.add('inactivebutton');
      
      strFight[0] = str;
      spdFight[0] =  spd;
      resFight[0] = res;
      agiFight[0] = agi;
      defFight[0] = def;
      mgkFight[0] = mgk;
      manaFight[0] = mana;
      healthFight[0] = health;
    button9.onclick = tutorials3;
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button10.innerText = " --- ";
    button11.innerText = " --- ";
      if(monstersFight.length >= 1 ){
        button9.innerText = `${monstersFight[0]} ${monsterID[0]}`;
        button9.onclick = function() {useSkillOnMonster(1, j, dmg)};
        button9.classList.remove('inactivebutton');
      }
      if (monstersFight.length >= 2 ){
        
        button10.onclick = function() {useSkillOnMonster(2, j, dmg)};
        button10.innerText = `${monstersFight[1]} ${monsterID[1]}`;
        button11.innerText = " --- ";
        button10.classList.remove('inactivebutton');
      }
      if(monstersFight.length >= 3 ){
       
        button11.onclick = function() {useSkillOnMonster(3, j, dmg)};
        button11.innerText = `${monstersFight[2]} ${monsterID[2]}`;
        button11.classList.remove('inactivebutton');
      }
  
      button12.onclick = InitializeMyTurn();
      button12.innerText = "go back";

  }
  function useSkillOn(skillName) {
    //initialize
    let str = strFight[0];
    let spd = spdFight[0];
    let res = resFight[0];
    let agi = agiFight[0];
    let def = defFight[0];
    let mgk = mgkFight[0];
    let mana = manaFight[0];
    let health = healthFight[0];
    let j = 0;
    for(let i = 0; i < skillDex.length ; i++) {
      if(skillName == skillDex[i].name) {
        j = i;
      }
    }
    if (skillDex[j].type == "heal") {
      if(skillDex[j].target == "ally") {
        let healTurn = skillDex[j].baseHeal + Math.floor(eval(skillDex[j].additionalHeal));
        manaFight[0] -= Math.floor(skillDex[j].manaCost + (healTurn / 3));
        healthFight[0] += healTurn;
      }
      updateCharacterFightHealth();
      endMyTurn();

    } else if (skillDex[j].type == "buff") {
    
      let spd = spdFight[0];
      let res = resFight[0];
      eval(skillDex[j].special);
      resFight[0] = res;
      spdFight[0] = spd;
      manaFight[0] -= (Math.floor(skillDex[j].manaCost));
      updateCharacterFightHealth();
      endMyTurn();
    } else if (skillDex[j].type == "damage") {
    
      let dmg = 0;
      dmg = skillDex[j].baseDamage + Math.floor(eval(skillDex[j].additionalDamage));
      if (skillDex[j].type == "unique"){
        eval(skillDex[j].special);
      }
      manA -= skillDex[j].manaCost;
      button9.classList.add('inactivebutton');
      button10.classList.add('inactivebutton');
      button11.classList.add('inactivebutton');
      
      strFight[0] = str;
      spdFight[0] =  spd;
      resFight[0] = res;
      agiFight[0] = agi;
      defFight[0] = def;
      mgkFight[0] = mgk;
      manaFight[0] = mana;
      healthFight[0] = health;
    button9.onclick = tutorials3;
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button10.innerText = " --- ";
    button11.innerText = " --- ";
      if(monstersFight.length >= 1 ){
        button9.innerText = `${monstersFight[0]} ${monsterID[0]}`;
        button9.onclick = function() {useSkillOnMonster(1, j, dmg)};
        button9.classList.remove('inactivebutton');
      }
      if (monstersFight.length >= 2 ){
        
        button10.onclick = function() {useSkillOnMonster(2, j, dmg)};
        button10.innerText = `${monstersFight[1]} ${monsterID[1]}`;
        button11.innerText = " --- ";
        button10.classList.remove('inactivebutton');
      }
      if(monstersFight.length >= 3 ){
       
        button11.onclick = function() {useSkillOnMonster(3, j, dmg)};
        button11.innerText = `${monstersFight[2]} ${monsterID[2]}`;
        button11.classList.remove('inactivebutton');
      }
  
      button12.onclick = InitializeMyTurn();
      button12.innerText = "go back";
      button12.classList.remove('inactivebutton');
    }
  }
  function useSkillOnMonster(N, j, dmg) {
    
    let diceRoll5 = Math.floor(Math.random()*100);
    if (diceRoll5 < 50){
    FightText.innerText += "\nCritical Hit";  
    Math.floor(Math.random()*((agiFight[N]+agiFight[0]) / agiFight[0])) < agiFight[0] ? (dmg *= 2) : (dmg *= 1);
    }
    dmg -= Math.floor(((defFight[N] + resFight[N] )/ 2));
    dmg < 0 ? dmg = 0 : dmg;
    dmg = Math.floor(dmg);
    healthFight [N] -= dmg;
    console.log(N);
    console.log(diceRoll5);
    console.log(dmg);
    FightText.innerText += `\n You use ${skillDex[j].name} it deals ${dmg} damage`;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }


  //functions
  function normalAtking1() {
    
    let str = strFight[0];
    let mgk = mgkFight[0];
    let agi = agiFight[0];
    let power = 0;
    power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    let diceRoll5 = Math.floor(Math.random()*100);
    if (diceRoll5 < 50){
    Math.floor(Math.random()*(agiFight[2]+agi)) < agi ? (power *= 2) : (power *= 1);
    }
    power -= Math.floor((defFight[1] + (resFight[1] / 2)));
    power < 0 ? power = 0 : power;
    healthFight [1] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }
  function normalAtking2() {
    let str = strFight[0];
    let mgk = mgkFight[0]; 
    let agi = agiFight[0];
    let power = 0;
    power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    power < 0 ? power = 0 : power;
    let diceRoll5 = Math.floor(Math.random()*100);
    if (diceRoll5 < 50){
    Math.floor(Math.random()*(agiFight[2]+agi)) < agi ? (power *= 2) : (power *= 1);
    }
    power -= Math.floor((defFight[2] + (resFight[2] / 2)));
    healthFight [2] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} \n it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }
  function normalAtking3() {
    let str = strFight[0];
    let mgk = mgkFight[0]; 
    let agi = agiFight[0];
    let power = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    let diceRoll5 = Math.floor(Math.random()*100);
    if (diceRoll5 < 50){
    Math.floor(Math.random()*(agiFight[2]+agi)) < agi ? (power *= 2) : (power *= 1);
    }
    power -= Math.floor((defFight[3] + (resFight[3] / 2)));
    power < 0 ? power = 0 : power;
    healthFight [3] -= power;
    console.log(eval(skillDex[0].additionalDamage));
    console.log(str);
    console.log(mgk);
    FightText.innerText += `\n You use ${skillDex[0].name} \n it deals ${power} damage`;
    manaFight[0] += skillDex[0].manaCost;
    button9.classList.add('inactivebutton');
    button10.classList.add('inactivebutton');
    button11.classList.add('inactivebutton');
    button12.classList.add('inactivebutton');
    setTimeout(endMyTurn, 1000);
  }

  function endMyTurn() {
    

    CheckMonsterHealth();
    console.log(CurrentTurn);
    CurrentTurn++;
    TurnChecker(CurrentTurn);
  }


  function continueBattle() {
       button9.classList.add('inactivebutton');
       button10.classList.add('inactivebutton');
       button11.classList.add('inactivebutton');
       button12.classList.add('inactivebutton');
    if((WhosTurn[CurrentTurn]  ==  monsterID[0]) && healthFight[1] > 0){
       
      //EnemyTurn();
      FightText.innerText += `${monstersFight[0]}  attacks\n`;
      goblinsTurn(1);
      
    } else if ((WhosTurn[CurrentTurn] == monsterID[1]) && healthFight[2] > 0){
      //EnemyTurn(); 
      FightText.innerText += `${monstersFight[1]}  attacks\n`;
      goblinsTurn(2);
      
      
    } else if ((WhosTurn[CurrentTurn] == monsterID[2]) && healthFight[3] > 0){       
    //EnemyTurn();
    FightText.innerText += `${monstersFight[2]} Aattacks\n`;
    goblinsTurn(3);
    } else {
      if(CurrentTurn > 20) {
        CurrentTurn = 0;
      }
      CurrentTurn++;
      setTimeout(TurnChecker(CurrentTurn), 1200);
    }
    
}
function goblinsTurn(N) {
  console.log("enemy use normal attack");
  let str = strFight[N];
  let mgk = mgkFight[N];
  let dmg = skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
  let diceRoll5 = Math.floor(Math.random()*100);
  if (diceRoll5 < 50){
  dmg -= Math.floor((defFight[0] + (resFight[0] / 2)));
  if (Math.floor(Math.random()*(agiFight[N]+agiFight[0])) < agiFight[0]) {
    console.log(agiFight[0]);
    console.log(agiFight[N]);
    console.log(Math.random()*(agiFight[N]+agiFight[0]));
    FightText.innerText += "monster attack missed";
    dmg = 0; 
  }
  }
  dmg < 0 ? dmg = 0 : dmg;
  healthFight[0] -= dmg;
  manaFight[N] += skillDex[0].manaCost;
  console.log(str + " + " + mgk);
  console.log("ends" + `${monstersFight[N - 1]}`+ "turn")
  FightText.innerText += `\nIt use normal Attack\n you recieve: ${dmg} Damage.`;
  FightText.scrollTop = FightText.scrollHeight;
  updateCharacterFightHealth();
  updateMonsterHealth();
  button9.classList.add('inactivebutton');
  button10.classList.add('inactivebutton');
  button11.classList.add('inactivebutton');
  button12.classList.add('inactivebutton');
  CurrentTurn++;
  setTimeout(TurnChecker(CurrentTurn), 1200);
}


function updateCharacterFightHealth() {
  characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
  nameTextAvatar.innerText = characterName;
  CheckMonsterHealth();
  updateMonsterHealth();
  healthTextAvatar.innerText = healthFight[0];
  manaTextAvatar.innerText = manaFight[0];
  console.log(fightAvatarImageGlobal);
  console.log(manaFight);
  console.log(WhosTurn);
}
function updateMonsterHealth() {
  containersForTheeMonsters.innerHTML = "";
  let EnemyCardsText = "";
  EnemyCardsTextAll = "";


  for(let i = 0; i < monstersFight.length; i++) {
  
        let k = i + 1;
        EnemyCardsText = `  
        <div class="monsterContainer">
        <div class="monsterImg">
        <img src="${monsterImageinFight[i]}" alt="monster">
        </div>
        <div class="descriptEnemyFight">
        <p> ${monstersFight[i]} <p>
        <p> Health: ${healthFight[k]} </p>
        <p> Mana: ${manaFight[k]} </p>
        </div>
        </div>
        `;

        console.log(monstersFight);
        console.log(healthFight);
        console.log(manaFight);
        console.log(strFight);
        console.log(mgkFight);
        console.log(spdFight);
        console.log(agiFight);
        console.log(defFight);
        console.log(resFight);
        
        EnemyCardsTextAll += EnemyCardsText;
    }
      containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
    
   
  
  console.log("endTurn");
  console.log(CurrentTurn);
  
}
  function CheckMonsterHealth() {

    console.log(healthFight);
    console.log(defFight)
    for(let i = 1 ; i <= healthFight.length; i++) {
      if(healthFight[i] <= 0) {
        let j = i - 1;
        monstersFight.splice(j,1);
        monsterImageinFight.splice(j,1);
        healthFight.splice(i,1);
        manaFight.splice(i,1);
        strFight.splice(i,1);
        mgkFight.splice(i,1);
        spdFight.splice(i,1);
        agiFight.splice(i,1);
        defFight.splice(i,1);
        resFight.splice(i,1);
        monsterID.splice(j,1);
        
      }
    }
    
} 
  function InitializeMyTurn(){
    button9.classList.remove('inactivebutton');
    button10.classList.remove('inactivebutton');
    button11.classList.remove('inactivebutton');
    button12.classList.remove('inactivebutton');
  }
  
  function Run() {
    let diceRoll = Math.floor(Math.random()*100);
    if (diceRoll > 50) {
    setTimeout(endMyTurn, 1000);
    } else {
      button9.classList.remove('inactivebutton');
      fightGame.style.display = 'none';
      healtH = healthFight[0];
      FightText.innerText = `\n Distance from town: ${distancefromTown} \n`;
      healthText.innerText = healtH;
      manA = manaFight[0];
      goldText.innerText = golD;
      xpText.innerText = xP;
      log.innerText += `\nyou flee`;
      log.innerText += `\ndistance from Town ${distancefromTown}`;
      score = distancefromTown * 1;
      scoreText.innerText = `${score}`;
      goGoblin();
    }
  }

  function endBattle() {
    button9.classList.remove('inactivebutton');
    fightGame.style.display = 'none';
    healtH = healthFight[0];
    FightText.innerText = `\n Distance from town: ${distancefromTown} \n`;
    healthText.innerText = healtH;
    manA = manaFight[0];
    let goldWon = (30 * number);
    let xpWon = (2 * number);
    golD += goldWon;
    xP += xpWon; 
    goldText.innerText = golD;
    xpText.innerText = xP;
    
    log.innerText += `\nyou receive: ${goldWon} gold and ${xpWon} xp`;
    log.innerText += `\ndistance from Town ${distancefromTown}`;
    score = distancefromTown * 5;
    scoreText.innerText = `${score}`;
    goGoblin();
    }
  
  function tutorials3(){
    FightText.innerText = "\nWait...\n";
  }
  console.log(characterName);
  
}
function goBackTown() {
  update(locations[0]);
}

function initializeGoFight() {
characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
nameTextAvatar.innerText = characterName;
healthTextAvatar.innerText = healtH;
manaTextAvatar.innerText = manA;
console.log(fightAvatarImageGlobal);
}




function InitializeCharStatus() {
  const maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
  healtH = maxhealtH;
  healthText.innerText = healtH;
  const maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);
  manA = maxManA;
  manaText.innerText = manA;
}



//event listeners

avatarCard.addEventListener('mouseover', () => {
  setTimeout(function() {
    avatarCard.style.backgroundImage = `url('${hoverImage}')`;
    avatarCard.style.transform = 'scaleY(1.15)';
   
    console.log(hoverImage); 
}, 500);
  
});

avatarCard.addEventListener('mouseout', () => {
  setTimeout(function() {
  avatarCard.style.backgroundImage = `url('${AvatarImage}')`;
  avatarCard.style.transform = 'scaleY(1)';
  console.log(AvatarImage);
}, 200);
});



initializeGoFight();
