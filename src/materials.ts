export interface Ingredient {
  name: string;
  quantity: number;
}

enum MaterialCategory {
  "Chip" = 1,
  "Chip Catalyst",
  "Skill Summary",
  "D32 Steel",
  "Bipolar Nanoflake",
  "Polymerization Preparation",
  "Alcohols",
  "Manganeses",
  "Grindstones",
  "RMAs",
  "Orirocks",
  "Devices",
  "Esters",
  "Sugars",
  "Orirons",
  "Ketones",
  "Gels",
  "Alloys",
  "Crystals",
  "LMD",
}

export interface RecommendedStages {
  mostEfficient: Stage;
  leastSanity?: Stage;
}

export interface Stage {
  name: string;
  dropRate: number; // as a percentage
  sanityCost: number;
  extraMaterial?: string;
}

export interface Material {
  tier: number;
  category: MaterialCategory;
  ingredients?: Ingredient[];
  recommendedStages?: RecommendedStages;
  craftingRecommended?: boolean;
}

const MATERIALS: Record<string, Material> = {
  LMD: {
    tier: 3,
    category: MaterialCategory.LMD,
  },
  Orirock: {
    tier: 0,
    category: MaterialCategory.Orirocks,
  },
  "Orirock Cube": {
    tier: 1,
    category: MaterialCategory.Orirocks,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Orirock",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        dropRate: 124,
        name: "1-7",
        sanityCost: 6,
      },
    },
  },
  "Orirock Cluster": {
    tier: 2,
    category: MaterialCategory.Orirocks,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Orirock Cube",
        quantity: 5,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "4-6",
        sanityCost: 18,
        dropRate: 45,
        extraMaterial: "Orirock Concentration",
      },
      leastSanity: {
        name: "2-4",
        sanityCost: 12,
        dropRate: 42,
      },
    },
    craftingRecommended: true,
  },
  "Orirock Concentration": {
    tier: 3,
    category: MaterialCategory.Orirocks,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Orirock Cluster",
        quantity: 4,
      },
    ],
  },
  "Sugar Substitute": {
    tier: 0,
    category: MaterialCategory.Sugars,
  },
  Sugar: {
    tier: 1,
    category: MaterialCategory.Sugars,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Sugar Substitute",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "5-3",
        dropRate: 85,
        sanityCost: 18,
      },
      leastSanity: {
        name: "S3-1",
        dropRate: 151,
        sanityCost: 15,
      },
    },
  },
  "Sugar Pack": {
    tier: 2,
    category: MaterialCategory.Sugars,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Sugar",
        quantity: 4,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "4-2",
        sanityCost: 18,
        dropRate: 40,
        extraMaterial: "Sugar Lump",
      },
      leastSanity: {
        name: "2-5",
        sanityCost: 12,
        dropRate: 37,
      },
    },
  },
  "Sugar Lump": {
    tier: 3,
    category: MaterialCategory.Sugars,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Sugar Pack",
        quantity: 2,
      },
      {
        name: "Oriron Cluster",
        quantity: 1,
      },
      {
        name: "Manganese Ore",
        quantity: 1,
      },
    ],
  },
  Ester: {
    tier: 0,
    category: MaterialCategory.Esters,
  },
  Polyester: {
    tier: 1,
    category: MaterialCategory.Esters,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Ester",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "1-8",
        sanityCost: 9,
        dropRate: 92,
      },
    },
  },
  "Polyester Pack": {
    tier: 2,
    category: MaterialCategory.Esters,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Polyester",
        quantity: 4,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "2-6",
        dropRate: 37,
        sanityCost: 12,
      },
    },
  },
  "Polyester Lump": {
    tier: 3,
    category: MaterialCategory.Esters,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Polyester Pack",
        quantity: 2,
      },
      {
        name: "Aketon",
        quantity: 1,
      },
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
    ],
  },
  "Oriron Shard": {
    tier: 0,
    category: MaterialCategory.Orirons,
  },
  Oriron: {
    tier: 1,
    category: MaterialCategory.Orirons,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Oriron Shard",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "5-7",
        dropRate: 106,
        sanityCost: 21,
        extraMaterial: "Grindstone",
      },
      leastSanity: {
        name: "S3-3",
        dropRate: 121,
        sanityCost: 15,
      },
    },
  },
  "Oriron Cluster": {
    tier: 2,
    category: MaterialCategory.Orirons,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Oriron",
        quantity: 4,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "S4-1",
        dropRate: 32,
        sanityCost: 18,
        extraMaterial: "Oriron Block",
      },
      leastSanity: {
        name: "2-8",
        dropRate: 22,
        sanityCost: 12,
      },
    },
  },
  "Oriron Block": {
    tier: 3,
    category: MaterialCategory.Orirons,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Oriron Cluster",
        quantity: 2,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Polyester Pack",
        quantity: 1,
      },
    ],
  },
  Diketon: {
    tier: 0,
    category: MaterialCategory.Ketones,
  },
  Polyketon: {
    tier: 1,
    category: MaterialCategory.Ketones,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Diketon",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "6-16",
        dropRate: 100,
        sanityCost: 21,
        extraMaterial: "Integrated Device",
      },
      leastSanity: {
        name: "3-7",
        dropRate: 123,
        sanityCost: 15,
      },
    },
  },
  Aketon: {
    tier: 2,
    category: MaterialCategory.Ketones,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Polyketon",
        quantity: 4,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "4-5",
        sanityCost: 18,
        dropRate: 31,
        extraMaterial: "Keton Colloid",
      },
      leastSanity: {
        name: "3-1",
        sanityCost: 15,
        dropRate: 37,
      },
    },
  },
  "Keton Colloid": {
    tier: 3,
    category: MaterialCategory.Ketones,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Aketon",
        quantity: 2,
      },
      {
        name: "Sugar Pack",
        quantity: 1,
      },
      {
        name: "Manganese Ore",
        quantity: 1,
      },
    ],
  },
  "Damaged Device": {
    tier: 0,
    category: MaterialCategory.Devices,
  },
  Device: {
    tier: 1,
    category: MaterialCategory.Devices,
    ingredients: [
      {
        name: "LMD",
        quantity: 100,
      },
      {
        name: "Damaged Device",
        quantity: 3,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "6-11",
        dropRate: 76,
        sanityCost: 21,
        extraMaterial: "Loxic Kohl",
      },
      leastSanity: {
        name: "S3-4",
        dropRate: 92,
        sanityCost: 15,
      },
    },
  },
  "Integrated Device": {
    tier: 2,
    category: MaterialCategory.Devices,
    ingredients: [
      {
        name: "LMD",
        quantity: 200,
      },
      {
        name: "Device",
        quantity: 4,
      },
    ],
    recommendedStages: {
      mostEfficient: {
        name: "4-10",
        dropRate: 30,
        sanityCost: 21,
        extraMaterial: "Optimized Device",
      },
      leastSanity: {
        name: "3-4",
        dropRate: 28,
        sanityCost: 15,
      },
    },
  },
  "Optimized Device": {
    tier: 3,
    category: MaterialCategory.Devices,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 2,
      },
      {
        name: "Grindstone",
        quantity: 1,
      },
    ],
  },
  Grindstone: {
    tier: 2,
    category: MaterialCategory.Grindstones,
    recommendedStages: {
      mostEfficient: {
        name: "4-8",
        dropRate: 35,
        sanityCost: 21,
        extraMaterial: "Grindstone Pentahydrate",
      },
      leastSanity: {
        name: "3-3",
        dropRate: 32,
        sanityCost: 15,
      },
    },
  },
  "Manganese Ore": {
    tier: 2,
    category: MaterialCategory.Manganeses,
    recommendedStages: {
      mostEfficient: {
        name: "4-7",
        sanityCost: 18,
        dropRate: 30,
        extraMaterial: "Manganese Trihydrate",
      },
      leastSanity: {
        name: "3-2",
        sanityCost: 15,
        dropRate: 37,
      },
    },
  },
  "Loxic Kohl": {
    tier: 2,
    category: MaterialCategory.Alcohols,
    recommendedStages: {
      mostEfficient: {
        name: "4-4",
        sanityCost: 18,
        dropRate: 37,
        extraMaterial: "White Horse Kohl",
      },
      leastSanity: {
        name: "6-11",
        dropRate: 49,
        sanityCost: 21,
        extraMaterial: "Device",
      },
    },
  },
  "RMA70-12": {
    tier: 2,
    category: MaterialCategory.RMAs,
    recommendedStages: {
      mostEfficient: {
        name: "4-9",
        dropRate: 30,
        extraMaterial: "RMA70-24",
        sanityCost: 21,
      },
      leastSanity: {
        name: "2-10",
        dropRate: 28,
        sanityCost: 15,
      },
    },
  },
  "Coagulating Gel": {
    tier: 2,
    category: MaterialCategory.Gels,
    recommendedStages: {
      mostEfficient: {
        name: "S5-7",
        dropRate: 26,
        extraMaterial: "Polymerized Gel",
        sanityCost: 18,
      },
      leastSanity: {
        name: "S4-10",
        dropRate: 29,
        sanityCost: 18,
      },
    },
  },
  "Incandescent Alloy": {
    tier: 2,
    category: MaterialCategory.Alloys,
    recommendedStages: {
      mostEfficient: {
        name: "S3-6",
        dropRate: 39,
        sanityCost: 15,
      },
    },
  },
  "Crystal Component": {
    tier: 2,
    category: MaterialCategory.Crystals,
  },
  "White Horse Kohl": {
    tier: 3,
    category: MaterialCategory.Alcohols,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
      {
        name: "Sugar Pack",
        quantity: 1,
      },
      {
        name: "RMA70-12",
        quantity: 1,
      },
    ],
  },
  "Manganese Trihydrate": {
    tier: 3,
    category: MaterialCategory.Manganeses,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Manganese Ore",
        quantity: 2,
      },
      {
        name: "Polyester Pack",
        quantity: 1,
      },
      {
        name: "Loxic Kohl",
        quantity: 1,
      },
    ],
  },
  "Grindstone Pentahydrate": {
    tier: 3,
    category: MaterialCategory.Grindstones,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Grindstone",
        quantity: 1,
      },
      {
        name: "Oriron Cluster",
        quantity: 1,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
    ],
  },
  "RMA70-24": {
    tier: 3,
    category: MaterialCategory.RMAs,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "RMA70-12",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 2,
      },
      {
        name: "Aketon",
        quantity: 1,
      },
    ],
  },
  "Polymerized Gel": {
    tier: 3,
    category: MaterialCategory.Gels,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Oriron Cluster",
        quantity: 1,
      },
      {
        name: "Coagulating Gel",
        quantity: 1,
      },
      {
        name: "Incandescent Alloy",
        quantity: 1,
      },
    ],
  },
  "Incandescent Alloy Block": {
    tier: 3,
    category: MaterialCategory.Alloys,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
      {
        name: "Grindstone",
        quantity: 1,
      },
      {
        name: "Incandescent Alloy",
        quantity: 1,
      },
    ],
  },
  "Crystal Circuit": {
    tier: 3,
    category: MaterialCategory.Crystals,
    ingredients: [
      {
        name: "LMD",
        quantity: 300,
      },
      {
        name: "Crystal Component",
        quantity: 2,
      },
      {
        name: "Coagulating Gel",
        quantity: 1,
      },
      {
        name: "Incandescent Alloy",
        quantity: 1,
      },
    ],
  },
  "Polymerization Preparation": {
    tier: 4,
    category: MaterialCategory["Polymerization Preparation"],
    ingredients: [
      {
        name: "LMD",
        quantity: 400,
      },
      {
        name: "Orirock Concentration",
        quantity: 1,
      },
      {
        name: "Oriron Block",
        quantity: 1,
      },
      {
        name: "Keton Colloid",
        quantity: 1,
      },
    ],
  },
  "Bipolar Nanoflake": {
    tier: 4,
    category: MaterialCategory["Bipolar Nanoflake"],
    ingredients: [
      {
        name: "LMD",
        quantity: 400,
      },
      {
        name: "Optimized Device",
        quantity: 1,
      },
      {
        name: "White Horse Kohl",
        quantity: 2,
      },
    ],
  },
  "D32 Steel": {
    tier: 4,
    category: MaterialCategory["D32 Steel"],
    ingredients: [
      {
        name: "LMD",
        quantity: 400,
      },
      {
        name: "Manganese Trihydrate",
        quantity: 1,
      },
      {
        name: "Grindstone Pentahydrate",
        quantity: 1,
      },
      {
        name: "RMA70-24",
        quantity: 1,
      },
    ],
  },
  "Crystal Electronic Unit": {
    tier: 4,
    category: MaterialCategory.Crystals,
    ingredients: [
      {
        name: "LMD",
        quantity: 400,
      },
      {
        name: "Crystal Circuit",
        quantity: 1,
      },
      {
        name: "Polymerized Gel",
        quantity: 2,
      },
      {
        name: "Incandescent Alloy Block",
        quantity: 1,
      },
    ],
  },
  "Skill Summary - 1": {
    tier: 1,
    category: MaterialCategory["Skill Summary"],
  },
  "Skill Summary - 2": {
    tier: 2,
    category: MaterialCategory["Skill Summary"],
    ingredients: [
      {
        name: "Skill Summary - 1",
        quantity: 3,
      },
    ],
  },
  "Skill Summary - 3": {
    tier: 3,
    category: MaterialCategory["Skill Summary"],
    ingredients: [
      {
        name: "Skill Summary - 2",
        quantity: 3,
      },
    ],
  },
  "Chip Catalyst": {
    tier: 3,
    category: MaterialCategory["Chip Catalyst"],
  },
  "Caster Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Caster Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Caster Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Caster Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Vanguard Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Vanguard Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Vanguard Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Vanguard Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Defender Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Defender Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Defender Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Defender Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Sniper Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Sniper Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Sniper Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Sniper Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Guard Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Guard Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Guard Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Guard Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Supporter Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Supporter Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Supporter Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Supporter Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Medic Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Medic Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Medic Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Medic Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
  "Specialist Chip": {
    tier: 2,
    category: MaterialCategory.Chip,
  },
  "Specialist Chip Pack": {
    tier: 3,
    category: MaterialCategory.Chip,
  },
  "Specialist Dualchip": {
    tier: 4,
    category: MaterialCategory.Chip,
    ingredients: [
      {
        name: "Specialist Chip Pack",
        quantity: 2,
      },
      {
        name: "Chip Catalyst",
        quantity: 1,
      },
    ],
  },
};
export default MATERIALS;
