let xP = 0;
let healtH = 100;
let manA = 100;
let golD = 50;
let charLevel = 0;
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
let characterName = "";
let towndistance = 0;
let heroesParty = [];
let CharStatus = [
{ name: "poison", turn: 999  },
{ name: "stun", turn: 1 },
];
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
let distancefromTown = 0;
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


let maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
let  maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);

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
    monsterImage: "monsimages/slime.jpg"
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
    monsterImage: "monsimages/goblin.jpg"
  },
  { //2
    name: "goblin shaman",
    level: 15,
    health: 150,
    mana: 200,
    str: 5,
    mgk: 35,
    spd: 35,
    agi: 0,
    def: 20,
    res: 20,
    monsterImage: "monsimages/goblinShaman.jpg"
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
    monsterImage: "monsimages/goblin.jpg"

  },
  {
    name: "evolve fanged beast",
    level: 30,
    health: 500,
    mana: 400,
    str: 20,
    mgk: 20,
    spd: 50,
    agi: 30,
    def: 40,
    res: 20,
    monsterImage: "monsimages/slime.jpg"
  },
  {
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
    monsterImage: "monsimages/smug.jpg"
  }
]
const locations = [
    {
        name: "town square", //0
        "button text": ["Go to store", "Go to dungeon", "Go to guild", "Go to Inn"],
        "button functions": [goStore, goDungeon, goGuild, goInn],
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
      "button text": ["goblin cave", "unsleeping forest", "far far away", "back to town"],
      "button functions": [ goGoblin, tutorials, tutorials, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
      text: "You enter the goblin cave",
      bgimage: "bgimages/cave.jpg"
    },
    {
    name: "goGoblin", //8
    "button text": ["forward", "forward", "forward", "back"],
    "button functions": [ caveEvent, caveEvent,, caveEvent, goTown],/*[getQuest, adventurerHall, gotoReceptionist, contributeToGuild],*/
    text: "you explore the goblin cave",
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
        bgimage: "bgimages/slime.jpg"
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️",
        bgimage: "bgimages/slime.jpg"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" ,
        bgimage: "bgimages/slime.jpg"
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
  update(locations[1]);
}
function goInn() {
  update(locations[1]);
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
  goldText.innerText = golD;
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
  goldText.innerText = golD;
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
    goldText.innerText = golD;
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
  {name: "normal atk", type: "damage", rarity: "common", target: "enemy", baseDamage: 0, additionalDamage: "str + mgk", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 0, cost: 50},
  {name: "manaball", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 1.5", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 20, cost: 50},
  {name: "manablasth", type: "damage", rarity: "common", target: "enemy", baseDamage: 20, additionalDamage: "mgk * 2.2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 20, cost: 50},
  {name: "manabarrier", type: "shield", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 0, additionalHeal: 0, special: "shield += 4 * (res * mgk);", manaCost: 20, cost: 50},
  //4
  {name: "shieldbash", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "def + res", special: "none", manaCost: 0, cost: 50},
  //5
  {name: "bullcharghe", type: "damage", rarity: "common", target:"enemy", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "(def + res)* 1.2", special: "none", manaCost: 0, cost: 50},

  {name: "slash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 1.2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 0,  cost: 50},
  {name: "heavyslash", type: "damage", rarity: "common", target: "enemy", baseDamage: 10, additionalDamage: "str * 2", baseHeal: 0, additionalHeal: 0, special: "none", manaCost: 0, cost: 50},

  {name: "heal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "none", manaCost: 20, cost: 50},
  {name: "hugeheal", type: "heal", rarity: "common", target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal: "mgk * 2", special: "none", manaCost: 20, cost: 50},
  //10
  {name: "lizardskin",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "res += res + (mgk * 1.2); turn = 2;", manaCost: 20, cost: 50},
  {name: "windaura",type: "buff", rarity: "common",target: "ally", baseDamage: 0, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "spd += 30; turn = 3;", manaCost: 20, cost: 50},

  //12
  {name: "Wrath", type: "damage", rarity: "unique", target: "ally", baseDamage: playerbaseStat.def, additionalDamage: "(str*2) + res + def", baseHeal: 0, additionalHeal:  0, special: "health -= (res + def) / 2", manaCost: 20, cost: 50},
  {name: "Swallow Reversal",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.spd, additionalDamage: "(spd + agi) * 1.5", baseHeal: 20, additionalHeal:  0, special: "spd += 10; turn = 3;", manaCost: 20, cost: 50},
  {name: "Explosion",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.mgk, additionalDamage: "manA * 2", baseHeal: 20, additionalHeal:  0, special: "manA = 0", manaCost: 20, cost: 50},
  {name: "purification",type: "damage", rarity: "unique",target: "ally", baseDamage: playerbaseStat.res, additionalDamage: 0, baseHeal: 20, additionalHeal:  0, special: "spd += 30; turn = 3;", manaCost: 20, cost: 50}

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

  
  let diceRoll2 = Math.floor(Math.random()*100);
  if (diceRoll2 > 90) {
    log.innerText += "\n the gods would like to give you more";
    update(locations[5]);
  } else {
    modal1.style.display = 'flex';
    charName.style.display = 'block';
    nameButton.style.display = 'block';
    update(locations[6]);
  }
 
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
    goblinFight();
  }
} 
function treasureRoom() {
  console.log("yey tressure");
  golD += 100;
  goldText.innerText = golD;
  towndistance++;
  goGoblin();
}
function campRoom() {
  healtH += 30;
  manA += 50;
  maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res * 5 + playerbaseStat.def*5 ) / 2));
  maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);
  if (healtH >= maxhealtH) {
    health = maxhealtH;
  }
  if (manA >= maxManA) {
    manA = maxManA;
  }
  
  healthText.innerText = healtH;
  manaText.innerText = manA;
  console.log("refreshing");
  goGoblin();
}

function goblinFight() {
  let diceRoll6 = Math.floor(Math.random()*100);
  let enemyNum = 0;
  diceRoll6 += distancefromTown;
  if (diceRoll6 < 40) {
    enemyNum = 1;
  } else if (diceRoll6 < 70 && diceRoll6 > 41) {
    enemyNum = 2;
  } else {
    enemyNum = 3;
  }
  console.log(enemyNum + "enemy");
  fightingGoblin(enemyNum);
  
}


function fightingGoblin(number) {
  fightGame.style.display = 'flex';
  let monstersFight = [];
  let monsterImageinFight = [];
  let monsterHealthFight = [];
  let monsterManaFight = [];
  let monsterStrFight = [];
  let monsterMgkFight = [];
  let monsterSpdFight = [];
  let monsterAgiFight = [];
  let monsterDefFight = [];
  let monsterResFight = [];
  let EveryoneOnFightSpeed = [];
  let indexSpeed = [];
  let SpeedSum = 0;
  let turnFight = [];
  
  monsterHealthFight.push(healtH);
  monsterManaFight.push(manA);
  monsterStrFight.push(playerbaseStat.str);
  monsterMgkFight.push(playerbaseStat.mgk);
  monsterSpdFight.push(playerbaseStat.spd);
  monsterAgiFight.push(playerbaseStat.agi);
  monsterDefFight.push(playerbaseStat.def);
  monsterResFight.push(playerbaseStat.res);

  //initiaizebutton2
  button9.onclick = tutorials3;
  button10.onclick = tutorials3;
  button11.onclick = tutorials3;
  button12.onclick = tutorials3;

  /*i tried using constructor but im too beginner and makes me work slower
  since i have to apply immediately what im rying to learn
  */
  initializeGoFight();
  let EnemyCardsTextAll = " ";
  for(let i = 0; i < number; i++) {
    let diceRoll = Math.floor(Math.random()*100);
    if (diceRoll > 70) {
      monstersFight.push(monsters[2].name);
    } else {
      monstersFight.push(monsters[1].name);
    }
  }
 
    console.log(monstersFight);
  for(let i = 0; i < monstersFight.length; i++) {
    for (let j = 0; j < monsters.length; j++) {
      if( monsters[j].name == monstersFight[i]){
        
        monsterImageinFight.push(monsters[j].monsterImage);
        monsterHealthFight.push(monsters[j].health);
        monsterManaFight.push(monsters[j].mana);
        monsterStrFight.push(monsters[j].str);
        monsterMgkFight.push(monsters[j].mgk);
        monsterSpdFight.push(monsters[j].spd);
        monsterAgiFight.push(monsters[j].agi);
        monsterDefFight.push(monsters[j].def);
        monsterResFight.push(monsters[j].res);
        
        

        const EnemyCardsText = `  
        <div class="monsterContainer">
        <div class="monsterImg">
        <img src="${monsters[j].monsterImage}">
        </div>
        <div class="descriptEnemyFight">
        <p> ${monsters[j].name} <p>
        <p> Health: ${monsters[j].health} </p>
        <p> Mana: ${monsters[j].mana} </p>
        </div>
        </div>
        `;

        console.log(monstersFight);
        console.log(monsterHealthFight);
        console.log(monsterManaFight);
        console.log(monsterStrFight);
        console.log(monsterMgkFight);
        console.log(monsterSpdFight);
        console.log(monsterAgiFight);
        console.log(monsterDefFight);
        console.log(monsterResFight);
        
        EnemyCardsTextAll += EnemyCardsText;
      }
      containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
    }
  }
  
  EveryoneOnFightSpeed.push(playerbaseStat.spd);
  SpeedSum = playerbaseStat.spd;
  for (let k = 1; k < monsterSpdFight.length; k++) {
    EveryoneOnFightSpeed.push(monsterSpdFight[k]);
    SpeedSum += monsterSpdFight[k];
    
    console.log("SpeedSum"+ SpeedSum);
  }
  for(let m = 0; m < EveryoneOnFightSpeed.length; m++){
  let speedCalcOnFight = Math.floor((SpeedSum / (Number(EveryoneOnFightSpeed[m]))));
  console.log(speedCalcOnFight + "spdcaclonFight");
  
  indexSpeed.push(Number(speedCalcOnFight));
  
  
  }
  console.log("indexSpeed");
  console.log(EveryoneOnFightSpeed);
  console.log(indexSpeed);
  let turn = 0;
  for (let l = 0; l < SpeedSum; l++) {
    
    turnFight.push(turn);
    turn++;
  }
  let WhosTurnIsit = [];
  for (let s = 0 ; s < turnFight.length ; s++) {
    for(let h = 0; h < indexSpeed.length; h++){
      
      if ((turnFight[s] % indexSpeed[0]) == 0) {
        WhosTurnIsit.push(characterName);
      }  if((turnFight[s] % indexSpeed[h]) == 0){
        WhosTurnIsit.push(monstersFight[h]);
      }
      
      
      
      /*
    if ((turnFight[s] % indexSpeed[0]) == 0) {
        
        
        FightText.innerText = "Your Turn";
       
        console.log(monsterHealthFight);
       
        button9.classList.add('inactivebutton');
        button10.classList.add('inactivebutton');
        button11.classList.add('inactivebutton');
        button12.classList.add('inactivebutton');
        button9.onclick = tutorials;
        button10.onclick = tutorials3;
        button11.onclick = tutorials3;
        button12.onclick = tutorials3;
        
    }
    if((turnFight[s] % indexSpeed[1]) == 0){
       
       
        //EnemyTurn();
        
        let N = h - 1; 
        goblinsTurn(N);
        initializeGoFightInFight();
      } */

    }
    


    
  }

  let WhosTurnIsitControl = 0;
  for (let i = 0; i < WhosTurnIsit.length; i++) {
    
    if(WhosTurnIsit[i] == characterName) {
      FightText.innerText = "Your Turn";
       
      console.log(monsterHealthFight);
     
      button9.classList.remove('inactivebutton');
      button10.classList.remove('inactivebutton');
      button11.classList.remove('inactivebutton');
      button12.classList.remove('inactivebutton');
      button9.onclick = tutorials;
      button10.onclick = tutorials3;
      button11.onclick = tutorials3;
      button12.onclick = tutorials3;
      initializeGoFight();
      InitializeMyTurn(turn);
      
    } else if (WhosTurnIsit[i] == monstersFight[1] && WhosTurnIsitControl < WhosTurnIsit[i]) {
      goblinsTurn(1);
      initializeGoFightInFight();
    } else if (WhosTurnIsit[i] == monstersFight[2] && WhosTurnIsitControl < WhosTurnIsit[i]) {
    goblinsTurn(2);
    initializeGoFightInFight();
    } else if (WhosTurnIsit[i] == monstersFight[3] && WhosTurnIsitControl < WhosTurnIsit[i]) {
      goblinsTurn(3);
      initializeGoFightInFight();
    }

  }






function normalAtk(turn) {
  button9.onclick = tutorials3;
  button10.onclick = tutorials3;
  button11.onclick = tutorials3;
  button12.onclick = tutorials3;
    if(monstersFight.length == 1 ){
      button9.innerText = `${monstersFight[0]}`;
      button9.onclick = normalAtking(1, turn);
      button10.innerText = " --- ";
      button11.innerText = " --- ";
      button10.onclick = tutorials3;
      button11.onclick = tutorials3;
      
    }
    if (monstersFight.length == 2 ){
      button9.onclick = normalAtking(1, turn);
      button10.onclick = normalAtking(2, turn);
      button9.innerText = `${monstersFight[0]}`;
      button10.innerText = `${monstersFight[1]}`;
      button11.innerText = " --- ";
      button11.onclick = tutorials3;
    }
    if(monstersFight.length == 3 ){
      button9.onclick = normalAtking(1, turn);
      button10.onclick = normalAtking(2, turn);
      button11.onclick = normalAtking(3, turn);
      button9.innerText = `${monstersFight[0]}`;
      button10.innerText = `${monstersFight[1]}`;
      button11.innerText = `${monstersFight[2]}`;
    }
    button12.onclick = InitializeMyTurn;
    button12.innerText = "go back";

}

function normalAtking(num, turn) {
  let str = monsterStrFight[0];
  let mgk = monsterMgkFight[0];
  monsterHealthFight[num] -= skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
  console.log(eval(skillDex[0].additionalDamage));
  console.log(str);
  console.log(mgk);

  monsterManaFight[0] -= skillDex[0].manaCost;
  updateMonsterHealth();
  WhosTurnIsitControl = WhosTurnIsit[turn];
  button9.classList.add('inactivebutton');
  button10.classList.add('inactivebutton');
  button11.classList.add('inactivebutton');
  button12.classList.add('inactivebutton');
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
          <p> Health: ${monsterHealthFight[k]} </p>
          <p> Mana: ${monsterManaFight[k]} </p>
          </div>
          </div>
          `;
  
          console.log(monstersFight);
          console.log(monsterHealthFight);
          console.log(monsterManaFight);
          console.log(monsterStrFight);
          console.log(monsterMgkFight);
          console.log(monsterSpdFight);
          console.log(monsterAgiFight);
          console.log(monsterDefFight);
          console.log(monsterResFight);
          
          EnemyCardsTextAll += EnemyCardsText;
      }
        containersForTheeMonsters.innerHTML = `<div class="monsterContainerRow">${EnemyCardsTextAll}</div>`;
      
     
    
    console.log("endTurn");
    return;
  }
  
function InitializeMyTurn(turn){
    button9.classList.remove('inactivebutton');
    button10.classList.remove('inactivebutton');
    button11.classList.remove('inactivebutton');
    button12.classList.remove('inactivebutton');
    button9.onclick = normalAtk(turn);
    button10.onclick = tutorials3;
    button11.onclick = tutorials3;
    button12.onclick = tutorials3;
    button9.innerText = "Fight";
    button10.innerText = "wait";
    button11.innerText = "wait";
    button12.innerText = "wait";
  }

  function goblinsTurn(N) {
    console.log("enemy use normal attack");
    let str = monsterStrFight[N];
    let mgk = monsterMgkFight[N];
    monsterHealthFight[0] -= skillDex[0].baseDamage + eval(skillDex[0].additionalDamage);
    monsterManaFight -= skillDex[0].manaCost;
    console.log(str + " + " + mgk);
  }
  function initializeGoFightInFight() {
    characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
    nameTextAvatar.innerText = characterName;
    healthTextAvatar.innerText = monsterHealthFight[0];
    manaTextAvatar.innerText = monsterManaFight[0];
    console.log(fightAvatarImageGlobal);
  }
}


function initializeGoFight() {
characterFaceAvatar.style.backgroundImage = `url('${fightAvatarImageGlobal}')`;
nameTextAvatar.innerText = characterName;
healthTextAvatar.innerText = healtH;
manaTextAvatar.innerText = manA;
console.log(fightAvatarImageGlobal);
}




function InitializeCharStatus() {
  maxhealtH = Math.floor(playerbaseStat.hp + ((playerbaseStat.res *5 + playerbaseStat.def*5 / 2))); 
  healtH = maxhealtH;
  healthText.innerText = healtH;
  maxManA = Math.floor(100 + (playerbaseStat.mgk * 5) + playerbaseStat.str);
  manA = maxManA;
  manaText.innerText = manA;
}


/*

  class Character {
    constructor(name, level = 0, health = 0, mana = 0, str = 0, mgk = 0, spd = 0 , agi = 0, def = 0 , res = 0) {
      this.name = name;
      this.level = level;
      this.health = health;
      this.mana = mana;
      this.str = str;
      this.mgk = mgk;
      this.spd = spd;
      this.agi = agi;
      this.def = def;
      this.res = res;
    }
  
    attack(target) {
      const damage = this.strength - target.resistance;
      target.health -= damage > 0 ? damage : 0;
      console.log(`${this.name} attacks ${target.name} for ${damage > 0 ? damage : 0} damage.`);
    }
  }
  
  const player1 = new Character(characterName, charLevel, healtH, manA, playerbaseStat.str, playerbaseStat.mgk, playerbaseStat.spd, playerbaseStat.agi, playerbaseStat.def, playerbaseStat.res );
  */
  /*const player2 = new Character('Player 2', 100, 18, 12, 8);
  
  
  const enemy1 = new Character('Enemy 1', 100, 19, 14, 9);
  const enemy2 = new Character('Enemy 2', 100, 17, 13, 7);
  
  let isGameOver = false;
  let turn = 1;
  
  while (!isGameOver) {
    console.log(`Turn ${turn}`);
  
    player1.attack(enemy1);
    player2.attack(enemy2);
  
    if (enemy1.health <= 0 && enemy2.health <= 0) {
      console.log('Enemies have been defeated!');
      isGameOver = true;
      break;
    }
  
    enemy1.attack(player1);
    enemy2.attack(player2);
  
    if (player1.health <= 0 && player2.health <= 0) {
      console.log('Players have been defeated!');
      isGameOver = true;
      break;
    }
  
    turn++;

  
  } 
}
*/
function tutorials3(){
  FightText.innerText = "Wait...";
}
console.log(characterName);
/*
console.log(player1);
*/












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



InitializeCharStatus();
initializeGoFight();
