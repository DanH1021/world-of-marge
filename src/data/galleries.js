import { images } from './placeholderImages';
import { concepts } from './site';

export const galleries = {
  'diner-fargo': {
    concept: concepts.dinerFargo,
    photos: [
      { src: images.dinerPancakes, caption: 'Buttermilk pancakes, a breakfast staple.' },
      { src: images.dinerFrenchToast, caption: 'French toast and a Bloody Mary.' },
      { src: images.dinerMenuReading, caption: 'The soup & salad bar, Monday–Friday.' },
      { src: images.dinerLoungeInterior, caption: 'A corner of the dining room.' },
      { src: images.dinerCounter, caption: 'Counter seating, mornings.' },
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
      { src: images.dinerHashbrownsCrochet, caption: 'Breakfast, lake-cabin style.' },
      { src: images.dinerMenuReading, caption: 'The menu, no particular hurry.' },
      { src: images.dinerLoungeInterior, caption: 'A corner of the dining room.' },
      { src: images.dinerSweetPotato, caption: 'Loaded sweet potato skins.' },
      { src: images.dinerSalad, caption: 'Something lighter, lakeside.' },
    ],
  },
};

export const galleryList = Object.entries(galleries).map(([slug, g]) => ({ slug, ...g }));
