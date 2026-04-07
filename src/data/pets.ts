export interface Pet {
  id: string;
  name: string;
  baseValue: number;
  rarity: string;
  ability: string;
  abilityMultiplier: number;
  emoji: string;
  category: string;
}

export const PET_RARITIES = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Divine", "Event"];

export const PETS: Pet[] = [
  // Common
  { id: "chicken", name: "Chicken", baseValue: 50, rarity: "Common", ability: "Egg Layer", abilityMultiplier: 1.1, emoji: "🐔", category: "Farm" },
  { id: "pig", name: "Pig", baseValue: 60, rarity: "Common", ability: "Mud Roll", abilityMultiplier: 1.15, emoji: "🐷", category: "Farm" },
  { id: "cow", name: "Cow", baseValue: 70, rarity: "Common", ability: "Milk Producer", abilityMultiplier: 1.2, emoji: "🐮", category: "Farm" },
  { id: "sheep", name: "Sheep", baseValue: 80, rarity: "Common", ability: "Wooly", abilityMultiplier: 1.25, emoji: "🐑", category: "Farm" },
  { id: "dog", name: "Dog", baseValue: 90, rarity: "Common", ability: "Loyal Guard", abilityMultiplier: 1.3, emoji: "🐶", category: "Domestic" },
  { id: "cat", name: "Cat", baseValue: 95, rarity: "Common", ability: "Mouser", abilityMultiplier: 1.35, emoji: "🐱", category: "Domestic" },
  { id: "mouse", name: "Mouse", baseValue: 40, rarity: "Common", ability: "Squeak", abilityMultiplier: 1.05, emoji: "🐭", category: "Domestic" },
  { id: "pigeon", name: "Pigeon", baseValue: 45, rarity: "Common", ability: "Flyer", abilityMultiplier: 1.1, emoji: "🐦", category: "Sky" },

  // Uncommon
  { id: "bunny", name: "Bunny", baseValue: 150, rarity: "Uncommon", ability: "Speed Boost", abilityMultiplier: 1.5, emoji: "🐰", category: "Farm" },
  { id: "duck", name: "Duck", baseValue: 160, rarity: "Uncommon", ability: "Pond Swimmer", abilityMultiplier: 1.6, emoji: "🦆", category: "Farm" },
  { id: "goat", name: "Goat", baseValue: 180, rarity: "Uncommon", ability: "Mountain Climber", abilityMultiplier: 1.7, emoji: "🐐", category: "Farm" },
  { id: "turkey", name: "Turkey", baseValue: 200, rarity: "Uncommon", ability: "Gobble", abilityMultiplier: 1.8, emoji: "🦃", category: "Farm" },
  { id: "frog", name: "Frog", baseValue: 140, rarity: "Uncommon", ability: "Leaper", abilityMultiplier: 1.4, emoji: "🐸", category: "Pond" },
  { id: "turtle", name: "Turtle", baseValue: 220, rarity: "Uncommon", ability: "Hard Shell", abilityMultiplier: 1.9, emoji: "🐢", category: "Pond" },
  { id: "bee", name: "Bee", baseValue: 300, rarity: "Uncommon", ability: "Pollinate", abilityMultiplier: 2.0, emoji: "🐝", category: "Insects" },
  { id: "butterfly", name: "Butterfly", baseValue: 250, rarity: "Uncommon", ability: "Pollen Spreader", abilityMultiplier: 2.0, emoji: "🦋", category: "Insects" },
  { id: "raccoon", name: "Raccoon", baseValue: 280, rarity: "Uncommon", ability: "Scavenge", abilityMultiplier: 2.1, emoji: "🦝", category: "Forest" },

  // Rare
  { id: "horse", name: "Horse", baseValue: 500, rarity: "Rare", ability: "Sprinter", abilityMultiplier: 2.5, emoji: "🐴", category: "Farm" },
  { id: "llama", name: "Llama", baseValue: 550, rarity: "Rare", ability: "Spit", abilityMultiplier: 2.6, emoji: "🦙", category: "Farm" },
  { id: "deer", name: "Deer", baseValue: 600, rarity: "Rare", ability: "Forest Walker", abilityMultiplier: 2.8, emoji: "🦌", category: "Forest" },
  { id: "fox", name: "Fox", baseValue: 650, rarity: "Rare", ability: "Cunning", abilityMultiplier: 3.0, emoji: "🦊", category: "Forest" },
  { id: "wolf", name: "Wolf", baseValue: 700, rarity: "Rare", ability: "Pack Hunter", abilityMultiplier: 3.2, emoji: "🐺", category: "Forest" },
  { id: "bear", name: "Bear", baseValue: 800, rarity: "Rare", ability: "Brute Strength", abilityMultiplier: 3.5, emoji: "🐻", category: "Forest" },
  { id: "owl", name: "Owl", baseValue: 750, rarity: "Rare", ability: "Night Vision", abilityMultiplier: 3.3, emoji: "🦉", category: "Forest" },
  { id: "capybara", name: "Capybara", baseValue: 900, rarity: "Rare", ability: "Chill Aura", abilityMultiplier: 3.8, emoji: "🐹", category: "Pond" },
  { id: "platypus", name: "Platypus", baseValue: 950, rarity: "Rare", ability: "Venom Spur", abilityMultiplier: 4.0, emoji: "🦆", category: "Pond" },

  // Epic
  { id: "lion", name: "Lion", baseValue: 2000, rarity: "Epic", ability: "King's Roar", abilityMultiplier: 5.0, emoji: "🦁", category: "Savanna" },
  { id: "tiger", name: "Tiger", baseValue: 2200, rarity: "Epic", ability: "Jungle Stealth", abilityMultiplier: 5.2, emoji: "🐯", category: "Jungle" },
  { id: "elephant", name: "Elephant", baseValue: 2500, rarity: "Epic", ability: "Trunk Splash", abilityMultiplier: 5.5, emoji: "🐘", category: "Savanna" },
  { id: "rhino", name: "Rhino", baseValue: 2400, rarity: "Epic", ability: "Charge", abilityMultiplier: 5.4, emoji: "🦏", category: "Savanna" },
  { id: "gorilla", name: "Gorilla", baseValue: 2600, rarity: "Epic", ability: "Chest Beat", abilityMultiplier: 5.6, emoji: "🦍", category: "Jungle" },
  { id: "penguin", name: "Penguin", baseValue: 2800, rarity: "Epic", ability: "Ice Slide", abilityMultiplier: 6.0, emoji: "🐧", category: "Arctic" },
  { id: "polar-bear", name: "Polar Bear", baseValue: 3000, rarity: "Epic", ability: "Frostbite", abilityMultiplier: 6.5, emoji: "🐻‍❄️", category: "Arctic" },
  { id: "apple-gazelle", name: "Apple Gazelle", baseValue: 3500, rarity: "Epic", ability: "Fruit Dash", abilityMultiplier: 7.0, emoji: "🦌", category: "Forest" },
  { id: "bald-eagle", name: "Bald Eagle", baseValue: 3800, rarity: "Epic", ability: "Sky Dive", abilityMultiplier: 7.5, emoji: "🦅", category: "Sky" },
  { id: "chicken-zombie", name: "Chicken Zombie", baseValue: 5000, rarity: "Epic", ability: "Undead Cluck", abilityMultiplier: 9.0, emoji: "🧟", category: "Event" },

  // Legendary
  { id: "dragon", name: "Dragon", baseValue: 10000, rarity: "Legendary", ability: "Fire Breath", abilityMultiplier: 15.0, emoji: "🐉", category: "Mythical" },
  { id: "unicorn", name: "Unicorn", baseValue: 12000, rarity: "Legendary", ability: "Magic Heal", abilityMultiplier: 16.0, emoji: "🦄", category: "Mythical" },
  { id: "pegasus", name: "Pegasus", baseValue: 11000, rarity: "Legendary", ability: "Sky Flight", abilityMultiplier: 15.5, emoji: "🐎", category: "Mythical" },
  { id: "phoenix", name: "Phoenix", baseValue: 15000, rarity: "Legendary", ability: "Rebirth", abilityMultiplier: 20.0, emoji: "🦅", category: "Mythical" },
  { id: "kitsune", name: "Kitsune", baseValue: 18000, rarity: "Legendary", ability: "Nine Tails", abilityMultiplier: 25.0, emoji: "🦊", category: "Mythical" },
  { id: "dragonfly", name: "Dragonfly", baseValue: 12000, rarity: "Legendary", ability: "Hover Swift", abilityMultiplier: 18.0, emoji: "🦋", category: "Insects" },
  { id: "blood-kiwi", name: "Blood Kiwi", baseValue: 14000, rarity: "Legendary", ability: "Vampiric Drain", abilityMultiplier: 22.0, emoji: "🔴", category: "Event" },
  { id: "blood-owl", name: "Blood Owl", baseValue: 14500, rarity: "Legendary", ability: "Night Terror", abilityMultiplier: 23.0, emoji: "🦉", category: "Event" },
  { id: "cockatrice", name: "Cockatrice", baseValue: 16000, rarity: "Legendary", ability: "Petrify", abilityMultiplier: 25.0, emoji: "🐉", category: "Mythical" },

  // Mythic
  { id: "kraken", name: "Kraken", baseValue: 50000, rarity: "Mythic", ability: "Ocean's Fury", abilityMultiplier: 50.0, emoji: "🦑", category: "Ocean" },
  { id: "leviathan", name: "Leviathan", baseValue: 55000, rarity: "Mythic", ability: "Tsunami", abilityMultiplier: 55.0, emoji: "🐋", category: "Ocean" },
  { id: "cerberus", name: "Cerberus", baseValue: 60000, rarity: "Mythic", ability: "Underworld Gate", abilityMultiplier: 60.0, emoji: "🐺", category: "Underworld" },
  { id: "griffin", name: "Griffin", baseValue: 45000, rarity: "Mythic", ability: "Majestic Dive", abilityMultiplier: 45.0, emoji: "🦅", category: "Mythical" },
  { id: "brontosaurus", name: "Brontosaurus", baseValue: 70000, rarity: "Mythic", ability: "Earthquake", abilityMultiplier: 75.0, emoji: "🦕", category: "Prehistoric" },
  { id: "t-rex", name: "T-Rex", baseValue: 80000, rarity: "Mythic", ability: "Primal Roar", abilityMultiplier: 85.0, emoji: "🦖", category: "Prehistoric" },

  // Divine
  { id: "celestial-dragon", name: "Celestial Dragon", baseValue: 200000, rarity: "Divine", ability: "Starfall", abilityMultiplier: 150.0, emoji: "🌌", category: "Divine" },
  { id: "sun-god-bird", name: "Sun God Bird", baseValue: 250000, rarity: "Divine", ability: "Solar Flare", abilityMultiplier: 200.0, emoji: "🌞", category: "Divine" },
  { id: "moon-rabbit", name: "Moon Rabbit", baseValue: 220000, rarity: "Divine", ability: "Lunar Eclipse", abilityMultiplier: 180.0, emoji: "🐇", category: "Divine" },
  { id: "angelic-guardian", name: "Angelic Guardian", baseValue: 300000, rarity: "Divine", ability: "Heavenly Shield", abilityMultiplier: 250.0, emoji: "👼", category: "Divine" },
];
