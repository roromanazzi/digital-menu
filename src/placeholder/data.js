const categories = [
  {
    id: 1,
    title: "Cafetería de especialidad",
    type: "pink",
    sections: [
      {
        id: 201,
        title: "Cafetería",
        type: "common",
        products: [
          {
            id: 2001,
            title: "Espresso",
            description: "Un shot de café | 30 ml",
            price: 1000,
          },
          {
            id: 2002,
            title: "Americano",
            description: "Un shot de café y agua | 90 ml",
            price: 1000,
          },
          {
            id: 2003,
            title: "Doppio",
            description: "Doble shot de café | 60 ml",
            price: 1450,
          },
          {
            id: 2004,
            title: "Doppio macchiatto",
            description: "Doble shot de café y espuma de leche | 90 ml",
            price: 1450,
          },
          {
            id: 2005,
            title: "Piccolo",
            description: "Un shot de café y leche | 90 ml",
            price: 1200,
          },
          {
            id: 2006,
            title: "Magic",
            description: "Doble shot de café y leche | 90 ml",
            price: 1450,
          },
          {
            id: 2007,
            title: "Long black",
            description: "Doble shot de café y agua | 150 ml",
            price: 1450,
          },
          {
            id: 2008,
            title: "Capuccino",
            description: "Un shot de café, leche y espuma de leche | 150 ml",
            price: 1450,
          },
          {
            id: 2009,
            title: "Capuccino italiano",
            description: "Un shot de café, leche, cacao y canela | 210 ml",
            price: 1600,
          },
          {
            id: 2010,
            title: "Flat white",
            description: "Doble shot de café y leche | 210 ml",
            price: 1600,
          },
          {
            id: 2011,
            title: "Latte",
            description: "Un shot de café y leche | 250 ml",
            price: 1600,
          },
        ],
      },
      {
        id: 202,
        title: "Blend de Autor",
        type: "special",
        products: [
          {
            id: 2016,
            title: "Media tetera",
            description: "Té assam | Té gunpowder | Blends de té",
            price: 900,
          },
          {
            id: 2017,
            title: "Una tetera",
            description: "Té assam | Té gunpowder | Blends de té",
            price: 1700,
          },
          {
            id: 2011,
            title: "Té assam",
          },
          {
            id: 2012,
            title: "Té gunpowder",
          },
          {
            id: 2013,
            title:
              "Blend de té | Assam con especias de la india y bouquet de caléndula",
            description:
              "Canela, cardamomo, jengibre, clavo de olor, pimienta de Jamaica y caléndula.",
          },
          {
            id: 2014,
            title: "Blend de té | Verde gunpowder",
            description:
              "Bayas de enebro, coriandro, eucalipto, hinojo, petalos de aciano, alfa focus y menta.",
          },
          {
            id: 2015,
            title: "Blend de té | Assam aromatizado con bergamota.",
            description: "Arándanos, rosa mosqueta, canela e hibiscus.",
          },
        ],
      },
      {
        id: 203,
        title: "",
        type: "common",
        products: [
          {
            id: 2021,
            title: "Iced Latte",
            description: "Vainilla | Caramel | Avellana",
            price: 1700,
          },
          {
            id: 2022,
            title: "Iced Coffee",
            price: 1500,
          },
          {
            id: 2023,
            title: "Espresso tonic",
            price: 1600,
          },
          {
            id: 2024,
            title: "Affogatto",
            price: 2000,
          },
          {
            id: 2025,
            title: "Submarino",
            price: 1500,
          },
          {
            id: 2026,
            title: "Chocolatada",
            description: "Fría | Caliente",
            price: 1300,
          },
          {
            id: 2027,
            title: "Matcha",
            price: 1200,
          },
          {
            id: 2028,
            title: "Matcha latte",
            price: 1400,
          },
        ],
      },
      {
        id: 204,
        title: "Jugos y licuados",
        type: "common",
        products: [
          {
            id: 2029,
            title: "Limonada de menta y jengibre",
            price: 1800,
          },
          {
            id: 2030,
            title: "Exprimido de naranja",
            price: 1800,
          },
          {
            id: 2031,
            title: "Jugo verde",
            description: "Manzana verde, espinaca, apio, limón, pepino y kiwi.",
            price: 2000,
          },
          {
            id: 2032,
            title: "Jugo rojo",
            description: "Naranja, zanahoria, remolacha y arándanos.",
            price: 2000,
          },
          {
            id: 2033,
            title: "Jugo naranja",
            description: "Naranja, zanahoria y durazno.",
            price: 2000,
          },
          {
            id: 2033,
            title: "Licuado al agua",
            price: 1800,
          },
          {
            id: 2034,
            title: "Licuado con leche | naranja",
            price: 2000,
          },
        ],
      },
      {
        id: 204,
        title: "Breakfast",
        type: "special",
        products: [
          {
            id: 2041,
            title: "Desayuno standard",
            description: "Una infusión y dos medialunas.",
            price: 2000,
          },
          {
            id: 2042,
            title: "Desayuno clásico",
            description:
              "Una infusión, dos tostadas, mermelada, queso y exprimido de naranja.",
            price: 2500,
          },
          {
            id: 2043,
            title: "German breakfast",
            description:
              "Una infusión, huevos revueltos, tostada, salchicha alemana y frutas de estación.",
            price: 4100,
          },
          {
            id: 2044,
            title: "Desayuno fitness",
            description:
              "Yogurth natural, dos tostadas, dos dips, frutas y granola y exprimido de naranja.",
            price: 4100,
          },
          {
            id: 2045,
            title: "Le Belle - Especiality",
            description:
              "Limonada, bruschetta a elección y pastelería artesanal.",
            price: 5000,
          },
          {
            id: 2046,
            title: "Sweet Breakfast",
            description:
              "Una infusión, waffle a elección y exprimido de naranja.",
            price: 4100,
          },
          {
            id: 2047,
            title: "Breakfast for friends",
            description:
              "Dos infusiones, un croissant dulce, pastelería artesanal, bagel a elección y dos exprimidos.",
            price: 9500,
          },
        ],
      },
      {
        id: 205,
        title: "Pastelería",
        type: "common",
        products: [
          {
            id: 2051,
            title: "Budín",
            description: "Limón glaseado | Split",
            price: 1300,
          },
          {
            id: 2052,
            title: "Medialuna",
            price: 450,
          },
          {
            id: 2053,
            title: "Facturas surtidas",
            price: 450,
          },
          {
            id: 2054,
            title: "Croissant",
            price: 950,
          },
          {
            id: 2055,
            title: "Croissant dulce",
            description:
              "Chocolate blanco y frutos rojos | Chocolate y avellanas.",
            price: 2500,
          },
          {
            id: 2056,
            title: "Porción de tostadas",
            price: 1100,
          },
          {
            id: 2057,
            title: "Porción de ricotta",
            price: 1450,
          },
          {
            id: 2058,
            title: "Alfajor Le Belle",
            description:
              "Alfajor de chocolate con relleno de ganache de chocolate, avellanas y dulce de leche.",
            price: 1200,
          },
          {
            id: 2059,
            title: "Cookie",
            description: "Moka | Chocolate",
            price: 1100,
          },
          {
            id: 2060,
            title: "Tarteletas",
            description: "Arándanos | Pera y frutos secos",
            price: 2000,
          },
          {
            id: 2061,
            title: "Pastelería",
            description:
              "Brownie con merengue | Lemon pie | Lingote de pistachos y chocolate",
            price: 2000,
          },
        ],
      },
      {
        id: 206,
        title: "Waffles",
        type: "common",
        products: [
          {
            id: 2071,
            title: "Vegan",
            description: "Banana, chocolate y avellanas.",
            price: 1800,
          },
          {
            id: 2072,
            title: "Dulce",
            description: "Salsa de dulce de leche, banana y frutillas.",
            price: 1800,
          },
          {
            id: 2073,
            title: "Salado",
            description: "Huevos revueltos y panceta.",
            price: 1800,
          },
        ],
      },
      {
        id: 207,
        title: "Brunch",
        type: "common",
        products: [
          {
            id: 2081,
            title: "Tostado de jamón y queso",
            description: "Pan árabe | Pan de campo",
            price: 2600,
          },
          {
            id: 2082,
            title: "Tostado caesar",
            description:
              "En pan árabe con pollo, mix de verdes y salsa Caesar.",
            price: 2800,
          },
          {
            id: 2083,
            title: "Tostado peceto",
            description: "En pan árabe con peceto y toné.",
            price: 2800,
          },
          {
            id: 2084,
            title: "Croissant de jamón y queso.",
            price: 2500,
          },
          {
            id: 2085,
            title: "Bruschetta italy",
            description: "Higos, queso azul, radicheta y nuez.",
            price: 3600,
          },
          {
            id: 2086,
            title: "Bruschetta mediterránea",
            description: "Boconccinos, tomates secos y jamón crudo.",
            price: 3600,
          },
          {
            id: 2087,
            title: "Bruschetta veggie",
            description: "Zucchini, berenjenas, champignones y tomate.",
            price: 3300,
          },
          {
            id: 2088,
            title: "Avocado toast",
            description: "Palta, huevo poché y tomate.",
            price: 3200,
          },
          {
            id: 2089,
            title: "Tostada francesa",
            description:
              "Manzana caramelizada, frutas secas, salsa toffi y frutas frescas.",
            price: 3000,
          },
          {
            id: 2090,
            title: "Bagel",
            description:
              "Salmón curado, rúcula y queso crema | Lomito, mermelada de tomate y lechuga crespa.",
            price: 3000,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Bebidas",
    type: "gold",
    sections: [
      {
        id: 101,
        title: "Bebidas sin alcohol",
        type: "common",
        products: [
          { id: 1001, title: "Agua sin gas", price: 1000 },
          { id: 1002, title: "Agua con gas", price: 1000 },
          {
            id: 1003,
            title: "Agua saborizada",
            description: "Pomelo | Manzana | Naranja",
            price: 1200,
          },
          {
            id: 1004,
            title: "Gaseosas",
            description: "Línea Coca-Cola.",
            price: 1200,
          },
          {
            id: 1005,
            title: "Limonada",
            description: "Limón, almíbar, menta, jengibre y agua.",
            price: 1800,
          },
          {
            id: 1006,
            title: "Limiscus",
            description: "Jugo de limón y almíbar de hibiscus.",
            price: 2100,
          },
        ],
      },
      {
        id: 102,
        title: "Tragos de Autor",
        type: "special",
        products: [
          {
            id: 1011,
            title: "a-MAR-go!",
            description: "Lunfa Rosso, IPA, Cynar, pomelo, miel e hibiscus.",
            price: 3500,
          },
          {
            id: 1012,
            title: "ACARAMELA'O",
            description:
              "Malibú, ananá, leche de coco, jugo de manzana, granadina y almíbar.",
            price: 5000,
          },
          {
            id: 1013,
            title: "Chulo",
            description:
              "Jägermeister, leche de coco, ron blanco, mandarina y lima",
            price: 5000,
          },
          {
            id: 1014,
            title: "Lío",
            description: "Pomelo, vino tinto, almíbar de Flin Paff y ananá.",
            price: 3000,
          },
          {
            id: 1015,
            title: "Mónaco",
            description:
              "Jack Daniel's, Lunfa Rosso, jugo de lima, aperol, clara de huevo y almíbar de cereza.",
            price: 5800,
          },
          {
            id: 1016,
            title: "El procurador",
            description:
              "Malibú, lima, hojas de menta, almíbar y óleo de pomelo.",
            price: 4000,
          },
        ],
      },
      {
        id: 103,
        title: "Tragos clásicos",
        type: "common",
        products: [
          {
            id: 1021,
            title: "Negroni",
            description: "Campari, Bulldog y Lunfa Rosso.",
            price: 3500,
          },
          {
            id: 1022,
            title: "Old fashioned",
            description: "Bourbon, Bitter Angostura y azúcar.",
            price: 3500,
          },
          {
            id: 1023,
            title: "Cynar julep",
            description: "Cynar, lima, jugo de pomelo, menta y azúcar.",
            price: 3000,
          },
          {
            id: 1024,
            title: "Aperol Spritz",
            description: "Aperol, espumante y soda.",
            price: 3500,
          },
          {
            id: 1025,
            title: "Mojito",
            description: "Ron blanco, menta, lima, azúcar y soda.",
            price: 3200,
          },
          {
            id: 1026,
            title: "Caipirinha",
            description: "Cachaca, lima y azúcar.",
            price: 3000,
          },

          {
            id: 1027,
            title: "Caipiroska",
            description: "Vodka, lima y azúcar.",
            price: 3000,
          },
          {
            id: 1028,
            title: "Caipi Jäger",
            description: "Jägermeister, lima y azúcar.",
            price: 3500,
          },
        ],
      },
      {
        id: 104,
        title: "Los favoritos de siempre",
        type: "special",
        products: [
          {
            id: 1031,
            title: "Fernet",
            description: "Coca-Cola | Pomelo | Soda",
            price: 2700,
          },
          {
            id: 1032,
            title: "Campari",
            description: "Orange | Tonic",
            price: 2700,
          },
          {
            id: 1033,
            title: "Vermut",
            description: "Pomelo | Tonic | Soda",
            price: 2700,
          },
          {
            id: 1034,
            title: "Cuba Libre",
            price: 2700,
          },
          {
            id: 1035,
            title: "Cynar pomelo",
            price: 2700,
          },
          {
            id: 1036,
            title: "Whisky coke",
            price: 3200,
          },
        ],
      },
      //   {
      //     id: 105,
      //     title: "Frozen",
      //     type: "common",
      //     products: [
      //       {
      //         id: 1041,
      //         title: "Daikiri",
      //         description: "Ron blanco, azúcar, jugo de lima y frutilla",
      //         price: 3200,
      //       },
      //     ],
      //   },
      {
        id: 106,
        title: "Gin",
        type: "common",
        products: [
          {
            id: 1051,
            title: "Heráclito",
            price: 2200,
          },
          {
            id: 1052,
            title: "Príncipe de los apóstoles",
            price: 2200,
          },
          {
            id: 1061,
            title: "Kalmar",
            description: "Yerba mate | Hibiscus",
            price: 2800,
          },
          {
            id: 1062,
            title: "Oid mortales",
            price: 2800,
          },
          {
            id: 1063,
            title: "Mar del Plata Gin",
            price: 2800,
          },
          {
            id: 1064,
            title: "Dichosa",
            price: 2800,
          },
          {
            id: 1065,
            title: "La Francesa",
            price: 2800,
          },
          {
            id: 1066,
            title: "León Dormido",
            price: 2800,
          },
          {
            id: 1067,
            title: "Malaria",
            price: 3500,
          },
          {
            id: 1068,
            title: "Restinga",
            price: 3000,
          },
          {
            id: 1053,
            title: "Bosque",
            price: 3000,
          },
          {
            id: 1054,
            title: "Tanqueray",
            price: 4000,
          },
          {
            id: 1055,
            title: "Tanqueray sevilla",
            price: 4500,
          },
          {
            id: 1056,
            title: "Beefeater",
            price: 4000,
          },
          {
            id: 1057,
            title: "Bombay",
            price: 4500,
          },
          {
            id: 1058,
            title: "Bombay Bramble",
            price: 4800,
          },
          {
            id: 1059,
            title: "Bulldog",
            price: 4500,
          },
          {
            id: 1060,
            title: "Hendrick's",
            price: 6000,
          },
        ],
      },
      {
        id: 107,
        title: "Whisky",
        type: "common",
        products: [
          {
            id: 1081,
            title: "Jameson",
            price: 3800,
          },
          {
            id: 1082,
            title: "Jim Beam",
            price: 3800,
          },
          {
            id: 1083,
            title: "Johnny walker red label",
            price: 4000,
          },
          {
            id: 1084,
            title: "Johnny Walker Black Label",
            price: 4300,
          },
          {
            id: 1084,
            title: "Johnny Walker Blue Label",
            price: 35000,
          },
          {
            id: 1085,
            title: "Chivas Regal 12 años",
            price: 4700,
          },
          {
            id: 1086,
            title: "Chivas Regal 18 años",
            price: 8500,
          },
          {
            id: 1087,
            title: "The Glenlivet Founders Reserve",
            price: 5500,
          },
          {
            id: 1088,
            title: "The Glenlivet 12 años",
            price: 6000,
          },
          {
            id: 1089,
            title: "The Glenlivet 15 años",
            price: 8000,
          },
          {
            id: 1090,
            title: "Jack Daniel's",
            price: 4000,
          },
          {
            id: 1091,
            title: "Jack Daniel's Honey",
            price: 4500,
          },
          {
            id: 1092,
            title: "Jack Daniel's Gentleman",
            price: 5500,
          },
        ],
      },
      {
        id: 108,
        title: "Cervezas",
        type: "common",
        products: [
          {
            id: 1091,
            title: "Media pinta",
            description: "Stella Artois | Patagonia Amber Ale | Patagonia 24.7",
            price: 1000,
          },
          {
            id: 1092,
            title: "Pinta",
            description: "Stella Artois | Patagonia Amber Ale | Patagonia 24.7",
            price: 1500,
          },
          {
            id: 1093,
            title: "Porrón",
            description: "Corona",
            price: 1700,
          },
        ],
      },
    ],
  },
];

export default categories;
