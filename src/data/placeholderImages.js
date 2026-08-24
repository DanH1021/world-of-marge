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
  homeOurLittleWorld: '/photos/real/lucky-lounge-cards-cocktails.jpg', // real photography — warm game-night/family gathering shot for the "our little world" polaroid

  // ---- Diner (Fargo) ----
  dinerPancakes: '/photos/real/diner-pancakes.jpg', // real photography — Diner Fargo hero image, also used in the Diner Ottertail photo strip
  dinerFrenchToast: '/photos/real/diner-french-toast.jpg', // real photography — currently unused on any page
  dinerMenuReading: '/photos/real/diner-menu-reading.jpg', // real photography — used on both Diner Fargo and Diner Ottertail pages
  dinerLoungeInterior: '/photos/real/diner-lounge-interior.jpg', // real photography — the plant-filled front window/entry area (shot from inside looking out at the window decal); Diner Fargo page only
  dinerBarCheers: '/photos/real/bar-cheers-christmas.jpg', // real photography — group cheers at the bar counter; used on the Bar page
  dinerWindowDecal: '/photos/real/diner-window-decal.jpg', // real photography — "Best Salad Bar on Broadway" signage, Fargo location only
  dinerCounter: u('photo-1554118811-1e0d58224f24'),
  dinerCoffee: u('photo-1495474472287-4d71bcdd2085'),
  dinerBooth: u('photo-1466978913421-dad2ebd01d17'),
  dinerExterior: u('photo-1517248135467-4c7edcad34c4'),

  // ---- Bar ----
  barHero: '/photos/real/bar-hero-neon-phone.jpg', // real photography
  barCardsCocktail: '/photos/real/bar-cards-cocktail.jpg', // real photography — cribbage/cocktail shot, same holiday décor as dinerBarCheers; used on the Bar page
  barWineNeon: '/photos/real/bar-wine-neon.jpg', // real photography
  barPoutine: '/photos/real/bar-poutine-fries.jpg', // real photography — same lamp/brick/shaker-shelf backdrop as the Supper Club shots, so it's used on the Supper Club page, not Bar
  barNeon: '/photos/real/bar-neon-cheers.jpg', // real photography
  barBasement: u('photo-1514362545857-3bc16c4c7d1b'),
  barPatio: u('photo-1521017432531-fbd92d768814'),
  barCrowd: u('photo-1543007630-9710e4a00a20'),

  // ---- Supper Club ----
  supperDinnerTable: '/brand/supper-club-ambiance.svg', // generic low-light ambiance, no food shown
  supperSteak: '/photos/real/supper-club-steak-shakers.jpg', // real photography
  supperDuck: '/photos/real/supper-club-duck-shakers.jpg', // real photography
  supperCocktail: '/photos/real/lucky-lounge-cards-cocktails.jpg', // real photography — same file as homeOurLittleWorld
  supperInterior: u('photo-1414235077428-338989a2e8c0'),
  supperWinePour: '/photos/real/diner-sweet-potato-skins.jpg', // real photography (moved from Ottertail)

  // ---- Lucky Lounge (photos pending — coming soon) ----
  loungePattern: '/brand/lucky-lounge-pattern.svg', // decorative placeholder, not a photo
  loungeCards: '/photos/real/lucky-lounge-cards-cocktails.jpg', // real photography (still used elsewhere)
  loungeDice: u('photo-1596838132330-8b3b6ff8f14a'),
  loungeNeonDark: u('photo-1544161515-4ab6ce6db874'),
  loungeStainedGlass: u('photo-1545239351-1141bd82e8a6'),

  // ---- Ottertail / lake ----
  dinerSweetPotato: '/photos/real/diner-sweet-potato-skins.jpg', // real photography — Supper Club appetizer only, not used on either Diner page
  dinerHashbrownsCrochet: '/photos/real/diner-hashbrowns-crochet.jpg', // real photography — Diner Ottertail hero image, also used on both Diner Fargo and Diner Ottertail photo strips
  dinerHashbrownsSpread: '/photos/real/diner-hashbrowns-spread.jpg', // real photography — used on both Diner Fargo and Diner Ottertail pages
  dinerSalad: '/photos/real/diner-salad.jpg', // real photography — currently unused on any page
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
