// ==========================================================================
// PLACEHOLDER PHOTOGRAPHY
// Real Marge's photography should replace every URL below before launch.
// Grouped by subject so a real photo library can be swapped in one place.
// Source: curated Unsplash photography (free to use), NOT AI-generated.
// ==========================================================================

const u = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  // ---- World / hero ----
  heroWorld: u('photo-1414235077428-338989a2e8c0', 2000), // diner counter/interior warm light
  heroFargo: u('photo-1449824913935-59a10b8d2000', 2000), // downtown city street warm evening
  heroOttertail: u('photo-1500375592092-40eb2168fd21', 2000), // lake dock sunrise

  // ---- Diner (Fargo) ----
  dinerPancakes: '/photos/real/diner-pancakes.jpg', // real photography
  dinerSaladBar: '/photos/real/diner-hashbrowns-spread.jpg', // real photography
  dinerCounter: u('photo-1554118811-1e0d58224f24'),
  dinerCoffee: u('photo-1495474472287-4d71bcdd2085'),
  dinerBooth: u('photo-1466978913421-dad2ebd01d17'),
  dinerExterior: u('photo-1517248135467-4c7edcad34c4'),
  dinerShakerShelf: u('photo-1602167626998-3bf7d0e3a6f4'),

  // ---- Bar ----
  barNeon: '/photos/real/bar-neon-cheers.jpg', // real photography
  barPour: u('photo-1470337458703-46ad1756a187'),
  barBasement: u('photo-1514362545857-3bc16c4c7d1b'),
  barPatio: u('photo-1521017432531-fbd92d768814'),
  barCrowd: u('photo-1543007630-9710e4a00a20'),

  // ---- Supper Club ----
  supperDinnerTable: u('photo-1414235077428-338989a2e8c0'),
  supperSteak: '/photos/real/supper-club-steak-shakers.jpg', // real photography
  supperCocktail: u('photo-1470337458703-46ad1756a187'),
  supperInterior: u('photo-1414235077428-338989a2e8c0'),
  supperCandlelight: u('photo-1552566626-52f8b828add9'),
  supperWinePour: u('photo-1510812431401-41d2bd2722f3'),

  // ---- Lucky Lounge ----
  loungeCards: '/photos/real/lucky-lounge-cards-cocktails.jpg', // real photography
  loungeDice: u('photo-1596838132330-8b3b6ff8f14a'),
  loungeNeonDark: u('photo-1544161515-4ab6ce6db874'),
  loungeStainedGlass: u('photo-1545239351-1141bd82e8a6'),

  // ---- Ottertail / lake ----
  lakeDock: u('photo-1500375592092-40eb2168fd21'),
  lakeBreakfast: u('photo-1533089860892-a7c6f0a88666'),
  lakeBoat: u('photo-1502920917128-1aa500764cbd'),
  lakeSunset: u('photo-1495616811223-4d98c6e9c869'),
  lakeCabin: u('photo-1449158743715-0a90ebb6d2d8'),

  // ---- Shakers / collection ----
  shakerCollection1: u('photo-1602167626998-3bf7d0e3a6f4'),
  shakerCollection2: u('photo-1571167530149-c72f2b6d0ba5'),
  shakerAnimals: u('photo-1518715303604-b5b19e6d80f7'),
  shakerVintageShelf: u('photo-1583225214464-9296029427aa'),

  // ---- People / hospitality ----
  peopleDining: u('photo-1543007630-9710e4a00a20'),
  peopleCheers: u('photo-1470337458703-46ad1756a187'),
  peopleLaughing: u('photo-1529543544282-ea669407fca3'),
};

export default images;
