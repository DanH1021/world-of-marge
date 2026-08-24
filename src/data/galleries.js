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
      { src: images.barCardsCocktail, caption: 'Cards and a drink at the rail.' },
      { src: images.barWineNeon, caption: 'A glass of red under the sign.' },
      { src: images.barPoutine, caption: 'Something to share.' },
      { src: images.barCrowd, caption: 'Regulars, most nights.' },
    ],
  },
  'supper-club': {
    concept: concepts.supperClub,
    photos: [
      { src: images.supperDinnerTable, caption: 'Table set for dinner.' },
      { src: images.supperSteak, caption: 'A classic supper club plate.' },
      { src: images.supperDuck, caption: 'Tonight’s duck entree.' },
      { src: images.supperCocktail, caption: 'A drink before dinner.' },
      { src: images.supperWinePour, caption: 'Another round.' },
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
