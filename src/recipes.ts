import { Ingredient } from "./materials";

interface OperatorRecipeBook {
  rarity: number;
  elite: { 1: Ingredient[]; 2?: Ingredient[] };
  skillLevels: { [skillLevel: number]: Ingredient[] };
  masteries?: {
    [skillSlot: number]: {
      [masteryLevel: number]: Ingredient[];
    };
  };
}

interface RecipeBook {
  operators: {
    [name: string]: OperatorRecipeBook;
  };
}

const RECIPES: RecipeBook = {
  operators: {
    Midnight: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
      },
    },
    Kroos: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
      },
    },
    Ansel: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester Pack",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
      },
    },
    Vanilla: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Aketon",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
      },
    },
    Shaw: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Specialist Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Specialist Chip Pack",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 12,
          },
          {
            name: "Polyester Pack",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
      },
    },
    Scavenger: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Vanguard Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Vanguard Chip Pack",
            quantity: 5,
          },
          {
            name: "Loxic Kohl",
            quantity: 20,
          },
          {
            name: "Integrated Device",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Haze: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Caster Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Caster Chip Pack",
            quantity: 5,
          },
          {
            name: "Orirock Cluster",
            quantity: 19,
          },
          {
            name: "RMA70-12",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Beagle: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Manganese Ore",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
      },
    },
    Hibiscus: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar Pack",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Polyester Pack",
            quantity: 2,
          },
        ],
      },
    },
    Adnachiel: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 2,
          },
        ],
      },
    },
    Cardigan: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
      },
    },
    Vigna: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Vanguard Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Vanguard Chip Pack",
            quantity: 5,
          },
          {
            name: "Oriron Cluster",
            quantity: 16,
          },
          {
            name: "Orirock Cluster",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Savage: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 9,
          },
          {
            name: "Sugar Pack",
            quantity: 18,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Broca: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Sugar Lump",
            quantity: 7,
          },
          {
            name: "Grindstone",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Indra: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
          {
            name: "Polyester Pack",
            quantity: 16,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
        ],
      },
    },
    Matterhorn: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Defender Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Defender Chip Pack",
            quantity: 5,
          },
          {
            name: "Manganese Ore",
            quantity: 14,
          },
          {
            name: "Integrated Device",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Fang: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Polyester",
            quantity: 2,
          },
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
        ],
        6: [
          {
            name: "Oriron Cluster",
            quantity: 1,
          },
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
        ],
      },
    },
    Steward: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron Cluster",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
      },
    },
    Catapult: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Manganese Ore",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
      },
    },
    Spot: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 2,
          },
        ],
      },
    },
    Orchid: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
      },
    },
    Lava: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cluster",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Sugar Pack",
            quantity: 2,
          },
        ],
      },
    },
    Hoshiguma: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Defender Chip",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 11,
          },
          {
            name: "Oriron",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Defender Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Ester",
            quantity: 6,
          },
          {
            name: "Oriron Shard",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
      },
    },
    Exusiai: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Sniper Chip",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 12,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Sugar Lump",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Orirock",
            quantity: 6,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 6,
          },
        ],
      },
    },
    Hung: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "Incandescent Alloy Block",
            quantity: 7,
          },
          {
            name: "Aketon",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerized Gel",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Incandescent Alloy",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Flamebringer: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "White Horse Kohl",
            quantity: 9,
          },
          {
            name: "Manganese Ore",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Pramanix: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
          {
            name: "Grindstone",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Warfarin: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Medic Dualchip",
            quantity: 3,
          },
          {
            name: "Optimized Device",
            quantity: 5,
          },
          {
            name: "Sugar Pack",
            quantity: 17,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Liskarm: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 7,
          },
          {
            name: "Aketon",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
      },
    },
    Istina: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "Optimized Device",
            quantity: 5,
          },
          {
            name: "RMA70-12",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    "Blue Poison": {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Greyy: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Caster Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Caster Chip Pack",
            quantity: 5,
          },
          {
            name: "Manganese Ore",
            quantity: 15,
          },
          {
            name: "Aketon",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Texas: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Vanguard Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "Polyester Lump",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 16,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Courier: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Vanguard Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Vanguard Chip Pack",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 11,
          },
          {
            name: "Aketon",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
      },
    },
    Zima: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Vanguard Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "Sugar Lump",
            quantity: 7,
          },
          {
            name: "RMA70-12",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Gravel: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Specialist Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Specialist Chip Pack",
            quantity: 5,
          },
          {
            name: "Polyester Pack",
            quantity: 18,
          },
          {
            name: "Orirock Cluster",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
        ],
      },
    },
    Frostleaf: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Grindstone",
            quantity: 15,
          },
          {
            name: "Manganese Ore",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Melantha: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
      },
    },
    Mousse: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Orirock Cluster",
            quantity: 20,
          },
          {
            name: "Grindstone",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Popukar: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
      },
    },
    Nearl: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "White Horse Kohl",
            quantity: 9,
          },
          {
            name: "Polyester Pack",
            quantity: 16,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Croissant: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "RMA70-24",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Skadi: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Guard Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Orirock Concentration",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 7,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
      },
    },
    Angelina: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Supporter Chip",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 7,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Sugar Lump",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 6,
          },
          {
            name: "Orirock",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 6,
          },
        ],
      },
    },
    Snowsant: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "Polymerized Gel",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Coagulating Gel",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
      },
    },
    Sesa: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 18,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Coagulating Gel",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
        ],
      },
    },
    Bibeak: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polymerized Gel",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 6,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Incandescent Alloy",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Firewatch: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Polyester Lump",
            quantity: 7,
          },
          {
            name: "Loxic Kohl",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
      },
    },
    Sussurro: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Medic Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Medic Chip Pack",
            quantity: 5,
          },
          {
            name: "RMA70-12",
            quantity: 10,
          },
          {
            name: "Loxic Kohl",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Perfumer: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Medic Chip",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Medic Chip Pack",
            quantity: 5,
          },
          {
            name: "Loxic Kohl",
            quantity: 19,
          },
          {
            name: "Aketon",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Ptilopsis: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Medic Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 9,
          },
          {
            name: "Grindstone",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Astesia: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Polyester Lump",
            quantity: 7,
          },
          {
            name: "Oriron Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Jessica: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Loxic Kohl",
            quantity: 20,
          },
          {
            name: "Oriron Cluster",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Plume: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
      rarity: 3,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 1,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Aketon",
            quantity: 1,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 2,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
      },
    },
    Beehunter: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Sugar Pack",
            quantity: 19,
          },
          {
            name: "RMA70-12",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Matoimaru: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 16,
          },
          {
            name: "Sugar Pack",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
      },
    },
    Cuora: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Defender Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Defender Chip Pack",
            quantity: 5,
          },
          {
            name: "Grindstone",
            quantity: 14,
          },
          {
            name: "Loxic Kohl",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Estelle: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "RMA70-12",
            quantity: 12,
          },
          {
            name: "Grindstone",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Sora: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "White Horse Kohl",
            quantity: 9,
          },
          {
            name: "Orirock Cluster",
            quantity: 17,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    Ceobe: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Caster Chip",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Caster Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Incandescent Alloy Block",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Polymerized Gel",
              quantity: 7,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 11,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
      },
    },
    Mostima: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Caster Chip",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 7,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Caster Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 6,
          },
          {
            name: "Orirock",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
      },
    },
    Hellagur: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Sugar",
            quantity: 10,
          },
          {
            name: "Orirock Cube",
            quantity: 6,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Guard Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Polyester Lump",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Ester",
            quantity: 6,
          },
          {
            name: "Oriron Shard",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
      },
    },
    "Ch'en": {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 12,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Guard Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "White Horse Kohl",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Orirock",
            quantity: 6,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
      },
    },
    Ifrit: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Caster Chip",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Caster Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Polyester Lump",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Ester",
            quantity: 6,
          },
          {
            name: "Oriron Shard",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
      },
    },
    Shining: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Medic Chip",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Medic Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Oriron Block",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Orirock",
            quantity: 6,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 4,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
      },
    },
    Provence: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Sugar Lump",
            quantity: 9,
          },
          {
            name: "Integrated Device",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Swire: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Sugar Lump",
            quantity: 7,
          },
          {
            name: "Polyester Pack",
            quantity: 17,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Ethan: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Specialist Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Specialist Chip Pack",
            quantity: 5,
          },
          {
            name: "Sugar Pack",
            quantity: 17,
          },
          {
            name: "Orirock Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Gummy: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Defender Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Defender Chip Pack",
            quantity: 5,
          },
          {
            name: "RMA70-12",
            quantity: 13,
          },
          {
            name: "Manganese Ore",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
    "Dur-nar": {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Defender Chip",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Defender Chip Pack",
            quantity: 5,
          },
          {
            name: "Orirock Cluster",
            quantity: 19,
          },
          {
            name: "RMA70-12",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Nightmare: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
            quantity: 3,
          },
          {
            name: "Sugar Lump",
            quantity: 7,
          },
          {
            name: "Manganese Ore",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Manticore: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 8,
          },
          {
            name: "Sugar Pack",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Ceylon: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Medic Dualchip",
            quantity: 3,
          },
          {
            name: "Oriron Block",
            quantity: 7,
          },
          {
            name: "Aketon",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
      },
    },
    Earthspirit: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Supporter Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Supporter Chip Pack",
            quantity: 5,
          },
          {
            name: "Sugar Pack",
            quantity: 20,
          },
          {
            name: "Grindstone",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    "Waai Fu": {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "RMA70-24",
            quantity: 7,
          },
          {
            name: "Orirock Cluster",
            quantity: 16,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
      },
    },
    Meteorite: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "RMA70-24",
            quantity: 7,
          },
          {
            name: "Manganese Ore",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Specter: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "White Horse Kohl",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Meteor: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Oriron Cluster",
            quantity: 14,
          },
          {
            name: "Polyester Pack",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Franka: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Oriron Block",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 18,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
      },
    },
    Gavial: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Medic Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Medic Chip Pack",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 13,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
      },
    },
    Rope: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Specialist Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Specialist Chip Pack",
            quantity: 5,
          },
          {
            name: "Oriron Cluster",
            quantity: 15,
          },
          {
            name: "Sugar Pack",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Dobermann: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Manganese Ore",
            quantity: 15,
          },
          {
            name: "Loxic Kohl",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Breeze: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Medic Dualchip",
            quantity: 3,
          },
          {
            name: "Optimized Device",
            quantity: 5,
          },
          {
            name: "Loxic Kohl",
            quantity: 18,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    FEater: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 8,
          },
          {
            name: "Polyester Pack",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
      },
    },
    Blaze: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Guard Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Optimized Device",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 8,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Coagulating Gel",
            quantity: 4,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
      },
    },
    Magallan: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Supporter Chip",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 7,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
      },
    },
    Siege: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Vanguard Chip",
            quantity: 5,
          },
          {
            name: "Sugar",
            quantity: 9,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Orirock Concentration",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
      },
    },
    Leizi: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
            quantity: 3,
          },
          {
            name: "RMA70-24",
            quantity: 7,
          },
          {
            name: "Coagulating Gel",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Coagulating Gel",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
          {
            name: "Coagulating Gel",
            quantity: 3,
          },
        ],
      },
    },
    Reed: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Vanguard Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 9,
          },
          {
            name: "Manganese Ore",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Bison: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 7,
          },
          {
            name: "RMA70-12",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Gitano: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Caster Chip",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Caster Chip Pack",
            quantity: 5,
          },
          {
            name: "Sugar Pack",
            quantity: 17,
          },
          {
            name: "Orirock Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
      },
    },
    Silence: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Medic Dualchip",
            quantity: 3,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
          {
            name: "Orirock Cluster",
            quantity: 18,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Vermeil: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Polyester Pack",
            quantity: 18,
          },
          {
            name: "Sugar Pack",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
        ],
      },
    },
    Lappland: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Guard Chip",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Optimized Device",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Glaucus: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
          {
            name: "Integrated Device",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
        ],
      },
    },
    Utage: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Guard Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 14,
          },
          {
            name: "Orirock Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 1,
            },
            {
              name: "RMA70-12",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Myrrh: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Medic Chip",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Medic Chip Pack",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 14,
          },
          {
            name: "Polyester Pack",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
      },
    },
    "Projekt Red": {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 7,
          },
          {
            name: "Oriron Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
        ],
      },
    },
    Bagpipe: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Vanguard Chip",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 10,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Orirock Concentration",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Aketon",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Integrated Device",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Ester",
            quantity: 6,
          },
          {
            name: "Oriron Shard",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
      },
    },
    Aak: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Specialist Chip",
            quantity: 5,
          },
          {
            name: "Sugar",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Polymerized Gel",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 11,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Coagulating Gel",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Incandescent Alloy",
            quantity: 6,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 6,
          },
        ],
      },
    },
    Schwarz: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Sniper Chip",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 6,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Oriron Block",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 7,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 4,
          },
        ],
      },
    },
    Nightingale: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Medic Chip",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Medic Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Keton Colloid",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 5,
          },
          {
            name: "Diketon",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
      },
    },
    Nian: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Defender Chip",
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 12,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Defender Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Incandescent Alloy Block",
            quantity: 7,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polymerized Gel",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Polymerized Gel",
              quantity: 7,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 8,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
            {
              name: "RMA70-12",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Orirock",
            quantity: 6,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Coagulating Gel",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
      },
    },
    Eyjafjalla: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Caster Chip",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 7,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Caster Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Optimized Device",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "Loxic Kohl",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
            {
              name: "Manganese Ore",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 10,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
            {
              name: "Grindstone",
              quantity: 7,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 7,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 7,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 4,
          },
        ],
      },
    },
    GreyThroat: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Oriron Block",
            quantity: 7,
          },
          {
            name: "Integrated Device",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
      },
    },
    Vulcan: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Mayer: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
            quantity: 4,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "Oriron Block",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 11,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
        ],
      },
    },
    Platinum: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 15,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
      },
    },
    Amiya: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 4,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 10,
          },
          {
            name: "Loxic Kohl",
            quantity: 10,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Integrated Device",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
      },
    },
    Cliffheart: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Specialist Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 3,
          },
          {
            name: "Oriron Block",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 3,
            },
            {
              name: "Orirock Concentration",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
          {
            name: "Orirock Cluster",
            quantity: 4,
          },
        ],
      },
    },
    May: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Oriron Cluster",
            quantity: 14,
          },
          {
            name: "Polyester Pack",
            quantity: 12,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Orirock Concentration",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Loxic Kohl",
            quantity: 3,
          },
        ],
      },
    },
    Ambriel: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Oriron Cluster",
            quantity: 16,
          },
          {
            name: "RMA70-12",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 1,
            },
            {
              name: "Integrated Device",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 1,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Coagulating Gel",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Incandescent Alloy",
            quantity: 3,
          },
        ],
      },
    },
    Skyfire: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
            quantity: 3,
          },
          {
            name: "Polyester Lump",
            quantity: 7,
          },
          {
            name: "Grindstone",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "Loxic Kohl",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "RMA70-24",
              quantity: 3,
            },
            {
              name: "Manganese Ore",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 3,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
      },
    },
    Myrtle: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Vanguard Chip",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Vanguard Chip Pack",
            quantity: 5,
          },
          {
            name: "Grindstone",
            quantity: 12,
          },
          {
            name: "Integrated Device",
            quantity: 8,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Polyester Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
      },
    },
    Shirayuki: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "Aketon",
            quantity: 15,
          },
          {
            name: "Oriron Cluster",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 1,
            },
            {
              name: "Manganese Ore",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 1,
            },
            {
              name: "Grindstone",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Polyester Lump",
              quantity: 2,
            },
            {
              name: "Orirock Concentration",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
      },
    },
    Saria: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Defender Chip",
            quantity: 5,
          },
          {
            name: "Sugar",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 5,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Defender Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 5,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polyester Lump",
              quantity: 4,
            },
            {
              name: "Orirock Cluster",
              quantity: 8,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Block",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Pack",
              quantity: 6,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Polymerization Preparation",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 6,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 8,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Sugar Pack",
            quantity: 4,
          },
          {
            name: "Oriron Cluster",
            quantity: 5,
          },
        ],
      },
    },
    SilverAsh: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Guard Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "White Horse Kohl",
            quantity: 6,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Oriron Block",
              quantity: 4,
            },
            {
              name: "Sugar Pack",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "White Horse Kohl",
              quantity: 4,
            },
            {
              name: "Keton Colloid",
              quantity: 8,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 7,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 4,
            },
            {
              name: "Polyester Pack",
              quantity: 6,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "D32 Steel",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 6,
            },
          ],
        },
        3: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
            {
              name: "Oriron Cluster",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 12,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 9,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "Sugar Lump",
              quantity: 5,
            },
          ],
        },
      },
      rarity: 6,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
          {
            name: "Ester",
            quantity: 6,
          },
          {
            name: "Oriron Shard",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar Pack",
            quantity: 7,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Polyester Pack",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 5,
          },
        ],
      },
    },
    Grani: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Vanguard Chip",
            quantity: 4,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 8,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "RMA70-24",
            quantity: 7,
          },
          {
            name: "Oriron Cluster",
            quantity: 13,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Cluster",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 3,
            },
            {
              name: "Optimized Device",
              quantity: 4,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "White Horse Kohl",
              quantity: 5,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Aketon",
              quantity: 5,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 3,
            },
            {
              name: "White Horse Kohl",
              quantity: 6,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "RMA70-24",
              quantity: 4,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
      },
    },
    Deepcolor: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Supporter Chip",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Supporter Chip Pack",
            quantity: 5,
          },
          {
            name: "Orirock Cluster",
            quantity: 20,
          },
          {
            name: "Manganese Ore",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 1,
            },
            {
              name: "Oriron Cluster",
              quantity: 2,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Manganese Trihydrate",
              quantity: 2,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Sugar Lump",
              quantity: 2,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 1,
            },
            {
              name: "Aketon",
              quantity: 4,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 2,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "RMA70-24",
              quantity: 2,
            },
          ],
        },
      },
      rarity: 4,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Aketon",
            quantity: 3,
          },
        ],
      },
    },
    Executor: {
      elite: {
        1: [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Sniper Chip",
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        2: [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 9,
          },
        ],
      },
      masteries: {
        1: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Oriron Block",
              quantity: 3,
            },
            {
              name: "Sugar Pack",
              quantity: 1,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Optimized Device",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 4,
            },
            {
              name: "Grindstone Pentahydrate",
              quantity: 4,
            },
          ],
        },
        2: {
          1: [
            {
              name: "Skill Summary - 3",
              quantity: 5,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polyester Pack",
              quantity: 3,
            },
          ],
          2: [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "White Horse Kohl",
              quantity: 3,
            },
            {
              name: "Keton Colloid",
              quantity: 5,
            },
          ],
          3: [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "D32 Steel",
              quantity: 4,
            },
            {
              name: "Optimized Device",
              quantity: 3,
            },
          ],
        },
      },
      rarity: 5,
      skillLevels: {
        2: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        3: [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        4: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        5: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        6: [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        7: [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 3,
          },
        ],
      },
    },
  },
};
export default RECIPES;
