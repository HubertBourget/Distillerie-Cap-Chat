import images from './images';

const produits = [
  {
    title: {
      en: 'ImaGin Violet, 40%, 375 ml - The Floral',
      fr: 'ImaGin Violet, 40%, 375 ml - Le Floral'
    },
    price: '$25',
    tags: {
      en: 'Floral Gin featuring notes of lilac, among others',
      fr: 'Gin floral présentant entre autres des notes de lilas'
    }
  },
  {
    title: {
      en: 'ImaGin Yellow, 40%, 375 ml - The Spicy',
      fr: 'ImaGin Jaune, 40%, 375 ml - L\'Épicé'
    },
    price: '$25',
    tags: {
      en: 'Gin crafted with various spices including flowering dune pepper',
      fr: 'Gin élaboré avec diverses épices dont le poivre des dunes en fleurs'
    }
  },
  {
    title: {
      en: 'ImaGin Green, 40%, 375 ml - The Forest',
      fr: 'ImaGin Vert, 40%, 375 ml - Le Forestier'
    },
    price: '$25',
    tags: {
      en: 'Gin where juniper is supported by aromas of thuja and balsam fir',
      fr: 'Gin où le genièvre est soutenu par des arômes de thuya et de sapin baumier'
    }
  },
  {
    title: {
      en: 'ImaGin Red, 40%, 375 ml - Wild Rose Fruit',
      fr: 'ImaGin Rouge, 40%, 375 ml - Fruit des rosiers sauvages'
    },
    price: '$25',
    tags: {
      en: 'Gin designed with wild rosehip fruit harvested by the sea in Gaspésie, revealing fruity rosehip aromas and subtle marine notes',
      fr: 'Gin concu avec le fruit des rosiers sauvages cueilli en bordure de mer en Gaspésie, révèlant des arômes fruités d\'églantier et de subtiles notes marines'
    }
  },
  {
    title: {
      en: 'ImaGin Grey Pine, 40%, 375 ml',
      fr: 'ImaGin Pin Gris, 40%, 375 ml'
    },
    price: '$25',
    tags: {
      en: 'This delicate, complex and evocative Gin is made with 13 fruits, spices and botanicals in addition to the needles and cones of the jack pine gathered in our Gaspesian forest',
      fr: 'Ce Gin complexe, fin et évocateur est élaboré avec 13 fruits, épices et plantes en plus des aiguilles et des cônes du pin gris cueillis dans notre forêt gaspésienne'
    }
  },
  {
    title: {
      en: 'Vodka Drakkar, 43%, 375 ml',
      fr: 'Vodka Drakkar, 43%, 375 ml'
    },
    price: '$25',
    tags: {
      en: 'Delicate and smooth, crafted with water drawn from the foothills of the Chic-Chocs',
      fr: 'Délicate et souple, élaborée avec une eau puisée dans le piémont des Chic-Chocs'
    }
  },
  {
    title: {
      en: 'Eau-de-vie d/’Érable, 40%, 375 ml',
      fr: 'Maple brandy, 40%, 375 ml'
    },
    price: '$27',
    tags: {
      en: 'This distillate reveals the very delicate and fine aromas of maple without its sugars.',
      fr: 'Ce distillat nous révèle les arômes très délicats et fins de l’érable sans ses sucres'
    }
  },
  {
    title: {
      en: 'Liqueur de Framboise, 15,5%, 375 ml',
      fr: 'Raspberry Liqueur, 15,5%, 375 ml'
    },
    price: '$21',
    tags: {
      en: 'Light liqueur that highlights raspberry and its liveliness while providing a sweetness of great elegance',
      fr: 'Liqueur légère qui met la framboise et sa vivacité de l’avant tout en fournissant une douceur d’une grande élégance'
    }
  },{
    title: {
      en: 'Limoncello, 25,3%, 375 ml',
      fr: 'Limoncello, 25,3%, 375 ml'
    },
    price: '$21',
    tags: {
      en: 'This lemon liqueur presents itself with a beautiful sweet entry, offers an invigorating acid passage and a light bitter finish.',
      fr: 'Cette liqueur de citron se présente avec une belle entrée sucrée, offre un passage acide vivifiant et une légère finale amer'
    }
  }
];

const awards = [
  // Sample Data for later use
  {
    imgUrl: images.award01,
    title: 'Best Gin in Canada',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  // Sample Data for later use
];

export default { produits, awards };
