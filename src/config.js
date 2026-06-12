// Central game data: ages, units, buildings, economy tuning.

export const TILE = 2;            // world units per grid tile
export const MAP_SIZE = 96;       // tiles per side
export const WORLD = MAP_SIZE * TILE;

export const CARRY_CAPACITY = 10;
export const POP_MAX = 120;

export const PLAYER = 0;
export const ENEMY = 1;

export const TEAM_COLORS = [0x2f6fe0, 0xd23b2e];
export const TEAM_NAMES = ['Blue', 'Red'];

export const AGES = [
  { name: 'Dark Age',     cost: null },
  { name: 'Feudal Age',   cost: { food: 400, gold: 0 },   time: 25 },
  { name: 'Castle Age',   cost: { food: 700, gold: 200 }, time: 35 },
  { name: 'Imperial Age', cost: { food: 1000, gold: 600 }, time: 45 },
];

// Per-age combat scaling applied to units while their owner is in that age.
export const AGE_HP_MULT = [1, 1.15, 1.32, 1.5];
export const AGE_ATK_MULT = [1, 1.15, 1.32, 1.5];

export const UNITS = {
  villager: {
    name: 'Villager', icon: '\u{1F9D1}', age: 1,
    cost: { food: 50 }, trainTime: 9,
    hp: 32, atk: 3, range: 0.6, atkSpeed: 1.4, speed: 5.4, aggro: 0,
    gatherRate: 1.25, // per second
  },
  militia: {
    name: 'Militia', icon: '⚔️', age: 1,
    cost: { food: 50, gold: 15 }, trainTime: 9,
    hp: 52, atk: 7, range: 0.7, atkSpeed: 1.3, speed: 4.9, aggro: 11,
  },
  archer: {
    name: 'Archer', icon: '\u{1F3F9}', age: 2,
    cost: { wood: 30, gold: 35 }, trainTime: 10,
    hp: 36, atk: 6, range: 11, atkSpeed: 1.6, speed: 5.0, aggro: 12, projectile: 'arrow',
  },
  knight: {
    name: 'Knight', icon: '\u{1F40E}', age: 3,
    cost: { food: 70, gold: 60 }, trainTime: 13,
    hp: 110, atk: 12, range: 0.9, atkSpeed: 1.5, speed: 7.2, aggro: 12,
  },
  catapult: {
    name: 'Catapult', icon: '\u{1FA93}', age: 4,
    cost: { wood: 140, gold: 80 }, trainTime: 18,
    hp: 85, atk: 38, range: 13, atkSpeed: 4.5, speed: 3.4, aggro: 13,
    projectile: 'stone', splash: 2.6, bonusVsBuilding: 2.2, minRange: 3,
  },
};

export const BUILDINGS = {
  towncenter: {
    name: 'Town Center', icon: '\u{1F3DB}️', age: 1,
    cost: { wood: 300 }, buildTime: 50,
    hp: 1450, size: 4, pop: 10, dropoff: true,
    trains: ['villager'], researchesAge: true,
    attack: { atk: 6, range: 12, atkSpeed: 1.8, needsGarrison: false },
  },
  house: {
    name: 'House', icon: '\u{1F3E0}', age: 1,
    cost: { wood: 30 }, buildTime: 9,
    hp: 280, size: 2, pop: 5,
  },
  storehouse: {
    name: 'Storehouse', icon: '\u{1F4E6}', age: 1,
    cost: { wood: 45 }, buildTime: 10,
    hp: 320, size: 2, dropoff: true,
  },
  barracks: {
    name: 'Barracks', icon: '⚔️', age: 1,
    cost: { wood: 125 }, buildTime: 18,
    hp: 750, size: 3, trains: ['militia'],
  },
  farm: {
    name: 'Farm', icon: '\u{1F33E}', age: 1,
    cost: { wood: 50 }, buildTime: 8,
    hp: 120, size: 2, isFarm: true, farmRate: 0.85,
  },
  archeryrange: {
    name: 'Archery Range', icon: '\u{1F3F9}', age: 2,
    cost: { wood: 140 }, buildTime: 18,
    hp: 700, size: 3, trains: ['archer'],
  },
  tower: {
    name: 'Watch Tower', icon: '\u{1F5FC}', age: 2,
    cost: { wood: 60, gold: 50 }, buildTime: 16,
    hp: 620, size: 1,
    attack: { atk: 7, range: 13, atkSpeed: 1.7 },
  },
  wall: {
    name: 'Palisade Wall', icon: '\u{1F6A7}', age: 2,
    cost: { wood: 8 }, buildTime: 4,
    hp: 320, size: 1, isWall: true,
  },
  stable: {
    name: 'Stable', icon: '\u{1F40E}', age: 3,
    cost: { wood: 160 }, buildTime: 20,
    hp: 800, size: 3, trains: ['knight'],
  },
  siegeworkshop: {
    name: 'Siege Workshop', icon: '\u{1FA93}', age: 4,
    cost: { wood: 190, gold: 60 }, buildTime: 22,
    hp: 850, size: 3, trains: ['catapult'],
  },
};

// Build menu order for the villager command card.
export const BUILD_MENU = [
  'house', 'storehouse', 'farm', 'barracks',
  'archeryrange', 'tower', 'wall', 'stable',
  'siegeworkshop', 'towncenter',
];

export const RESOURCE_NODES = {
  tree:  { name: 'Tree', res: 'wood', amount: 110 },
  berry: { name: 'Berry Bush', res: 'food', amount: 160 },
  gold:  { name: 'Gold Mine', res: 'gold', amount: 850 },
};

export const START_RESOURCES = { wood: 220, food: 220, gold: 120 };

export function costText(cost) {
  if (!cost) return '';
  const parts = [];
  if (cost.wood) parts.push(`${cost.wood}\u{1F6B5}`.replace('\u{1F6B5}', 'W'));
  if (cost.food) parts.push(`${cost.food}F`);
  if (cost.gold) parts.push(`${cost.gold}G`);
  return parts.join(' ');
}

export function canAfford(res, cost) {
  if (!cost) return true;
  return (res.wood >= (cost.wood || 0)) && (res.food >= (cost.food || 0)) && (res.gold >= (cost.gold || 0));
}

export function payCost(res, cost) {
  if (!cost) return;
  res.wood -= cost.wood || 0;
  res.food -= cost.food || 0;
  res.gold -= cost.gold || 0;
}

export function refundCost(res, cost) {
  if (!cost) return;
  res.wood += cost.wood || 0;
  res.food += cost.food || 0;
  res.gold += cost.gold || 0;
}
