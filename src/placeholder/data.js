const categories = [
  {
    id: 1,
    title: "Cafetería",
    pathName: "cafeteria-de-especialidad",
    description: "Lunes a Domingos | 9 a 20 hs",
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
            price: 1500,
          },
          {
            id: 2002,
            title: "Café",
            price: 1500,
          },
          {
            id: 2003,
            title: "Cortado",
            price: 1500,
          },
          {
            id: 2004,
            title: "Lágrima",
            price: 1500,
          },
          {
            id: 2005,
            title: "Café con leche",
            price: 2000,
          },
          {
            id: 2006,
            title: "Café doble",
            price: 2000,
          },
          {
            id: 2007,
            title: "Flat white",
            price: 2000,
          },
          {
            id: 2009,
            title: "Capuccino a la italiana",
            price: 2200,
          },
          {
            id: 2011,
            title: "Cappuccino al chocolate",
            price: 2600,
          },
          {
            id: 2010,
            title: "Submarino",
            price: 2000,
          },
          {
            id: 2011,
            title: "Té",
            price: 1500,
          },
          {
            id: 2011,
            title: "Latte de vainilla",
            price: 2600,
          },
          {
            id: 2011,
            title: "Latte de caramelo",
            price: 2600,
          },
          {
            id: 2011,
            title: "Latte de avellanas",
            price: 2600,
          },
          {
            id: 2011,
            title: "Latte dolce",
            price: 2800,
          },
          {
            id: 2011,
            title: "Café irlandés",
            price: 3300,
          },
          {
            id: 2011,
            title: "Café calipso",
            price: 3300,
          },
          {
            id: 2011,
            title: "Café suizo",
            price: 3300,
          },
          {
            id: 2011,
            title: "Le Belle piu dolce",
            description: "Café, dulce de leche, crema y chocolate negro",
            price: 3000,
          },
          {
            id: 2011,
            title: "Café dolce",
            price: 2800,
          },
        ],
      },
      {
        id: 202,
        title: "Nuestros desayunos",
        type: "special",
        products: [
          {
            id: 2016,
            title: "Desayuno clásico",
            description: "Café con leche y dos medialunas",
            price: 2900,
          },
          {
            id: 2017,
            title: "Desayuno continental",
            description: "Café con leche, dos medialunas y jugo de naranja",

            price: 3600,
          },
          {
            id: 2011,
            title: "Desayuno de campo",
            description:
              "Café con leche, porción de tostadas, dip de queso y mermelada natural y jugo de naranja.",

            price: 3300,
          },
          {
            id: 2012,
            title: "Desayuno de verano",
            description:
              "Café con leche, dos medialunas, medio tostado y jugo de naranja.",
            price: 4600,
          },
          {
            id: 2012,
            title: "Desayuno natural",
            description:
              "Café con leche, yogurt, fruta de estación, granola, porción de tostadas negras, dip de queso y mermelada natural.",
            price: 5900,
          },
        ],
      },
      {
        id: 203,
        title: "Para acompañar",
        type: "common",
        products: [
          {
            id: 2021,
            title: "Tostadas de campo",
            description: "Con dip de queso y mermelada natural.",
            price: 3000,
          },
          {
            id: 2022,
            title: "Tostadas multisemilladas",
            description: "Con dip de queso y mermelada natural.",
            price: 3000,
          },
          {
            id: 2023,
            title: "Tostado de campo",
            price: 4400,
          },
          {
            id: 2024,
            title: "Tostado árabe",
            price: 4400,
          },
          {
            id: 2025,
            title: "Medialunas",
            description: "Dulces o saladas",
            price: 700,
          },
          {
            id: 2025,
            title: "Medialunas con jamón y queso",
            price: 1800,
          },

          {
            id: 2027,
            title: "Brownie",
            price: 1900,
          },
          {
            id: 2028,
            title: "Porción de budín",
            price: 1800,
          },
          {
            id: 2028,
            title: "Cookie",
            price: 1500,
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
            price: 2500,
          },
          {
            id: 2030,
            title: "Exprimido de naranja",
            price: 2400,
          },
          {
            id: 2031,
            title: "Licuado frutal",
            price: 2800,
          },
        ],
      },
      {
        id: 207,
        title: "Opciones sin Tacc",
        type: "special",
        products: [
          {
            id: 2030,
            title: "Alfajor de almendra y dulce de leche",
            price: 1600,
          },
          {
            id: 2030,
            title: "Alfajor de maicena y dulce de leche",
            price: 1600,
          },
          {
            id: 2030,
            title: "Alfajor de membrillo",
            price: 1600,
          },
          {
            id: 2030,
            title: "Brownie",
            price: 1600,
          },
          {
            id: 2030,
            title: "Cookie de chocolate",
            price: 1600,
          },
          {
            id: 2030,
            title: "Porción de tostadas",
            price: 1600,
          },
                  ],
      },
    ],
  },
  {
    id: 2,
    title: "Almuerzo frente al mar",
    pathName: "almuerzo-frente-al-mar",
    description: "Lunes a Domingos | 12 a 20 hs",
    type: "gold",
    sections: [
      {
        id: 301,
        title: "Entrantes | Tapeo",
        type: "common",
        products: [
          {
            id: 3001,
            title: "Rabas",
            description: "Con lactonesa de albahaca y limón.",
            price: 9000,
          },
          {
            id: 3002,
            title: "Papas chafadas doble cocción con trío de salsa",
            description: "Duxele de hongos, fondeau de quesos y salsa brava.",
            price: 9000,
          },
          {
            id: 3003,
            title: "Picada de mar",
            description:
              "Rabas, calamarettis fritos, langostinos apanados en panko y polenta, mejillones a la provenzal, callos de vieyras salteados en pesto rojo y berberechos al ajillo.",
            price: 15000,
          },
          {
            id: 3003,
            title: "Falafel de pollo y pistachos",
            price: 9000,
          },
          {
            id: 3003,
            title: "Cous-cous de coliflor",
            description: "Al curry con leche de coco.",
            price: 9000,
          },
          {
            id: 3003,
            title: "Pincho de langostinos empanados",
            description: "En pistacho con salsa de maracuyá.",
            price: 9000,
          },
        ],
      },
      {
        id: 302,
        title: "Los clásicos de siempre",
        type: "common",
        products: [
          {
            id: 3201,
            title: "Lomito completo",
            description: "Lechuga, tomate, jamón y queso. Con guarnición.",
            price: 9500,
          },
          {
            id: 3201,
            title: "Milanesa de ojo de bife",
            description: "Con guarnición.",
            price: 8500,
          },
          {
            id: 3201,
            title: "Revuelto gramajo",
            price: 7500,
          },
          {
            id: 3201,
            title: "Pechuga grillada",
            description: "Con guarnición",
            price: 8500,
          },
          {
            id: 3201,
            title: "Merluza a la romana",
            description: "Con guarnición",
            price: 8500,
          },
        ],
      },
      {
        id: 303,
        title: "Guarniciones",
        type: "common",
        products: [
          {
            id: 3000,
            title: "Puré de papas",
            price: 5500,
          },
          {
            id: 3001,
            title: "Puré de calabaza",
            price: 5500,
          },
          {
            id: 3002,
            title: "Papas fritas",
            price: 5500,
          },
        ],
      },
      {
        id: 303,
        title: "Menú infantil",
        type: "common",
        products: [
          {
            id: 3201,
            title: "Mozzarella rebosada con puré",
            price: 4500,
          },
          {
            id: 3202,
            title: "Hamburguesa",
            description: "Con papas fritas o puré.",
            price: 4500,
          },
          {
            id: 3203,
            title: "Ñoquis",
            price: 4500,
          },
          {
            id: 3003,
            title: "Spaguettis",
            price: 4500,
          },
        ],
      },
      {
        id: 304,
        title: "Principales",
        type: "special",
        products: [
          {
            id: 3201,
            title: "Pesca del día.",
            description: "En manteca de hierbas y lmón con papas fondant",
            price: 9500,
          },
          {
            id: 3201,
            title: "Wok de ternera",
            price: 7500,
          },
          {
            id: 3201,
            title: "Wok de pollo",
            price: 7000,
          },
          {
            id: 3201,
            title: "Wok de langostinos",
            price: 9000,
          },
          {
            id: 3201,
            title: "Wok de vegetales",
            price: 4500,
          },
        ],
      },
      {
        id: 305,
        title: "Sandwichs",
        type: "common",
        products: [
          {
            id: 3501,
            title: "Salmón gravlax",
            description: "Con pasta de palta, rúcula y cebolla morada.",
            price: 9500,
          },
          {
            id: 3502,
            title: "Pollo",
            description: "Con lechuga, escamas de parmesano y cebolla crispy.",
            price: 7500,
          },
          {
            id: 3504,
            title: "Escarola",
            description: "Con peras, palta, champignones y tomate confitado.",
            price: 7500,
          },
          {
            id: 3504,
            title: "Lomo",
            description: "Con rúcula, tomate confitado y queso feta frío.",
            price: 9500,
          },
        ],
      },
      {
        id: 305,
        title: "Ensaladas gourmet",
        type: "common",
        products: [
          {
            id: 3501,
            title: "Ensalada de boconccinos",
            description:
              "Con tomates secos, pesto de mostaza, mix de hojas verdes y hongos salteados.",
            price: 8500,
          },
          {
            id: 3502,
            title: "Ensalada de lentejas rojas",
            description:
              "Tibia, con rúcula, queso de cabra, cebolla morada y yogurt griego.",
            price: 8500,
          },
          {
            id: 3504,
            title: "Caesar",
            description: "Con pollo marinado en cítricos.",
            price: 8500,
          },
          {
            id: 3504,
            title: "Ensalada a tu gusto",
            description:
              "Tres ingredientes | Lechuga, tomate, zanahoria, rúcula, huevo, pamesano, champignon, lentejas y arroz.",
            price: 8500,
          },
        ],
      },
      {
        id: 305,
        title: "Postres",
        type: "common",
        products: [
          {
            id: 3501,
            title: "Flan casero de tres leches",
            price: 3500,
          },
          {
            id: 3502,
            title: "Macedonia de estación",
            price: 3500,
          },
          {
            id: 3504,
            title: "Crema helada",
            price: 3500,
          },
          {
            id: 3504,
            title: "Cuadrado de almendras",
            price: 3500,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cena de Autor",
    pathName: "cena-de-autor",
    description: "Lunes a Domingos | 20 a 01:30 am",
    type: "gold",
    sections: [
      {
        id: 4000,
        title: "Nuestras picadas",
        products: [
          {
            id: 3001,
            title: "Rabas",
            description: "Con lactonesa de albahaca y limón.",
            price: 9000,
          },
          {
            id: 3002,
            title: "Papas chafadas doble cocción con trío de salsa",
            description: "Duxele de hongos, fondeau de quesos y salsa brava.",
            price: 9000,
          },
          {
            id: 3003,
            title: "Picada de mar",
            description:
              "Rabas, calamarettis fritos, langostinos apanados en panko y polenta, mejillones a la provenzal, callos de vieyras salteados en pesto rojo y berberechos al ajillo.",
            price: 15000,
          },
        ],
      },
      {
        id: 305,
        title: "Ensaladas gourmet",
        type: "common",
        products: [
          {
            id: 3501,
            title: "Ensalada de boconccinos",
            description:
              "Con tomates secos, pesto de mostaza, mix de hojas verdes y hongos salteados.",
            price: 8500,
          },
          {
            id: 3502,
            title: "Ensalada de lentejas rojas",
            description:
              "Tibia, con rúcula, queso de cabra, cebolla morada y yogurt griego.",
            price: 8500,
          },
          {
            id: 3504,
            title: "Caesar",
            description: "Con pollo marinado en cítricos.",
            price: 8500,
          },
          {
            id: 3504,
            title: "Ensalada a tu gusto",
            description:
              "Tres ingredientes | Lechuga, tomate, zanahoria, rúcula, huevo, pamesano, champignon, lentejas y arroz.",
            price: 8500,
          },
        ],
      },

      {
        id: 4003,
        title: "Entrantes",
        products: [
          {
            id: 4301,
            title: "Asado braseado",

            description: "Sobre crema de boniato",
            price: 7000,
          },
          {
            id: 4302,
            title: "Gazpacho",
            description:
              "De tomate, pepino y salsa de ostras con crocante de jamón cerrano.",
            price: 4500,
          },
          {
            id: 4304,
            title: "Ceviche de hongos y mango",
            description: "Con aceite de trufas.",
            price: 4500,
          },
          {
            id: 4304,
            title: "Arroz crocante de sushi",
            description: "Con feta de salmón gravlax y espuma de limón.",
            price: 5000,
          },
          {
            id: 4304,
            title: "Crocante de queso de cabra",
            description: "Con cebolla caramelizada y tomates confitados.",
            price: 4500,
          },
          {
            id: 4304,
            title: "Tentáculo de pulpo",
            description: "Sobre crema de papas.",
            price: 10500,
          },
          {
            id: 4304,
            title: "Brochette de mollejas braseadas",
            description: "En salsa dashi dulce.",
            price: 7000,
          },
        ],
      },
      {
        id: 4004,
        title: "Principales",
        type: "special",
        products: [
          {
            id: 4401,
            title: "Risotto de té de matcha",
            description: "Con atún rojo y espuma de lima.",
            price: 9600,
          },
          {
            id: 4402,
            title: "Salmón del pacífico",
            description:
              "Con salsa teriyaki, café negro y cítricos con puerros asados y alcauciles confitados.",
            price: 16500,
          },
          {
            id: 4403,
            title: "Pez limón",
            description:
              "Cocido en manteca de sidra con puré de coliflor mangos grillas y falso caviar de menta y limón.",
            price: 16500,
          },
          {
            id: 4404,
            title: "Ojo de bife",
            description:
              "Con puré de hinojo y manzanas con chimichurri de algas y spirulina.",
            price: 13000,
          },
          {
            id: 4405,
            title: "T-bone",
            description:
              "En reducción de cabernet y moras, kale marinada a la plancha y papas estrelladas.",
            price: 15000,
          },
          {
            id: 4405,
            title: "Matambre de cerdo confitado",
            description: "Sobre crujiente de papa y salsa holandesa.",
            price: 12000,
          },
          {
            id: 4405,
            title: "Sorrento de autor",
            description: "Con salsa del chef.",
            price: 13000,
          },
        ],
      },
      {
        id: 4004,
        title: "Postres",
        products: [
          {
            id: 4401,
            title: "Cheesecake de mojito",
            price: 4500,
          },
          {
            id: 4402,
            title: "Panna cotta de pistachos y sandía",
            price: 4500,
          },
          {
            id: 4403,
            title: "Nube de limón",
            description:
              "Base de chocolate con crema de champagne y mousse de limón con gel de menta.",
            price: 4500,
          },
          {
            id: 4404,
            title: "Creme brulee de lavanda",
            description:
              "Con salsa de arándanos, macarons de lavanda y crema de mascarpone",
            price: 4500,
          },
          {
            id: 4405,
            title: "Sinfonía de trufas y bombones",
            description:
              "Bombón blande de whisky y naranja - Bombón relleno de chocolate y menta - Trufa de coco y pecan - Trufa de chocolate blanco y frambuesa bombón de fernet.",
            price: 6500,
          },
          {
            id: 4405,
            title: "Degustación de postres Le Belle",
            description:
              "Cheesecake de mojito - Panna cotta de pistacho y sandía - Nube de limón - Creme brulee.",
            price: 6500,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Bebidas",
    pathName: "bebidas",
    type: "gold",
    sections: [
      {
        id: 101,
        title: "Bebidas sin alcohol",
        type: "common",
        products: [
          { id: 1001, title: "Agua sin gas", price: 1500 },
          { id: 1002, title: "Agua con gas", price: 1500 },
          {
            id: 1003,
            title: "Agua saborizada",
            description: "Pomelo | Manzana | Naranja",
            price: 1500,
          },
          {
            id: 1004,
            title: "Gaseosas",
            description: "Línea Pepsi.",
            price: 1500,
          },
          {
            id: 1005,
            title: "Limonada",
            description: "Limón, almíbar, menta, jengibre y agua.",
            price: 2500,
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
            title: "Marga 2.0",
            description:
              "Tequila infusionado, vermouth de mostaza y coriandro, néctar de sauco y solución salina.",
            price: 5000,
          },
          {
            id: 1012,
            title: "Explorador",
            description:
              "Fernet clarificado, cordial simple, soda de cúrcuma y manzanilla.",
            price: 4700,
          },
          {
            id: 1013,
            title: "Ananashe",
            description: "Ron appleton, borghetti, ananá y mix de cítricos.",
            price: 4700,
          },
          {
            id: 1014,
            title: "Trufa",
            description:
              "Wild turkey fat washing fungi, syrup especiado y soja.",
            price: 5500,
          },
          {
            id: 1015,
            title: "Fresco",
            description: "Cognac, pelargonium, aperol, Chandon Extra Brut.",
            price: 6000,
          },
          {
            id: 1016,
            title: "Floral",
            description:
              "Shrub de pera y especias, néctar de sauco, don mix y ginger ale.",
            price: 4000,
          },
          {
            id: 1016,
            title: "Mentor",
            description:
              "Tanqueray London Dry, eucalipto, solución salina y solución mentolada.",
            price: 4700,
          },
          {
            id: 1016,
            title: "Alquimia",
            description: "Campari, yogurt vainilla, mix de cítricos y cedrón.",
            price: 4700,
          },
          {
            id: 1016,
            title: "Argento",
            description:
              "Sernova fat washing chimichurri, carpano de aceitunas y aceto balsámico.",
            price: 5000,
          },
          {
            id: 1016,
            title: "This is Kaléndula?",
            description:
              "Red Label, cynar 70 clarificado, kale y bitter aromático.",
            price: 5000,
          },
          {
            id: 1016,
            title: "Aromático",
            description:
              "Branca Menta intervenido con pino, falernum, sour mix y jerez.",
            price: 5000,
          },
          {
            id: 1016,
            title: "Bonanza",
            description:
              "Ballantines 7 años, Ramazzotti, espresso, Borghetti y almendras.",
            price: 5500,
          },
          {
            id: 1016,
            title: "Kyomu",
            description: "Blend de té, frutilla, durazno, legumbres y tepache.",
            price: 4000,
          },
          {
            id: 1016,
            title: "Botánica",
            description:
              "Don mix, cordial de ruibardo, brotes y espuma de melón.",
            price: 4000,
          },
          {
            id: 1016,
            title: "Not bloody",
            description: "Black Label, frutilla, tomate, sriracha y especias.",
            price: 5500,
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
            title: "Caipiroska",
            description: "Vodka, lima y almíbar.",
            price: 4000,
          },
          {
            id: 1022,
            title: "Martini",
            description: "Gin London Dry y Vermouth Dry.",
            price: 3500,
          },
          {
            id: 1023,
            title: "Espresso martini",
            description: "Vodka, espresso, borghetti y almíbar.",
            price: 4000,
          },
          {
            id: 1024,
            title: "Pisco sour",
            description: "Pisco Capel, almíbar, limón y albúmina.",
            price: 4000,
          },
          {
            id: 1025,
            title: "Cosmopolitan",
            description: "Vodka, cramberry, Hesperidina, limón y almíbar.",
            price: 4000,
          },
          {
            id: 1026,
            title: "Manhattan",
            description: "Jim Beam, Carpano rosso y bitter Angostura.",
            price: 5000,
          },

          {
            id: 1027,
            title: "Boulevardier",
            description: "Jim Beam, Campari y Vermouth rosso.",
            price: 5000,
          },
          {
            id: 1028,
            title: "Old fashioned",
            description: "Jim Beam, bitter Angostura y azúcar.",
            price: 5000,
          },
          {
            id: 1028,
            title: "Penicillin",
            description: "Whisky, limón, miel y jengibre.",
            price: 5000,
          },
          {
            id: 1028,
            title: "Negroni",
            description: "London dry, Campari y Vermouth rosso.",
            price: 4000,
          },
          {
            id: 1028,
            title: "Tom Collins",
            description: "Gin, almíbar, limón y soda.",
            price: 3500,
          },
          {
            id: 1028,
            title: "Gimblet",
            description: "Gin, almíbar y limón.",
            price: 3500,
          },
          {
            id: 1028,
            title: "Americano",
            description: "Campari, Vermouth rosso y soda.",
            price: 3500,
          },
          {
            id: 1028,
            title: "Mojito",
            description:
              "Bacardí blanco, almíbar, limón, menta, soda y bitter Angostura.",
            price: 4000,
          },
          {
            id: 1028,
            title: "Daiquiri cóctel",
            description: "Bacardí blanco, almíbar y limón.",
            price: 4000,
          },
          {
            id: 1028,
            title: "Aperol Spritz",
            description: "Aperol, espumante y soda.",
            price: 3500,
          },
          {
            id: 1028,
            title: "Margarita cóctel",
            description: "Tequila, hesperidina, almíbar y limón.",
            price: 4000,
          },
          {
            id: 1028,
            title: "Whisky Sour",
            description: "Jim Beam, almíbar, limón y albúmina.",
            price: 5000,
          },
          {
            id: 1028,
            title: "Cynar Julep",
            description: "Cynar 70, jugo de pomelo, almíbar, limón y menta.",
            price: 3500,
          },
          {
            id: 1028,
            title: "Gin tonic",
            price: 3500,
          },
          {
            id: 1028,
            title: "Fernet cola",
            price: 3500,
          },
          {
            id: 1028,
            title: "Campari tonic",
            price: 3500,
          },
          {
            id: 1028,
            title: "Garibaldi",
            description: "Campari y jugo de naranja.",
            price: 3500,
          },
        ],
      },
      {
        id: 106,
        title: "Gin",
        type: "common",
        products: [
          {
            id: 1052,
            title: "Príncipe de los apóstoles",
            price: 3500,
          },
          {
            id: 1054,
            title: "Tanqueray London Dry",
            price: 4500,
          },
          {
            id: 1055,
            title: "Tanqueray Sevilla",
            price: 5000,
          },
          {
            id: 1056,
            title: "Beefeater",
            price: 4500,
          },
          {
            id: 1057,
            title: "Bombay Shaphire",
            price: 6000,
          },
          {
            id: 1058,
            title: "Bombay Bramble",
            price: 10000,
          },
          {
            id: 1059,
            title: "Bulldog",
            price: 5000,
          },
          {
            id: 1060,
            title: "Hendrick's",
            price: 8500,
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
            description: "Irish",
            price: 6000,
          },
          {
            id: 1083,
            title: "Johnny Walker Red Label",
            description: "Scotch",
            price: 7000,
          },
          {
            id: 1084,
            title: "Johnny Walker Black Label",
            description: "Scotch",
            price: 9000,
          },
          {
            id: 1084,
            title: "Talisker",
            description: "Scotch",
            price: 24000,
          },
          {
            id: 1085,
            title: "Chivas Regal 12 años",
            description: "Scotch",
            price: 9000,
          },
          {
            id: 1086,
            title: "Chivas Regal 18 años",
            description: "Scotch",
            price: 25000,
          },
          {
            id: 1082,
            title: "Jim Beam",
            description: "Bourbon",
            price: 6000,
          },
          {
            id: 1082,
            title: "Wild Turkey",
            description: "Bourbon",
            price: 8000,
          },
          {
            id: 1082,
            title: "Maker's Mark",
            description: "Bourbon",
            price: 20000,
          },
          {
            id: 1087,
            title: "The Singletton 18 años",
            description: "Single malt",
            price: 28000,
          },
          {
            id: 1087,
            title: "The Glenlivet Founders Reserve",
            description: "Single malt",
            price: 23000,
          },
          {
            id: 1088,
            title: "The Glenlivet 12 años",
            description: "Single malt",
            price: 16000,
          },
          {
            id: 1089,
            title: "The Glenlivet 15 años",
            description: "Single malt",
            price: 32000,
          },
          {
            id: 1090,
            title: "Jack Daniel's",
            description: "Tennessee",
            price: 10000,
          },
          {
            id: 1091,
            title: "Jack Daniel's Honey",
            description: "Tennessee",
            price: 12000,
          },
        ],
      },
      {
        id: 107,
        title: "Ron",
        type: "common",
        products: [
          {
            id: 1081,
            title: "Havana 7 años",
            price: 11000,
          },
        ],
      },
      {
        id: 107,
        title: "Vodka",
        type: "common",
        products: [
          {
            id: 1081,
            title: "Absolut",
            price: 27000,
          },
          {
            id: 1081,
            title: "Grey Goose",
            price: 27000,
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
            title: "Corona",
            price: 5700,
          },
          {
            id: 1092,
            title: "Quilmes Stout",
            price: 3700,
          },
          {
            id: 1093,
            title: "Patagonia Amber",
            description: "Pinta",
            price: 3700,
          },
          {
            id: 1093,
            title: "Patagonia Amber",
            description: "Media pinta",
            price: 5800,
          },
          {
            id: 1093,
            title: "Patagonia 24.7",
            description: "Pinta",
            price: 6000,
          },
          {
            id: 1093,
            title: "Patagonia 24.7",
            description: "Media pinta",
            price: 4000,
          },
        ],
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "Vinos y espumantes",
  //   pathName: "vinos",
  //   type: "gold",
  //   sections: [
  //     {
  //       id: 601,
  //       title: "Tintos",
  //       type: "common",
  //       products: [
  //         {
  //           id: 6001,
  //           title: "Serie Q - Cabernet Sauvignon",
  //           description: "Zuccardi",
  //           price: 23000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Serie Q - Cabernet Franc",
  //           description: "Zuccardi",
  //           price: 21000,
  //         },
  //         {
  //           id: 6001,
  //           title: "DV Catena - Malbec Malbec",
  //           description: "Catena Zapata",
  //           price: 19800,
  //         },
  //         {
  //           id: 6001,
  //           title: "DV Catena - Cabernet Cabernet",
  //           description: "Catena Zapata",
  //           price: 12600,
  //         },
  //         {
  //           id: 6001,
  //           title: "Rutini - Cabernet Malbec",
  //           description: "Rutini wines",
  //           price: 19000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Rutini - Cabernet Franc",
  //           description: "Rutini wines",
  //           price: 18000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Tumpeter - Cabernet Sauvignon",
  //           description: "Rutini wines",
  //           price: 9000,
  //         },
  //       ],
  //     },
  //     {
  //       id: 602,
  //       title: "Blancos",
  //       type: "common",
  //       products: [
  //         {
  //           id: 6001,
  //           title: "DV Catena - Chardonnay",
  //           description: "Catena Zapata",
  //           price: 21600,
  //         },
  //         {
  //           id: 6001,
  //           title: "Rutini - Chardonnay",
  //           description: "Rutini wines",
  //           price: 19000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Rutini - Sauvignon Blanc",
  //           description: "Rutini wines",
  //           price: 19000,
  //         },
  //       ],
  //     },
  //     {
  //       id: 603,
  //       title: "Rosados",
  //       type: "common",
  //       products: [
  //         {
  //           id: 6001,
  //           title: "Familia Gascón - Rosé",
  //           description: "Escorihuela Gascón",
  //           price: 19000,
  //         },
  //       ],
  //     },
  //     {
  //       id: 603,
  //       title: "Espumantes",
  //       type: "common",
  //       products: [
  //         {
  //           id: 6001,
  //           title: "Nicasia - Nature",
  //           price: 13000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Álamos - Extra Brut",
  //           price: 13000,
  //         },
  //         {
  //           id: 6001,
  //           title: "Baron B - Extra Brut",
  //           price: 40000,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Vinos",
    pathName: "vinos",
    type: "gold",
    sections: [
      {
        id: 601,
        title: "Bodega Álamos",
        type: "common",
        products: [
          {
            id: 6001,
            title: "Álamos Malbec",
            price: 8000,
          },
          {
            id: 6002,
            title: "Álamos Cabernet Sauvignon",
            price: 8000,
          },
          {
            id: 6003,
            title: "Álamos Sauvignon Blanc",
            price: 8000,
          },
          {
            id: 6003,
            title: "Álamos Dulce Natural",
            price: 8000,
          },
          {
            id: 6004,
            title: "Álamos Reserva Malbec",
            price: 9800,
          },
          {
            id: 6005,
            title: "Álamos Reserva Pinot Noir",
            description: "Norton",
            price: 8500,
          },
        ],
      },
      {
        id: 602,
        title: "Bodega y viñedos Catena",
        type: "common",
        products: [
          {
            id: 6101,
            title: "Nicasia Red Blend - Malbec",
            price: 9500,
          },
          {
            id: 6102,
            title: "Nicasia Red Blend - Cabernet Franc",
            price: 9500,
          },
          {
            id: 6103,
            title: "Nicasia Red Blend - Blanc de Blancs",
            price: 9500,
          },
          {
            id: 6104,
            title: "Saint Felicien - Malbec",
            price: 11300,
          },
          {
            id: 6105,
            title: "Saint Felicien - Cabernet Merlot",
            price: 11300,
          },
          {
            id: 6106,
            title: "Saint Felicien - Pinot Noir",
            price: 11300,
          },
          {
            id: 6107,
            title: "Saint Felicien - Chardonnay",
            price: 11300,
          },
          // {
          //   id: 6108,
          //   title: "DV Catena - Malbec Malbec",
          //   price: 23800,
          // },
          // {
          //   id: 6108,
          //   title: "DV Catena - Cabernet Malbec",
          //   price: 13400,
          // },
          // {
          //   id: 6108,
          //   title: "DV Catena - Chardonnay Chardonnay",
          //   price: 18700,
          // },
        ],
      },
      {
        id: 603,
        title: "Bodega Catena Zapata",
        type: "common",
        products: [
          {
            id: 6201,
            title: "DV Catena - Malbec Malbec",
            price: 19800,
          },
          {
            id: 6201,
            title: "DV Catena - Cabernet Cabernet",
            price: 12600,
          },
          {
            id: 6201,
            title: "DV Catena - Chardonnay",
            price: 21600,
          },
          {
            id: 6202,
            title: "Angélica Zapata - Malbec Alta",
            price: 35800,
          },
          {
            id: 6202,
            title: "Angélica Zapata - Cabernet Sauvignon Alta",
            price: 25000,
          },
          {
            id: 6202,
            title: "Angélica Zapata - Chardonnay Alta",
            price: 27500,
          },
          // {
          //   id: 6202,
          //   title: "Malbec Argentino",
          //   price: 6900,
          // },
        ],
      },
      // {
      //   id: 604,
      //   title: "Bodega Séptima",
      //   type: "common",
      //   products: [
      //     {
      //       id: 6301,
      //       title: "Séptima - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6302,
      //       title: "Séptima - Cabernet Sauvignon",
      //       price: 6900,
      //     },
      //     {
      //       id: 6303,
      //       title: "Séptima - Chardonnay",
      //       price: 6900,
      //     },
      //     {
      //       id: 6304,
      //       title: "Séptima - Rosado de Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6304,
      //       title: "Séptima Obra - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6304,
      //       title: "Séptima Obra - Chardonnay",
      //       price: 6900,
      //     },
      //     {
      //       id: 6304,
      //       title: "Séptima Gran Reserva - Blend",
      //       price: 6900,
      //     },
      //     {
      //       id: 6304,
      //       title: "Séptima Gran Reserva 10 barricas - Malbec",
      //       price: 6900,
      //     },
      //   ],
      // },
      // {
      //   id: 605,
      //   title: "Bodega Amalaya y Colome",
      //   type: "common",
      //   products: [
      //     {
      //       id: 6401,
      //       title: "Amalaya Gran Corte",
      //       price: 6900,
      //     },
      //     {
      //       id: 6402,
      //       title: "Amalaya - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6403,
      //       title: "Amalaya - Dulce Torrontés",
      //       price: 6900,
      //     },
      //     {
      //       id: 6404,
      //       title: "Amalaya - Torrontés",
      //       price: 6900,
      //     },
      //     {
      //       id: 6405,
      //       title: "Amalaya - Rosado",
      //       price: 6900,
      //     },
      //     {
      //       id: 6406,
      //       title: "Colome Estate - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6407,
      //       title: "Colome Auténtico - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6408,
      //       title: "Colome - Torrontés",
      //       price: 6900,
      //     },
      //   ],
      // },
      // {
      //   id: 605,
      //   title: "Bodega Cavas Resell Boher",
      //   type: "common",
      //   products: [
      //     {
      //       id: 6401,
      //       title: "Casa Boher - Malbec",
      //       price: 6900,
      //     },
      //     {
      //       id: 6402,
      //       title: "Casa Boher - Merlot",
      //       price: 6900,
      //     },
      //     {
      //       id: 6403,
      //       title: "Casa Boher - Sauvignon blanc",
      //       price: 6900,
      //     },
      //     {
      //       id: 6404,
      //       title: "Casa Boher Gran Reserva - Blend",
      //       price: 6900,
      //     },
      //     {
      //       id: 6404,
      //       title: "Casa Boher Gran Chardonnay",
      //       price: 6900,
      //     },
      //   ],
      // },
      {
        id: 605,
        title: "Bodega Humberto Canale",
        type: "common",
        products: [
          {
            id: 6401,
            title: "Blush Rosado Finamente Dulce",
            price: 6000,
          },
          {
            id: 6402,
            title: "Intimo - Malbec",
            price: 5900,
          },
          {
            id: 6403,
            title: "Intimo - Trivarietal",
            price: 5900,
          },
          {
            id: 6404,
            title: "Intimo - Sauvignon Semillón",
            price: 5900,
          },
          {
            id: 6404,
            title: "Estate - Malbec",
            price: 8400,
          },
          {
            id: 6404,
            title: "Estate - Merlot",
            price: 8400,
          },
          {
            id: 6404,
            title: "Old Vineyard - Malbec",
            price: 14700,
          },
          {
            id: 6404,
            title: "Old Vineyard - Riesling",
            price: 14700,
          },
          {
            id: 6404,
            title: "Humberto Canale Gran Reserva - Malbec",
            price: 20400,
          },
        ],
      },
      {
        id: 605,
        title: "Mercados regionales",
        type: "common",
        products: [
          {
            id: 6401,
            title: "Monteagrelo - Malbec",
            description: "Bressia",
            price: 12400,
          },
          {
            id: 6402,
            title: "Monteagrelo - Cabernet Franc",
            description: "Bressia",
            price: 12400,
          },
          {
            id: 6402,
            title: "Profundo - Blend",
            description: "Bressia",
            price: 23400,
          },
          {
            id: 6402,
            title: "Piel negra - Pinot Noir",
            description: "Bressia",
            price: 27300,
          },
          {
            id: 6402,
            title: "Lágrima Canela Blanco - Blend",
            description: "Bressia",
            price: 23400,
          },
          {
            id: 6402,
            title: "Mendoza - Malbec",
            description: "Achaval Ferrer",
            price: 16200,
          },
          {
            id: 6402,
            title: "Mendoza - Cabernet Franc",
            description: "Achaval Ferrer",
            price: 16200,
          },
          {
            id: 6402,
            title: "Mendoza - Merlot",
            description: "Achaval Ferrer",
            price: 16200,
          },
          {
            id: 6402,
            title: "Durigutti - Malbec",
            description: "Durigutti",
            price: 12200,
          },
          {
            id: 6402,
            title: "Durigutti - Cabernet Franc",
            description: "Durigutti",
            price: 12000,
          },
          {
            id: 6402,
            title: "Durigutti - Reserva Malbec",
            description: "Durigutti",
            price: 15400,
          },
          {
            id: 6402,
            title: "Manos Negras - Malbec",
            description: "Manos Negras",
            price: 9000,
          },
          {
            id: 6402,
            title: "Manos Negras - Pinot Noir",
            description: "Manos Negras",
            price: 10500,
          },
          {
            id: 6402,
            title: "Manos Negras - Chardonnay",
            description: "Manos Negras",
            price: 7400,
          },
          {
            id: 6402,
            title: "Losance - Malbec",
            description: "Losance",
            price: 17000,
          },
          {
            id: 6402,
            title: "Losance - Chenin Seco",
            description: "Losance",
            price: 8600,
          },
          {
            id: 6402,
            title: "Losance - Semillón",
            description: "Losance",
            price: 8600,
          },
        ],
      },
      {
        id: 603,
        title: "Rosados",
        type: "common",
        products: [
          {
            id: 6001,
            title: "Familia Gascón - Rosé",
            description: "Escorihuela Gascón",
            price: 19000,
          },
        ],
      },
      {
        id: 605,
        title: "Espumantes",
        type: "common",
        products: [
          // {
          //   id: 6401,
          //   title: "María - Extra Brut",
          //   description: "Séptima",
          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Maria Handcraft",
          //   description: "Séptima",
          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Amalaya - Brut Nature",
          //   description: "Amalaya",
          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Álamos - Extra Brut",
          //   description: "Catena",

          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Nicasia - Bulle Doux",
          //   description: "Catena",

          //   price: 6900,
          // },
          {
            id: 6402,
            title: "Losance - Extra Brut",
            description: "Losance",

            price: 25000,
          },
          {
            id: 6402,
            title: "Losance - Nature",
            description: "Losance",

            price: 25000,
          },
          // {
          //   id: 6402,
          //   title: "Casa Boher - Extra Brut",
          //   description: "Rosell",

          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Rosell Boher - Brut",
          //   description: "Rosell",

          //   price: 6900,
          // },
          // {
          //   id: 6402,
          //   title: "Royale",
          //   description: "Bressia",
          //   price: 6900,
          // },
        ],
      },
    ],
  },
];

export default categories;
