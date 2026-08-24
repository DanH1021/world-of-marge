import { images } from './placeholderImages';
import { concepts } from './site';

export const galleries = {
  'diner-fargo': {
    concept: concepts.dinerFargo,
    photos: [
      { src: images.dinerMenuReading, caption: 'The soup & salad bar, Monday–Friday.' },
      { src: images.dinerHashbrownsSpread, caption: 'A full spread on a Saturday morning.' },
      { src: images.dinerHashbrownsCrochet, caption: 'Breakfast under a cozy crocheted blanket.' },
      { src: images.dinerWindowDecal, caption: 'Best salad bar on Broadway.' },
      { src: images.dinerLoungeInterior, caption: 'Hanging plants fill the front window.' },
    ],
  },
  bar: {
    concept: concepts.bar,
    photos: [
      { src: images.barHero, caption: 'The neon out front.' },
      { src: images.dinerBarCheers, caption: 'Cheers at the bar.' },
      { src: images.barNeon, caption: 'Cheers under the neon sign.' },
      { src: images.barWineNeon, caption: 'A glass of red under the sign.' },
      { src: images.barCardsCocktail, caption: 'Cards and a drink at the rail.' },
    ],
  },
  'supper-club': {
    concept: concepts.supperClub,
    photos: [
      { src: images.supperDinnerTable, caption: 'A quiet table, low light.' },
      { src: images.supperSteak, caption: 'A classic supper club plate.' },
      { src: images.supperDuck, caption: 'Tonight’s duck entree.' },
      { src: images.barPoutine, caption: 'A shareable start to the evening.' },
      { src: images.supperCocktail, caption: "Card games and cocktails, a Marge's tradition." },
      { src: images.supperWinePour, caption: 'Loaded sweet potato skins.' },
    ],
  },
  'diner-ottertail': {
    concept: concepts.dinerOttertail,
    photos: [
      { src: images.dinerMenuReading, caption: 'The menu, no particular hurry.' },
      { src: images.dinerHashbrownsSpread, caption: 'A full spread on a Saturday morning.' },
      { src: images.dinerHashbrownsCrochet, caption: 'Breakfast, lake-cabin style.' },
      { src: images.dinerPancakes, caption: 'Buttermilk pancakes, a breakfast staple.' },
    ],
  },
};

export const galleryList = Object.entries(galleries).map(([slug, g]) => ({ slug, ...g }));
