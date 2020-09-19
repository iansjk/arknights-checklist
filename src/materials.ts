export interface Material {
  name: string;
  quantity?: number;
  ingredients?: Material[];
}

const MATERIALS: Material[] = [
  {
    name: "LMD",
  },
  {
    name: "Orirock",
  },
  {
    name: "Orirock Cube",
    ingredients: [
      {
        name: "Orirock",
        quantity: 3,
      },
    ],
  },
  {
    name: "Orirock Cluster",
    ingredients: [
      {
        name: "Orirock Cube",
        quantity: 5,
      },
    ],
  },
  {
    name: "Orirock Concentration",
    ingredients: [
      {
        name: "Orirock Cluster",
        quantity: 4,
      },
    ],
  },
  {
    name: "Sugar Substitute",
  },
  {
    name: "Sugar",
    ingredients: [
      {
        name: "Sugar Substitute",
        quantity: 3,
      },
    ],
  },
  {
    name: "Sugar Pack",
    ingredients: [
      {
        name: "Sugar",
        quantity: 4,
      },
    ],
  },
  {
    name: "Sugar Lump",
    ingredients: [
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
  {
    name: "Ester",
  },
  {
    name: "Polyester",
    ingredients: [
      {
        name: "Ester",
        quantity: 3,
      },
    ],
  },
  {
    name: "Polyester Pack",
    ingredients: [
      {
        name: "Polyester",
        quantity: 4,
      },
    ],
  },
  {
    name: "Polyester Lump",
    ingredients: [
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
  {
    name: "Oriron Shard",
  },
  {
    name: "Oriron",
    ingredients: [
      {
        name: "Oriron Shard",
        quantity: 3,
      },
    ],
  },
  {
    name: "Oriron Cluster",
    ingredients: [
      {
        name: "Oriron",
        quantity: 4,
      },
    ],
  },
  {
    name: "Oriron Block",
    ingredients: [
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
  {
    name: "Diketon",
  },
  {
    name: "Polyketon",
    ingredients: [
      {
        name: "Diketon",
        quantity: 3,
      },
    ],
  },
  {
    name: "Aketon",
    ingredients: [
      {
        name: "Polyketon",
        quantity: 4,
      },
    ],
  },
  {
    name: "Keton Colloid",
    ingredients: [
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
  {
    name: "Damaged Device",
  },
  {
    name: "Device",
    ingredients: [
      {
        name: "Damaged Device",
        quantity: 3,
      },
    ],
  },
  {
    name: "Integrated Device",
    ingredients: [
      {
        name: "Device",
        quantity: 4,
      },
    ],
  },
  {
    name: "Optimized Device",
    ingredients: [
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
  {
    name: "Grindstone",
  },
  {
    name: "Manganese Ore",
  },
  {
    name: "Loxic Kohl",
  },
  {
    name: "RMA70-12",
  },
  {
    name: "Coagulating Gel",
  },
  {
    name: "Incandescent Alloy",
  },
  {
    name: "White Horse Kohl",
    ingredients: [
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
  {
    name: "Manganese Trihydrate",
    ingredients: [
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
  {
    name: "Grindstone Pentahydrate",
    ingredients: [
      {
        name: "Grindstone",
        quantity: 1,
      },
      {
        name: "Orirock Cluster",
        quantity: 1,
      },
      {
        name: "Integrated Device",
        quantity: 1,
      },
    ],
  },
  {
    name: "RMA70-24",
    ingredients: [
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
  {
    name: "Polymerized Gel",
    ingredients: [
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
  {
    name: "Incandescent Alloy Block",
    ingredients: [
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
  {
    name: "Polymerization Preparation",
    ingredients: [
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
  {
    name: "Bipolar Nanoflake",
    ingredients: [
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
  {
    name: "D32 Steel",
    ingredients: [
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
  {
    name: "Skill Summary - 1",
  },
  {
    name: "Skill Summary - 2",
    ingredients: [
      {
        name: "Skill Summary - 1",
        quantity: 3,
      },
    ],
  },
  {
    name: "Skill Summary - 3",
    ingredients: [
      {
        name: "Skill Summary - 2",
        quantity: 3,
      },
    ],
  },
];
const materialMap = new Map(
  MATERIALS.map((material) => [material.name, material])
);
const setIngredients = (material: Material): void => {
  const subingredients = materialMap.get(material.name)?.ingredients;
  if (subingredients && subingredients.length > 0) {
    subingredients.forEach((submaterial) => setIngredients(submaterial));
    // eslint-disable-next-line no-param-reassign
    material.ingredients = subingredients;
  }
};
MATERIALS.forEach((material) => setIngredients(material));
export default MATERIALS;
