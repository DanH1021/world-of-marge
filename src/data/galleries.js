import { images } from './placeholderImages';
import { concepts } from './site';

export const galleries = {
  'diner-fargo': {
    concept: concepts.dinerFargo,
    photos: [
      { src: images.dinerPancakes, caption: 'Buttermilk pancakes, a breakfast staple.' },
      { src: images.dinerSaladBar, caption: 'The best salad bar on Broadway.' },
      { src: images.dinerCounter, caption: 'Counter seating, mornings.' },
      { src: images.dinerCoffee, caption: 'Coffee, always on.' },
      { src: images.dinerBooth, caption: 'A quiet booth by the window.' },
      { src: images.dinerExterior, caption: 'The storefront on Broadway.' },
      { src: images.dinerShakerShelf, caption: 'Part of the shaker collection on display.' },
    ],
  },
  bar: {
    concept: concepts.bar,
    photos: [
      { src: images.barBasement, caption: 'The original basement room.' },
      { src: images.barNeon, caption: 'Neon glow at Marge’s Bar.' },
      { src: images.barPatio, caption: 'The shared patio, summer evenings.' },
      { src: images.barCrowd, caption: 'Regulars, most nights.' },
    ],
  },
  'supper-club': {
    concept: concepts.supperClub,
    photos: [
      { src: images.supperDinnerTable, caption: 'Table set for dinner.' },
      { src: images.supperSteak, caption: 'A classic supper club plate.' },
      { src: images.supperCocktail, caption: 'A drink before dinner.' },
      { src: images.supperInterior, caption: 'The dining room.' },
      { src: images.supperCandlelight, caption: 'Candlelight, no reason to hurry.' },
      { src: images.supperWinePour, caption: 'Another round.' },
    ],
  },
  'lucky-lounge': {
    concept: concepts.luckyLounge,
    photos: [
      { src: images.loungeCards, caption: 'Cards on the table.' },
      { src: images.loungeDice, caption: 'Feeling lucky.' },
      { src: images.loungeNeonDark, caption: 'A little darker, a little moodier.' },
      { src: images.loungeStainedGlass, caption: 'Stained-glass detail.' },
    ],
  },
  'diner-ottertail': {
    concept: concepts.dinerOttertail,
    photos: [
      { src: images.lakeBreakfast, caption: 'Breakfast with a lake view.' },
      { src: images.lakeDock, caption: 'The dock, early morning.' },
      { src: images.lakeBoat, caption: 'Lunch after the lake.' },
      { src: images.lakeSunset, caption: 'Golden hour in Ottertail.' },
      { src: images.lakeCabin, caption: 'Lake-country atmosphere.' },
    ],
  },
};

export const galleryList = Object.entries(galleries).map(([slug, g]) => ({ slug, ...g }));
