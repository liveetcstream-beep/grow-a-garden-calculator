export interface Crop {
  id: string;
  name: string;
  basePrice: number;
  category: string;
  emoji: string;
}

export const CROPS: Crop[] = [
  // Seed Shop / Normal Seed Pack
  { id: "carrot", name: "Carrot", basePrice: 10, category: "Seed Shop", emoji: "🥕" },
  { id: "potato", name: "Potato", basePrice: 15, category: "Seed Shop", emoji: "🥔" },
  { id: "tomato", name: "Tomato", basePrice: 20, category: "Seed Shop", emoji: "🍅" },
  { id: "corn", name: "Corn", basePrice: 25, category: "Seed Shop", emoji: "🌽" },
  { id: "onion", name: "Onion", basePrice: 30, category: "Seed Shop", emoji: "🧅" },
  { id: "garlic", name: "Garlic", basePrice: 35, category: "Seed Shop", emoji: "🧄" },
  { id: "cabbage", name: "Cabbage", basePrice: 40, category: "Seed Shop", emoji: "🥬" },
  { id: "broccoli", name: "Broccoli", basePrice: 45, category: "Seed Shop", emoji: "🥦" },
  { id: "eggplant", name: "Eggplant", basePrice: 50, category: "Seed Shop", emoji: "🍆" },
  { id: "artichoke", name: "Artichoke", basePrice: 120, category: "Seed Shop", emoji: "🥬" },
  { id: "bell-pepper", name: "Bell Pepper", basePrice: 42, category: "Seed Shop", emoji: "🌶️" },
  { id: "brussel-sprouts", name: "Brussel Sprouts", basePrice: 50, category: "Seed Shop", emoji: "🥬" },
  { id: "butternut-squash", name: "Butternut Squash", basePrice: 80, category: "Seed Shop", emoji: "🎃" },
  { id: "pumpkin", name: "Pumpkin", basePrice: 60, category: "Seed Shop", emoji: "🎃" },
  { id: "watermelon", name: "Watermelon", basePrice: 75, category: "Seed Shop", emoji: "🍉" },

  // Exotic Seed Pack / Trees
  { id: "apple", name: "Apple", basePrice: 100, category: "Exotic Seed Pack", emoji: "🍎" },
  { id: "green-apple", name: "Green Apple", basePrice: 110, category: "Exotic Seed Pack", emoji: "🍏" },
  { id: "pear", name: "Pear", basePrice: 120, category: "Exotic Seed Pack", emoji: "🍐" },
  { id: "orange", name: "Orange", basePrice: 130, category: "Exotic Seed Pack", emoji: "🍊" },
  { id: "lemon", name: "Lemon", basePrice: 140, category: "Exotic Seed Pack", emoji: "🍋" },
  { id: "banana", name: "Banana", basePrice: 150, category: "Exotic Seed Pack", emoji: "🍌" },
  { id: "pineapple", name: "Pineapple", basePrice: 200, category: "Exotic Seed Pack", emoji: "🍍" },
  { id: "avocado", name: "Avocado", basePrice: 220, category: "Exotic Seed Pack", emoji: "🥑" },
  { id: "coconut", name: "Coconut", basePrice: 250, category: "Exotic Seed Pack", emoji: "🥥" },
  { id: "peach", name: "Peach", basePrice: 160, category: "Exotic Seed Pack", emoji: "🍑" },
  { id: "cherry", name: "Cherry", basePrice: 180, category: "Exotic Seed Pack", emoji: "🍒" },
  { id: "strawberry", name: "Strawberry", basePrice: 90, category: "Exotic Seed Pack", emoji: "🍓" },
  { id: "blueberry", name: "Blueberry", basePrice: 95, category: "Exotic Seed Pack", emoji: "🍇" },
  { id: "grapes", name: "Grapes", basePrice: 115, category: "Exotic Seed Pack", emoji: "🍇" },
  { id: "kiwi", name: "Kiwi", basePrice: 280, category: "Exotic Seed Pack", emoji: "🥝" },
  { id: "mango", name: "Mango", basePrice: 350, category: "Exotic Seed Pack", emoji: "🥭" },
  { id: "papaya", name: "Papaya", basePrice: 320, category: "Exotic Seed Pack", emoji: "🟠" },

  // Night Event
  { id: "moon-melon", name: "Moon Melon", basePrice: 300, category: "Night Event", emoji: "🌙" },
  { id: "glow-shroom", name: "Glow Shroom", basePrice: 320, category: "Night Event", emoji: "🍄" },
  { id: "moon-flower", name: "Moon Flower", basePrice: 350, category: "Night Event", emoji: "🌸" },
  { id: "starfruit", name: "Starfruit", basePrice: 400, category: "Night Event", emoji: "⭐" },
  { id: "nightshade", name: "Nightshade", basePrice: 450, category: "Night Event", emoji: "🔮" },
  { id: "shadow-bean", name: "Shadow Bean", basePrice: 480, category: "Night Event", emoji: "🌑" },
  { id: "aurora-vine", name: "Aurora Vine", basePrice: 1500, category: "Night Event", emoji: "🌌" },
  { id: "phantom-pepper", name: "Phantom Pepper", basePrice: 1200, category: "Night Event", emoji: "🌶️" },
  { id: "void-berry", name: "Void Berry", basePrice: 2000, category: "Night Event", emoji: "🍇" },
  
  // Easter Event
  { id: "chocolate-carrot", name: "Chocolate Carrot", basePrice: 200, category: "Easter Event", emoji: "🍫" },
  { id: "easter-egg", name: "Easter Egg", basePrice: 250, category: "Easter Event", emoji: "🥚" },
  { id: "candy-blossom", name: "Candy Blossom", basePrice: 300, category: "Easter Event", emoji: "🍬" },
  { id: "jellybean-plant", name: "Jellybean Plant", basePrice: 320, category: "Easter Event", emoji: "🍬" },
  { id: "marshmallow-shroom", name: "Marshmallow Shroom", basePrice: 350, category: "Easter Event", emoji: "🍡" },
  { id: "bunny-bloom", name: "Bunny Bloom", basePrice: 400, category: "Easter Event", emoji: "🐰" },
  
  // Summer Event
  { id: "passionfruit", name: "Passionfruit", basePrice: 400, category: "Summer Event", emoji: "🔴" },
  { id: "dragon-fruit", name: "Dragon Fruit", basePrice: 500, category: "Summer Event", emoji: "🐉" },
  { id: "burning-bud", name: "Burning Bud", basePrice: 750, category: "Summer Event", emoji: "🔥" },
  { id: "sunflower", name: "Sunflower", basePrice: 600, category: "Summer Event", emoji: "🌻" },
  { id: "ocean-kelp", name: "Ocean Kelp", basePrice: 450, category: "Summer Event", emoji: "🌿" },
  { id: "coral-shroom", name: "Coral Shroom", basePrice: 850, category: "Summer Event", emoji: "🍄" },

  // Prehistoric Event
  { id: "bone-blossom", name: "Bone Blossom", basePrice: 600, category: "Prehistoric", emoji: "🦴" },
  { id: "amber-heart", name: "Amber Heart", basePrice: 800, category: "Prehistoric", emoji: "💛" },
  { id: "amber-spine", name: "Amber Spine", basePrice: 850, category: "Prehistoric", emoji: "🟧" },
  { id: "boneboo", name: "Boneboo", basePrice: 650, category: "Prehistoric", emoji: "🦴" },
  { id: "fossil-fern", name: "Fossil Fern", basePrice: 500, category: "Prehistoric", emoji: "🌿" },
  { id: "dino-egg-plant", name: "Dino Egg Plant", basePrice: 900, category: "Prehistoric", emoji: "🥚" },
  { id: "lava-lotus", name: "Lava Lotus", basePrice: 1200, category: "Prehistoric", emoji: "🔥" },

  // Zen Update
  { id: "aloe-vera", name: "Aloe Vera", basePrice: 210, category: "Zen Update", emoji: "🌿" },
  { id: "bamboo", name: "Bamboo", basePrice: 150, category: "Zen Update", emoji: "🎋" },
  { id: "bendboo", name: "Bendboo", basePrice: 180, category: "Zen Update", emoji: "🎋" },
  { id: "lotus", name: "Lotus", basePrice: 400, category: "Zen Update", emoji: "🌸" },
  { id: "bonsai-tree", name: "Bonsai Tree", basePrice: 800, category: "Zen Update", emoji: "🌳" },
  { id: "sakura-cherry", name: "Sakura Cherry", basePrice: 450, category: "Zen Update", emoji: "🌸" },
  { id: "zen-lily", name: "Zen Lily", basePrice: 600, category: "Zen Update", emoji: "💮" },

  // Cooking Update
  { id: "badland-pepper", name: "Badland Pepper", basePrice: 420, category: "Cooking Update", emoji: "🌶️" },
  { id: "bitter-melon", name: "Bitter Melon", basePrice: 140, category: "Cooking Update", emoji: "🥒" },
  { id: "basil", name: "Basil", basePrice: 50, category: "Cooking Update", emoji: "🌿" },
  { id: "mint", name: "Mint", basePrice: 60, category: "Cooking Update", emoji: "🍃" },
  { id: "pepper", name: "Hot Pepper", basePrice: 80, category: "Cooking Update", emoji: "🌶️" },
  { id: "oregano", name: "Oregano", basePrice: 70, category: "Cooking Update", emoji: "🌿" },
  { id: "vanilla-bean", name: "Vanilla Bean", basePrice: 150, category: "Cooking Update", emoji: "🍨" },
  { id: "ginger-root", name: "Ginger Root", basePrice: 90, category: "Cooking Update", emoji: "🥔" },

  // Beanstalk Event
  { id: "beanstalk", name: "Beanstalk", basePrice: 800, category: "Beanstalk Event", emoji: "🌿" },
  { id: "golden-apple", name: "Golden Apple", basePrice: 1000, category: "Beanstalk Event", emoji: "🍎" },
  { id: "magic-bean", name: "Magic Bean", basePrice: 2500, category: "Beanstalk Event", emoji: "🌱" },
  { id: "cloud-berry", name: "Cloud Berry", basePrice: 1200, category: "Beanstalk Event", emoji: "☁️" },
  { id: "giant-vine", name: "Giant Vine", basePrice: 800, category: "Beanstalk Event", emoji: "🐍" },

  // Fairy Event
  { id: "briar-rose", name: "Briar Rose", basePrice: 400, category: "Fairy Event", emoji: "🌹" },
  { id: "pixie-dust-flower", name: "Pixie Dust Flower", basePrice: 750, category: "Fairy Event", emoji: "✨" },
  { id: "magic-mushroom", name: "Magic Mushroom", basePrice: 650, category: "Fairy Event", emoji: "🍄" },
  { id: "crystal-lotus", name: "Crystal Lotus", basePrice: 1500, category: "Fairy Event", emoji: "💎" },
  { id: "fairy-rose", name: "Fairy Rose", basePrice: 800, category: "Fairy Event", emoji: "🌹" },
  { id: "enchanted-twig", name: "Enchanted Twig", basePrice: 1000, category: "Fairy Event", emoji: "🦯" },

  // Bee Event
  { id: "beebalm", name: "Beebalm", basePrice: 350, category: "Bee Event", emoji: "🌺" },
  { id: "honeycomb", name: "Honeycomb", basePrice: 500, category: "Bee Event", emoji: "🍯" },
  { id: "nectar-bloom", name: "Nectar Bloom", basePrice: 400, category: "Bee Event", emoji: "🌺" },
  { id: "pollen-flower", name: "Pollen Flower", basePrice: 350, category: "Bee Event", emoji: "🌻" },
  { id: "royal-jelly-plant", name: "Royal Jelly Plant", basePrice: 1200, category: "Bee Event", emoji: "👑" },

  // Normal Seed Pack (Accurate Category)
  { id: "cacao", name: "Cacao", basePrice: 300, category: "Normal Seed Pack", emoji: "🍫" },
  { id: "blood-banana", name: "Blood Banana", basePrice: 500, category: "Normal Seed Pack", emoji: "🩸" },

  // Limited Rewards / Special
  { id: "gold-bar-plant", name: "Gold Bar Plant", basePrice: 5000, category: "Limited Reward", emoji: "🥇" },
  { id: "diamond-fruit", name: "Diamond Fruit", basePrice: 10000, category: "Limited Reward", emoji: "💎" },
  { id: "ruby-rose", name: "Ruby Rose", basePrice: 8000, category: "Limited Reward", emoji: "♥️" },
  { id: "emerald-leaf", name: "Emerald Leaf", basePrice: 6500, category: "Limited Reward", emoji: "🟩" },
  { id: "sapphire-vine", name: "Sapphire Vine", basePrice: 7500, category: "Limited Reward", emoji: "💎" },
  { id: "obsidian-onion", name: "Obsidian Onion", basePrice: 9000, category: "Limited Reward", emoji: "🧅" },
];
