global.toId = function (text) {
	if (typeof text === 'string') return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}


/**************************
*        Modules          *
**************************/

global.url = require('url');
global.https= require('https');
global.fs = require('fs');
global.config = require('./config.js');
global.tools = require('./data/tools.js');
global.BattleAI = require('./data/BATTLE/ai.js').AI;


/**************************
*        Storage          *
**************************/

global.queryRoom = '';
global.cooldownObject = {};
global.ignoreRooms = config.ignoreRooms.map(room => room.replace(/[^0-9a-z-]/g, ''));
global.prefix = config.prefix;
global.websiteLink = config.websiteLink;


/**************************
*     Abbreviations       *
**************************/

global.unxa = 'Unexpected number of arguments.';
global.typelist = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];



/**************************
*          Data           *
**************************/

global.data = {
	pokedex: require('./data/DATA/pokedex.json'),
	items: require('./data/DATA/items.json'),
	moves: require('./data/DATA/moves.json'),
	abilities: ["Adaptability", "Aerilate", "Aftermath", "Air Lock", "Analytic", "Anger Point", "Anticipation", "Arena Trap", "Aroma Veil", "Aura Break", "Bad Dreams", "Ball Fetch", "Battery", "Battle Armor", "Battle Bond", "Beast Boost", "Berserk", "Big Pecks", "Blaze", "Bulletproof", "Cheek Pouch", "Chlorophyll", "Clear Body", "Cloud Nine", "Color Change", "Comatose", "Competitive", "Compound Eyes", "Contrary", "Corrosion", "Cotton Down", "Cursed Body", "Cute Charm", "Damp", "Dancer", "Dark Aura", "Dauntless Shield", "Dazzling", "Defeatist", "Defiant", "Delta Stream", "Desolate Land", "Disguise", "Download", "Drizzle", "Drought", "Dry Skin", "Early Bird", "Effect Spore", "Electric Surge", "Emergency Exit", "Fairy Aura", "Filter", "Flame Body", "Flare Boost", "Flash Fire", "Flower Gift", "Flower Veil", "Fluffy", "Forecast", "Forewarn", "Friend Guard", "Frisk", "Full Metal Body", "Fur Coat", "Gale Wings", "Galvanize", "Gluttony", "Gooey", "Gorilla Tactics", "Grass Pelt", "Grassy Surge", "Gulp Missile", "Guts", "Harvest", "Healer", "Heatproof", "Heavy Metal", "Honey Gather", "Huge Power", "Hunger Switch", "Hustle", "Hydration", "Hyper Cutter", "Ice Body", "Ice Face", "Ice Scales", "Illuminate", "Illusion", "Immunity", "Imposter", "Infiltrator", "Innards Out", "Inner Focus", "Insomnia", "Intimidate", "Intrepid Sword", "Iron Barbs", "Iron Fist", "Justified", "Keen Eye", "Klutz", "Leaf Guard", "Levitate", "Libero", "Light Metal", "Lightning Rod", "Limber", "Liquid Ooze", "Liquid Voice", "Long Reach", "Magic Bounce", "Magic Guard", "Magician", "Magma Armor", "Magnet Pull", "Marvel Scale", "Mega Launcher", "Merciless", "Mimicry", "Minus", "Mirror Armor", "Misty Surge", "Mold Breaker", "Moody", "Motor Drive", "Moxie", "Multiscale", "Multitype", "Mummy", "Natural Cure", "Neuroforce", "Neutralizing Gas", "No Guard", "Normalize", "Oblivious", "Overcoat", "Overgrow", "Own Tempo", "Parental Bond", "Pastel Veil", "Perish Body", "Pickpocket", "Pickup", "Pixilate", "Plus", "Poison Heal", "Poison Point", "Poison Touch", "Power Construct", "Power Spot", "Power of Alchemy", "Prankster", "Pressure", "Primordial Sea", "Prism Armor", "Propeller Tail", "Protean", "Psychic Surge", "Punk Rock", "Pure Power", "Queenly Majesty", "Quick Feet", "RKS System", "Rain Dish", "Rattled", "Receiver", "Reckless", "Refrigerate", "Regenerator", "Ripen", "Rivalry", "Rock Head", "Rough Skin", "Run Away", "Sand Force", "Sand Rush", "Sand Spit", "Sand Stream", "Sand Veil", "Sap Sipper", "Schooling", "Scrappy", "Screen Cleaner", "Serene Grace", "Shadow Shield", "Shadow Tag", "Shed Skin", "Sheer Force", "Shell Armor", "Shield Dust", "Shields Down", "Simple", "Skill Link", "Slow Start", "Slush Rush", "Sniper", "Snow Cloak", "Snow Warning", "Solar Power", "Solid Rock", "Soul-Heart", "Soundproof", "Speed Boost", "Stakeout", "Stall", "Stalwart", "Stamina", "Stance Change", "Static", "Steadfast", "Steam Engine", "Steelworker", "Steely Spirit", "Stench", "Sticky Hold", "Storm Drain", "Strong Jaw", "Sturdy", "Suction Cups", "Super Luck", "Surge Surfer", "Swarm", "Sweet Veil", "Swift Swim", "Symbiosis", "Synchronize", "Tangled Feet", "Tangling Hair", "Technician", "Telepathy", "Teravolt", "Thick Fat", "Tinted Lens", "Torrent", "Tough Claws", "Toxic Boost", "Trace", "Triage", "Truant", "Turboblaze", "Unaware", "Unburden", "Unnerve", "Victory Star", "Vital Spirit", "Volt Absorb", "Wandering Spirit", "Water Absorb", "Water Bubble", "Water Compaction", "Water Veil", "Weak Armor", "White Smoke", "Wimp Out", "Wonder Guard", "Wonder Skin", "Zen Mode"],
	typechart: require('./data/DATA/typechart.js').BattleTypeChart
}



/**************************
*         Polls           *
**************************/

global.pollObject = {
	'1v1typechallenge': {
		votes: {},
		active: false,
		autostart: false,
		official: false,
		endTime: 0
	}
}

global.blitzObject = {
	'1v1typechallenge': {
		active: false,
	  prepping: false,
		autostart: false,
		official: false,
	  starter: false
	}
}

// This is redacted and should be transferred as Room#pollObject
