import { Material } from "./materials";

type SkillLevel = 2 | 3 | 4 | 5 | 6 | 7;
type MasteryLevel = 1 | 2 | 3;

interface OperatorRecipeBook {
  elite?: { 1: Material[]; 2?: Material[] };
  skillLevels: { [skillLevel in SkillLevel]: Material[] };
  masteries?: {
    1: {
      [mastery in MasteryLevel]: Material[];
    };
    2: {
      [mastery in MasteryLevel]: Material[];
    };
    3?: {
      [mastery in MasteryLevel]: Material[];
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
    Nightingale: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Earthspirit: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Gravel: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Orchid: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Elysium: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            quantity: 4,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "Incandescent Alloy Block",
            quantity: 7,
          },
          {
            name: "Aketon",
            quantity: 16,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
          "3": [
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
    },
    Eunectes: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Incandescent Alloy",
            quantity: 6,
          },
        ],
        "7": [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
          {
            name: "Coagulating Gel",
            quantity: 4,
          },
        ],
      },
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Defender Chip",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 7,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "2": [
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
            name: "Polymerized Gel",
            quantity: 7,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    Firewatch: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Pramanix: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Lappland: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Myrrh: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Aak: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Incandescent Alloy",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Schwarz: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 7,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Suzuran: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Supporter Chip",
            quantity: 5,
          },
          {
            name: "Polyester",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 4,
          },
          {
            name: "D32 Steel",
            quantity: 4,
          },
          {
            name: "Grindstone Pentahydrate",
            quantity: 8,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    "Projekt Red": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Courier: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Eyjafjalla: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 7,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Cardigan: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
        "2": [],
      },
    },
    Leizi: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Coagulating Gel",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Blaze: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 8,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Ethan: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Phantom: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Specialist Chip",
            quantity: 5,
          },
          {
            name: "Polyketon",
            quantity: 7,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Specialist Dualchip",
            quantity: 4,
          },
          {
            name: "Polymerization Preparation",
            quantity: 4,
          },
          {
            name: "Polymerized Gel",
            quantity: 9,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    Shining: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Swire: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Grani: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Melantha: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Integrated Device",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    "Blue Poison": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Matoimaru: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Greyy: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Ceylon: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Frostleaf: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Shamare: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            quantity: 5,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Supporter Dualchip",
            quantity: 3,
          },
          {
            name: "Orirock Concentration",
            quantity: 8,
          },
          {
            name: "Incandescent Alloy",
            quantity: 17,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    Spot: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
        "2": [],
      },
    },
    Gummy: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Executor: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Nearl: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Scavenger: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Shirayuki: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Sora: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Nightmare: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Bagpipe: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Plume: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Aketon",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
        "2": [],
      },
    },
    Broca: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Specter: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Beagle: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Manganese Ore",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
        "2": [],
      },
    },
    Indra: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    "Dur-nar": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Skyfire: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    "Ch'en": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Tomimi: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Polyester",
            quantity: 3,
          },
        ],
        "2": [
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
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 14,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Platinum: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Aciddrop: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Coagulating Gel",
            quantity: 2,
          },
        ],
      },
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Sniper Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Sniper Chip Pack",
            quantity: 5,
          },
          {
            name: "RMA70-12",
            quantity: 10,
          },
          {
            name: "Integrated Device",
            quantity: 8,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
          ],
        },
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    SilverAsh: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar Pack",
            quantity: 7,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Purestream: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Manganese Ore",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Medic Chip",
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
        "2": [
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
            quantity: 11,
          },
          {
            name: "Coagulating Gel",
            quantity: 9,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 1,
            },
            {
              name: "Orirock Cluster",
              quantity: 6,
            },
          ],
          "2": [
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
          "3": [
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
        "2": {
          "1": [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Incandescent Alloy",
              quantity: 3,
            },
          ],
          "2": [
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
          "3": [
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
    },
    Angelina: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Estelle: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Rope: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Vermeil: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Hibiscus: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar Pack",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Silence: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Fang: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Polyester",
            quantity: 2,
          },
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
        ],
        "6": [
          {
            name: "Oriron Cluster",
            quantity: 1,
          },
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Catapult: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Manganese Ore",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
        "2": [],
      },
    },
    Reed: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Tsukinogi: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Supporter Chip",
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
        "2": [
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
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 12,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Beehunter: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Siege: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    FEater: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Click: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
          {
            name: "Skill Summary - 3",
            quantity: 4,
          },
          {
            name: "Coagulating Gel",
            quantity: 2,
          },
        ],
      },
      elite: {
        "1": [
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
            name: "Polyketon",
            quantity: 1,
          },
        ],
        "2": [
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
            name: "Oriron Cluster",
            quantity: 9,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
          ],
        },
        "2": {
          "1": [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Coagulating Gel",
              quantity: 3,
            },
          ],
          "2": [
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
          "3": [
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
    },
    Haze: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Kroos: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Sussurro: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Ayerscarpe: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Oriron",
            quantity: 3,
          },
        ],
        "2": [
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
            name: "Coagulating Gel",
            quantity: 12,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Cuora: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Scene: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "2": [
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
            name: "Manganese Ore",
            quantity: 12,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    Bison: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Skadi: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Gitano: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Aketon",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Thorns: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 8,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Guard Chip",
            quantity: 5,
          },
          {
            name: "Oriron",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "2": [
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
            name: "Oriron Block",
            quantity: 6,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
        },
      },
    },
    Dobermann: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Vanilla: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Aketon",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Popukar: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Ceobe: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Aketon",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Leonhardt: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
          {
            name: "Skill Summary - 3",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
          {
            name: "Incandescent Alloy",
            quantity: 2,
          },
        ],
      },
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
            quantity: 3,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
          {
            name: "Loxic Kohl",
            quantity: 15,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Mousse: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Adnachiel: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Orirock",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Sugar",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "RMA70-12",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Ansel: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester Pack",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Hung: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Weedy: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cube",
            quantity: 7,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Loxic Kohl",
            quantity: 7,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Specialist Chip",
            quantity: 5,
          },
          {
            name: "Device",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 4,
          },
        ],
        "2": [
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
            name: "Manganese Trihydrate",
            quantity: 6,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    Jessica: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Amiya: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Steward: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cube",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron Cluster",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Lava: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyester",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Orirock Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Hoshiguma: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Manticore: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Meteor: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Matterhorn: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cluster",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Croissant: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Cliffheart: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Zima: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Cutter: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Incandescent Alloy",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Polyketon",
            quantity: 1,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Coagulating Gel",
            quantity: 12,
          },
          {
            name: "Manganese Ore",
            quantity: 11,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Keton Colloid",
              quantity: 1,
            },
            {
              name: "Coagulating Gel",
              quantity: 3,
            },
          ],
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 2,
            },
          ],
        },
        "2": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
          ],
        },
      },
    },
    Ambriel: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Coagulating Gel",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Breeze: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Vigna: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Folinic: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Coagulating Gel",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Medic Chip",
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
        "2": [
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
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 8,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Mayer: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Astesia: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cluster",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Exusiai: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron Cluster",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Texas: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Perfumer: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "RMA70-12",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Jaye: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 15000,
          },
          {
            name: "Specialist Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Specialist Chip Pack",
            quantity: 5,
          },
          {
            name: "Grindstone",
            quantity: 14,
          },
          {
            name: "Aketon",
            quantity: 8,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Polymerization Preparation",
              quantity: 2,
            },
            {
              name: "Polymerized Gel",
              quantity: 2,
            },
          ],
        },
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    "Rosa (Poca)": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
        "7": [
          {
            name: "Skill Summary - 3",
            quantity: 8,
          },
          {
            name: "Incandescent Alloy",
            quantity: 4,
          },
          {
            name: "Manganese Ore",
            quantity: 5,
          },
        ],
      },
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 30000,
          },
          {
            name: "Sniper Chip",
            quantity: 5,
          },
          {
            name: "Sugar",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Optimized Device",
            quantity: 6,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 15,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 6,
            },
            {
              name: "RMA70-24",
              quantity: 5,
            },
          ],
        },
      },
    },
    Provence: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Utage: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Loxic Kohl",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Absinthe: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "2": [
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
            name: "Incandescent Alloy",
            quantity: 10,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Vulcan: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Gavial: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Beeswax: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Incandescent Alloy",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Caster Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Caster Dualchip",
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Nian: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Coagulating Gel",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Warfarin: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Snowsant: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Saria: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Orirock Cluster",
            quantity: 8,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Deepcolor: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Myrtle: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar Pack",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Shaw: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Sugar Substitute",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyester",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Grindstone",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Bibeak: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Chiave: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Damaged Device",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Vanguard Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Vanguard Dualchip",
            quantity: 3,
          },
          {
            name: "Manganese Trihydrate",
            quantity: 7,
          },
          {
            name: "Grindstone",
            quantity: 13,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Ifrit: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Mostima: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "RMA70-12",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Liskarm: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Flint: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Grindstone",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 15,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Flamebringer: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Istina: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Ester",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Ptilopsis: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Sesa: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "RMA70-12",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    GreyThroat: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Conviction: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Diketon",
            quantity: 3,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Guard Chip Pack",
            quantity: 5,
          },
          {
            name: "Integrated Device",
            quantity: 11,
          },
          {
            name: "Coagulating Gel",
            quantity: 9,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Glaucus: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    "Waai Fu": {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester Pack",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Asbestos: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 20000,
          },
          {
            name: "Defender Chip",
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
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Defender Dualchip",
            quantity: 3,
          },
          {
            name: "Optimized Device",
            quantity: 6,
          },
          {
            name: "Manganese Ore",
            quantity: 10,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Keton Colloid",
              quantity: 3,
            },
            {
              name: "Polymerized Gel",
              quantity: 6,
            },
          ],
          "3": [
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
    },
    Meteorite: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Diketon",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Orirock Cube",
            quantity: 8,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron Cluster",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Hellagur: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Manganese Ore",
            quantity: 6,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Sideroca: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Incandescent Alloy",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            quantity: 7,
          },
          {
            name: "Device",
            quantity: 2,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 120000,
          },
          {
            name: "Guard Dualchip",
            quantity: 3,
          },
          {
            name: "Polymerized Gel",
            quantity: 9,
          },
          {
            name: "Oriron Cluster",
            quantity: 13,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Polymerized Gel",
              quantity: 5,
            },
          ],
        },
        "2": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
          ],
        },
      },
    },
    Magallan: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Polyketon",
            quantity: 4,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Andreana: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Orirock",
            quantity: 10,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 5,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Integrated Device",
            quantity: 3,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            quantity: 8,
          },
          {
            name: "Sugar",
            quantity: 2,
          },
        ],
        "2": [
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
            name: "RMA70-12",
            quantity: 8,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 10,
            },
            {
              name: "Polymerization Preparation",
              quantity: 4,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 4,
            },
          ],
        },
      },
    },
    W: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 5,
          },
        ],
        "3": [
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
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "5": [
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
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 8,
          },
          {
            name: "Integrated Device",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Sugar",
            quantity: 5,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 180000,
          },
          {
            name: "Sniper Dualchip",
            quantity: 4,
          },
          {
            name: "Bipolar Nanoflake",
            quantity: 4,
          },
          {
            name: "Keton Colloid",
            quantity: 7,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
        "3": {
          "1": [
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
          "2": [
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
          "3": [
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
      },
    },
    May: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Ester",
            quantity: 4,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Polyketon",
            quantity: 2,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Integrated Device",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Franka: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Oriron Shard",
            quantity: 5,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyketon",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Device",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Loxic Kohl",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
    Podenco: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Damaged Device",
            quantity: 2,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Orirock Cube",
            quantity: 2,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Sugar",
            quantity: 3,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 3,
          },
          {
            name: "Oriron Cluster",
            quantity: 2,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
            name: "Oriron",
            quantity: 1,
          },
        ],
        "2": [
          {
            name: "LMD",
            quantity: 60000,
          },
          {
            name: "Supporter Chip Pack",
            quantity: 5,
          },
          {
            name: "Incandescent Alloy",
            quantity: 19,
          },
          {
            name: "Grindstone",
            quantity: 5,
          },
        ],
      },
      masteries: {
        "1": {
          "1": [
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
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "Bipolar Nanoflake",
              quantity: 2,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 2,
            },
          ],
        },
        "2": {
          "1": [
            {
              name: "Skill Summary - 3",
              quantity: 2,
            },
            {
              name: "Oriron Block",
              quantity: 1,
            },
            {
              name: "Incandescent Alloy",
              quantity: 3,
            },
          ],
          "2": [
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
          "3": [
            {
              name: "Skill Summary - 3",
              quantity: 6,
            },
            {
              name: "D32 Steel",
              quantity: 2,
            },
            {
              name: "Incandescent Alloy Block",
              quantity: 2,
            },
          ],
        },
      },
    },
    Midnight: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 1,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 2,
          },
          {
            name: "Oriron Shard",
            quantity: 1,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Polyketon",
            quantity: 1,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Device",
            quantity: 1,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 1,
          },
          {
            name: "Grindstone",
            quantity: 1,
          },
        ],
        "7": [
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
      elite: {
        "1": [
          {
            name: "LMD",
            quantity: 10000,
          },
        ],
      },
    },
    Savage: {
      skillLevels: {
        "2": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
        ],
        "3": [
          {
            name: "Skill Summary - 1",
            quantity: 4,
          },
          {
            name: "Sugar Substitute",
            quantity: 7,
          },
        ],
        "4": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Polyester",
            quantity: 3,
          },
        ],
        "5": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Oriron",
            quantity: 4,
          },
        ],
        "6": [
          {
            name: "Skill Summary - 2",
            quantity: 6,
          },
          {
            name: "Aketon",
            quantity: 4,
          },
        ],
        "7": [
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
      elite: {
        "1": [
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
        "2": [
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
        "1": {
          "1": [
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
          "2": [
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
          "3": [
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
        "2": {
          "1": [
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
          "2": [
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
          "3": [
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
    },
  },
};
export default RECIPES;
