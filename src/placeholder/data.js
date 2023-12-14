const categories = [
  {
    id: 1,
    title: "Cafetería de especialidad",
    pathName: "cafeteria-de-especialidad",
    description: "Miércoles a Domingos | 8 a 19 hs",
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
          // {
          //   id: 2013,
          //   title:
          //     "Blend de té | Assam con especias de la india y bouquet de caléndula",
          //   description:
          //     "Canela, cardamomo, jengibre, clavo de olor, pimienta de Jamaica y caléndula.",
          // },
          // {
          //   id: 2014,
          //   title: "Blend de té | Verde gunpowder",
          //   description:
          //     "Bayas de enebro, coriandro, eucalipto, hinojo, petalos de aciano, alfa focus y menta.",
          // },
          // {
          //   id: 2015,
          //   title: "Blend de té | Assam aromatizado con bergamota.",
          //   description: "Arándanos, rosa mosqueta, canela e hibiscus.",
          // },
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
          // {
          //   id: 2027,
          //   title: "Matcha",
          //   price: 1200,
          // },
          // {
          //   id: 2028,
          //   title: "Matcha latte",
          //   price: 1400,
          // },
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
          // {
          //   id: 2032,
          //   title: "Jugo rojo",
          //   description: "Naranja, zanahoria, remolacha y arándanos.",
          //   price: 2000,
          // },
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
            title: "Desayuno alemán",
            description:
              "Una infusión, huevos revueltos, tostada, panceta y frutas de estación.",
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
          // {
          //   id: 2046,
          //   title: "Sweet Breakfast",
          //   description:
          //     "Una infusión, waffle a elección y exprimido de naranja.",
          //   price: 4100,
          // },
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
          // {
          //   id: 2053,
          //   title: "Facturas surtidas",
          //   price: 450,
          // },
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
          // {
          //   id: 2057,
          //   title: "Porción de ricotta",
          //   price: 1450,
          // },
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
          // {
          //   id: 2060,
          //   title: "Tarteletas",
          //   description: "Arándanos | Pera y frutos secos",
          //   price: 2000,
          // },
          {
            id: 2061,
            title: "Pastelería artesanal",
            description: "Consultar por las opciones del día",
            price: 2000,
          },
        ],
      },
      // {
      //   id: 206,
      //   title: "Waffles",
      //   type: "common",
      //   products: [
      //     {
      //       id: 2071,
      //       title: "Vegan",
      //       description: "Banana, chocolate y avellanas.",
      //       price: 1800,
      //     },
      //     {
      //       id: 2072,
      //       title: "Dulce",
      //       description: "Salsa de dulce de leche, banana y frutillas.",
      //       price: 1800,
      //     },
      //     {
      //       id: 2073,
      //       title: "Salado",
      //       description: "Huevos revueltos y panceta.",
      //       price: 1800,
      //     },
      //   ],
      // },
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
            title: "Tostado braseado",
            description: "En pan árabe con carne braseada y toné.",
            price: 2800,
          },
          {
            id: 2084,
            title: "Croissant de jamón y queso.",
            price: 2500,
          },
          // {
          //   id: 2085,
          //   title: "Bruschetta italy",
          //   description: "Higos, queso azul, radicheta y nuez.",
          //   price: 3600,
          // },
          {
            id: 2086,
            title: "Bruschetta mediterránea",
            description: "Fontina, tomates secos y jamón crudo.",
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
            description: "Palta, rúcula, huevo poché y tomate.",
            price: 3200,
          },
          // {
          //   id: 2089,
          //   title: "Tostada francesa",
          //   description:
          //     "Manzana caramelizada, frutas secas, salsa toffi y frutas frescas.",
          //   price: 3000,
          // },
          {
            id: 2090,
            title: "Bagel",
            description:
              "Salmón curado, rúcula y queso crema | Lomito, mermelada de tomate y lechuga crespa.",
            price: 3000,
          },
        ],
      },
      {
        id: 207,
        title: "",
        description:
          "¡Consultá por las distintas opciones disponibles sin tacc!",
        type: "special",
        products: [],
      },
    ],
  },
  {
    id: 2,
    title: "Almuerzo frente al mar",
    pathName: "almuerzo-frente-al-mar",
    description: "Miércoles a Domingos | 12 a 15 hs",
    type: "gold",
    sections: [
      {
        id: 301,
        title: "Entrantes",
        type: "common",
        products: [
          {
            id: 3001,
            title: "Rabas",
            description: "Con salsa tártara.",
            price: 4500,
          },
          {
            id: 3002,
            title: "Papas españolas",
            description: "Con salsa de quesos y sweet chilli.",
            price: 3900,
          },
          {
            id: 3003,
            title: "Cazuela de mar",
            description: "Langostinos, berberechos, vieiras, calamaretes.",
            price: 5100,
          },
        ],
      },
      {
        id: 302,
        title: "Nuestras carnes premium",
        description: `Le Belle es el encuentro entre nuestros clientes y la Carne Premium de Argus Meats. \n
        Nuestra cocina de excelencia realza los sabores de los seleccionados cortes de carne con claidad de exportación y nuestro salón se convierte en el eslabón final de una cadena que busca acercar a nuestros comensales a una experiencia gastronómica completa. \n`,
        type: "special",
        products: [
          {
            id: 3201,
            title:
              "Ojo de bife | Bife angosto | Vacío | Asado | Colita de cuadril",
            description:
              "Elegí el corte que prefieras y acompañalo con una guarnición.",
          },
          {
            id: 3202,
            title: "Guarniciones",
            description:
              "Papas españolas | Ensalada de rúcula, cherry y parmesano | Ensalada de lechuga, zanahoria y cebolla | Papas salteadas con chaucha y huevo poché",
          },
        ],
      },
      {
        id: 303,
        title: "Principales",
        type: "common",
        products: [
          {
            id: 3000,
            title: "Sinfonía de mar",
            description:
              "Pesca del día, risotto de zanahoria y crema de espárragos.",
            price: 6100,
          },
          {
            id: 3001,
            title: "Pechuga grillé",
            description: "Con guarnición.",
            price: 5600,
          },
          {
            id: 3002,
            title: "Sandwich de lomo palier",
            description:
              "En pan de viena, con cebolla crispy, salsa tártara, morrones, provoleta y mozzarella.",
            price: 5600,
          },
          {
            id: 3003,
            title: "Sandwich vegan",
            description:
              "Coleslaw, berenjena, cebolla, zucchini y morrón, acompañado de papas rejilla.",
            price: 4800,
          },
          {
            id: 3004,
            title: "Wok de vegetales",
            description:
              "Zucchini, zanahoria, morrón, berenjena, cebolla, champignones y salsa de soja.",
            price: 5100,
          },
          {
            id: 3005,
            title: "Armá tu ensalada",
            description:
              "Chaucha, huevo, tomate, lechuga, rúcula, zanahoria, cherry, champignones, fontina, pepino, cebolla y palta.",
            price: 4800,
          },
          {
            id: 3006,
            title: "Burguer",
            description: "Con papas.",
            price: 4500,
          },
        ],
      },
      {
        id: 303,
        title: "Pastas",
        type: "common",
        products: [
          {
            id: 3201,
            title: "Agnolottis",
            description: "De jamón y queso. Con salsa.",
            price: 5800,
          },
          {
            id: 3202,
            title: "Sorrentinos",
            description: "De espinaca y ricotta. Con salsa.",
            price: 5800,
          },
          {
            id: 3203,
            title: "Ñoquis",
            description: "Con salsa.",
            price: 5800,
          },
          {
            id: 3003,
            title: "Salsas",
            description: "Filetto | Bolognesa | Mixta | Crema",
          },
        ],
      },
      {
        id: 304,
        title: "Sugerencia del chef",
        type: "special",
        description:
          "Nuestro talentoso equipo transforma ingredientes frescos en increíbles platos.",
        products: [
          {
            id: 3201,
            title: "Consultá por la especialidad del día",
            description: "Incluye una bebida sin alcohol.",
            price: 7000,
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
            title: "Triffle de chocolate",
            description:
              "Chocolate blanco, chocolate con leche y chocolate semiamargo, con baño espejo de chocolate y almendras.",
            price: 3800,
          },
          {
            id: 3502,
            title: "Nube de limón",
            description:
              "Base de chocolate con crema de champagne y mousse de limón.",
            price: 3800,
          },
          // {
          //   id: 3503,
          //   title: "Petit Pistache",
          //   description:
          //     "Mousse de coco, palette de frambuesa y biscuit de pistacho con macarons de coco.",
          //   price: 4500,
          // },
          {
            id: 3504,
            title: "Flan de pistachos",
            description: "Con drops de frutos del bosque y chantilly.",
            price: 4500,
          },
          {
            id: 3504,
            title: "Copa de helado",
            description: "Limón | Americana | Chocolate | Frutos rojos.",
            price: 4000,
          },
          // {
          //   id: 3504,
          //   title: "Aromas de hibiscus",
          //   description:
          //     "Mousse de yogur con palete de naranja e hibiscus y mashmallow con diplomata.",
          //   price: 4000,
          // },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cena de Autor",
    pathName: "cena-de-autor",
    description: "Miércoles a Sábados | 20 a 02 am",
    type: "gold",
    sections: [
      {
        id: 4000,
        title: "Entrantes | Tapeos",
        products: [
          {
            id: 4100,
            title: "Rabas",
            description: "Con salsa tártara.",
            price: 7300,
          },
          {
            id: 4101,
            title: "Papas españolas",
            description: "Con salsa de quesos y sweet chilli.",
            price: 5000,
          },
          {
            id: 4102,
            title: "Mariscos ahumados",
            description:
              "Calamares, callos de vieiras, mejillones, langostinos y espejo de hinojo.",
            price: 9000,
          },
          {
            id: 4103,
            title: "Provoleta sweetbreads",
            description:
              "Mollejas a la provoleta, escabeche de tomates y morrones asados.",
            price: 7000,
          },
          // {
          //   id: 4104,
          //   title: "Chicken fingers",
          //   description: "Con dip de cheddar.",
          //   price: 5000,
          // },
          // {
          //   id: 4105,
          //   title: "Mozzarellitas",
          //   description: "Con dip de tomate.",
          //   price: 5000,
          // },
          {
            id: 4106,
            title: "Buñuelos de espinaca",
            description: "Con dip de quesos.",
            price: 5000,
          },
          // {
          //   id: 4107,
          //   title: "Tacos crujientes",
          //   description: "Carne | Vegetales.",
          //   price: 6000,
          // },
        ],
      },
      {
        id: 4001,
        title: "Principales",
        type: "special",
        products: [
          {
            id: 4200,
            title: "Costillita braseada al pimiento",
            description:
              "Asado, papa, fondue de cabutia, salsa de pimientos y tomate asado.",
            price: 10500,
          },
          {
            id: 4202,
            title: "Vacío al malbec con matambre relleno",
            description:
              "Vacío al malbec, matambre relleno y papas noisette encebolladas.",
            price: 10500,
          },
          {
            id: 4203,
            title: "Pechuga con salsa de cítricos",
            description: "Y cuscús al azafrán.",
            price: 7000,
          },
          {
            id: 4204,
            title: "Beef cowboy sweet",
            description:
              "Beef cowboy, cremoso de boniatos, emulsión de zanahoria, espárragos y cebolla crispy.",
            price: 9800,
          },
          // {
          //   id: 4205,
          //   title: "Entraña",
          //   description: "Papas pay, vegetales asados y huevo a la plancha.",
          //   price: 9900,
          // },
          {
            id: 4206,
            title: "Petit de lomo y langostinos",
            description:
              "Medallón de lomo, langostinos en crema de hinojo y papas fondant.",
            price: 11000,
          },
          {
            id: 4207,
            title: "Salmón con aires de lima y chardonnay",
            description:
              "Salmón rosado ahumado,  nido de espinaca, parmesano, papa écrasé, aire de lima y chardonnay.",
            price: 12500,
          },
          {
            id: 4208,
            title: "Risotto de mar y tierra",
            description:
              "Arroz carnaroli, salmón rosado, ostras, berberechos y alcauciles.",
            price: 9000,
          },
          // {
          //   id: 4209,
          //   title: "Risotto veggie",
          //   description: "Arroz carnaroli, espinaca, arvejas y brócoli.",
          //   price: 6800,
          // },
          {
            id: 4208,
            title: "Ensalada Le Belle",
            description:
              "Espinacas, espárragos, tomates secos, castañas de cajú, cherries y champignones.",
            price: 6500,
          },
        ],
      },
      {
        id: 4003,
        title: "Pastas",
        products: [
          {
            id: 4301,
            title: "Agnolottis",
            description: "De jamón y queso. Con salsa.",
            price: 6500,
          },
          {
            id: 4302,
            title: "Sorrentinos",
            description: "De espinaca y ricotta. Con salsa.",
            price: 6500,
          },
          // {
          //   id: 4303,
          //   title: "Ñoquis",
          //   description: "Con salsa",
          //   price: 6800,
          // },
          {
            id: 4304,
            title: "Con salsa",
            description: "Filetto | Bolognesa | Mixta | Crema",
          },
        ],
      },
      {
        id: 4004,
        title: "Postres",
        products: [
          {
            id: 4401,
            title: "Nube de limón",
            description:
              "Base de chocolate con crema de champagne y mousse de limón con gel de menta.",
            price: 5000,
          },
          {
            id: 4402,
            title: "Creme brulée con aroma de lavanda",
            description:
              "Creme brulée de lavanda con salsa de arándanoz, macarons de lavanda y crema chantilly.",
            price: 5900,
          },
          {
            id: 4403,
            title: "Sensaciones del bosque",
            description:
              "Lingote de chocolate blanco, frambuesa, salsa de frutos rojos y crema chantilly.",
            price: 5000,
          },
          {
            id: 4404,
            title: "Trilogía de chocolate",
            description:
              "Grelot con marquise (opción bañados en ron), crema de chocolate blanco y helado de chocolate.",
            price: 5800,
          },
          {
            id: 4405,
            title: "Volcán de dulce de leche",
            description:
              "Con salsa de chocolate, almendras tostadas y drops de salsa toffee.",
            price: 6000,
          },
          // {
          //   id: 4406,
          //   title: "Massini con reducción de maracuyá y naranjas",
          //   description:
          //     "Relleno de chantilly y merengue, cubierto de sambayón flambeado.",
          //   price: 5500,
          // },
          {
            id: 4407,
            title: "Copa de helado",
            description: "Limón | Americana | Chocolate | Frutos rojos",
            price: 3000,
          },
          {
            id: 4408,
            title: "Copa le belle",
            description: "Recomendación del patissier",
            price: 6000,
          },
        ],
      },
    ],
  },
  ,
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
  {
    id: 5,
    title: "Vinos",
    pathName: "vinos",
    type: "gold",
    sections: [
      {
        id: 601,
        title: "Tintos",
        type: "common",
        products: [
          {
            id: 6001,
            title: "Dante Robino | Malbec",
            description: "Dante Robino",
            price: 6900,
          },
          {
            id: 6002,
            title: "Dante Robino | Bonarda",
            description: "Dante Robino",
            price: 6900,
          },
          {
            id: 6003,
            title: "Lote negro | Malbec - Cabernet Franc",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6004,
            title: "Altura | Malbec",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6005,
            title: "Altura | Cabernet franc",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6005,
            title: "Select | Malbec",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6006,
            title: "Alma mora | Malbec",
            description: "Finca las moras",
            price: 6900,
          },
          {
            id: 6006,
            title: "Alma mora | Cabernet sauvignon",
            description: "Finca las moras",
            price: 6900,
          },
          {
            id: 6007,
            title: "Flores negras | Pinot noir",
            description: "Santa Julia",
            price: 6900,
          },
          {
            id: 6008,
            title: "Terrazas reserva | Malbec",
            description: "Chandon",
            price: 6900,
          },
          {
            id: 6009,
            title: "Terrazas reserva | Cabernet Franc",
            description: "Chandon",
            price: 6900,
          },
          {
            id: 6010,
            title: "Latitud 33° | Malbec",
            description: "Chandon",
            price: 6900,
          },
        ],
      },
      {
        id: 602,
        title: "Blancos",
        type: "common",
        products: [
          {
            id: 6101,
            title: "Select | Sauvignon Blanc",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6102,
            title: "Santa Julia | Chenin dulce natural",
            description: "Santa Julia",
            price: 6900,
          },
          {
            id: 6103,
            title: "Reserva | Chardonnay",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6104,
            title: "Cosecha tardía | Blanco dulce",
            description: "Norton",
            price: 6900,
          },
          {
            id: 6105,
            title: "Alaris | Blanco dulce",
            description: "Trapiche",
            price: 6900,
          },
          {
            id: 6106,
            title: "Terrazas reserva | Chardonnay",
            description: "Chandon",
            price: 6900,
          },
          {
            id: 6107,
            title: "Latitud 33° | Sauvignon Blanc",
            description: "Chandon",
            price: 6900,
          },
          {
            id: 6108,
            title: "Altos del plata | Chardonnay",
            description: "Chandon",
            price: 6900,
          },
        ],
      },
      {
        id: 603,
        title: "Rosados",
        type: "common",
        products: [
          {
            id: 6201,
            title: "Familia gascón | Rosé",
            description: "Escorihuela Gascón",
            price: 6900,
          },
          {
            id: 6202,
            title: "Cosecha tardía | Rosado",
            description: "Norton",
            price: 6900,
          },
        ],
      },
      {
        id: 604,
        title: "Orgánicos",
        type: "special",
        products: [
          {
            id: 6301,
            title: "La vaquita | Clarete natural",
            description: "Santa Julia",
            price: 6900,
          },
          {
            id: 6302,
            title: "El burro | Malbec natural",
            description: "Santa Julia",
            price: 6900,
          },
          {
            id: 6303,
            title: "La oveja | Blanco natural",
            description: "Santa Julia",
            price: 6900,
          },
          {
            id: 6304,
            title: "El zorrito naranjo | Chardonnay",
            description: "Santa Julia",
            price: 6900,
          },
        ],
      },
      {
        id: 605,
        title: "Champagne y espumantes",
        type: "common",
        products: [
          {
            id: 6401,
            title: "Montchenot | Extra Brut",
            price: 6900,
          },
          {
            id: 6402,
            title: "Trumpeter | Extra Brut",
            price: 6900,
          },
          {
            id: 6403,
            title: "Trumpeter | Extra Brut Rosé",
            price: 6900,
          },
          {
            id: 6404,
            title: "Cosecha especial | Extra Brut",
            price: 6900,
          },
          {
            id: 6405,
            title: "Chandon | Extra Brut",
            price: 6900,
          },
          {
            id: 6406,
            title: "Chandon | Delice",
            price: 6900,
          },
          {
            id: 6407,
            title: "Chandon | Aperitif",
            price: 6900,
          },
          {
            id: 6408,
            title: "Barón B | Brut Nature",
            price: 6900,
          },
          {
            id: 6409,
            title: "Barón B | Extra Brut",
            price: 6900,
          },
          {
            id: 6409,
            title: "Barón B | Rosé",
            price: 6900,
          },
          {
            id: 6409,
            title: "Moët | Imperial",
            price: 6900,
          },
          {
            id: 6409,
            title: "Veuve Clicquot",
            price: 6900,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Próximos Eventos",
    pathName: "proximos-eventos",
    type: "gold",
    sections: [
      {
        id: 701,
        title: "Miércoles de Mujeres",
        description:
          "Para cada momento del día, tenemos pensado cómo agasajar a las mujeres que nos acompañan desde el primer día y a aquellas que se quieren sumar a la experiencia Le Belle",
        type: "special",
        products: [
          {
            id: 7001,
            title: "Early birds",
            description:
              "Te esperamos en nuestra cafetería de especialidad para empezar el día de la mejor manera: frente al mar. ¡De 8 a 9 am la infusión la invitamos nosotros!",
            // price: 6900,
          },
          {
            id: 7002,
            title: "Almorzá frente al mar",
            description:
              "Almuerzos ejecutivos pensados para aquellas mujeres que no paran: mamás, estudiantes, empresarias, trabajadoras... todas se encuentran en nuestro Complejo Gastronómico.",
            price: 7000,
          },
          {
            id: 7003,
            title: "Break saludable",
            description:
              "¡Cortamos la tarde con una merienda saludable! Recargá energías para continuar con tu día con todas las pilas.",
            price: 4000,
          },
          {
            id: 7004,
            title: "Las noches son de Ellas",
            description:
              "¡Un menú fijo pensado exclusivamente para vos! Las mesas de mujeres acceden a 2x1 en el valor del menú. No te pierdas el Happy Hour, Dj en vivo y la visita de la astróloga.",
            price: 13000,
          },
        ],
      },
      {
        id: 602,
        title: "Jueves de ellos",
        description:
          "¡No nos olvidamos de ellos! Los jueves aprovechá las promociones bancarias. Además, accedé a un 10% de Descuento en mesas de Hombres",
        type: "special",
        products: [
          {
            id: 6101,
            title: "Banco Galicia",
            description: "20% de Descuento",
          },
          {
            id: 6102,
            title: "Banco Francés",
            description: "30% de Descuento",
          },
        ],
      },
      // {
      //   id: 604,
      //   title: "Fiesta Ochentosa",
      //   description:
      //     "Preparen sus mejores outfits y vengan listos para bailar toda la noche ¡Se viene la fiesta Retro!",
      //   type: "special",
      //   products: [
      //     {
      //       id: 6201,
      //       title: "Fecha",
      //       description: "No sabemos",
      //     },
      //     {
      //       id: 6202,
      //       title: "Menú",
      //       description: "Tampoco sabemos",
      //     },
      //     {
      //       id: 6202,
      //       title: "Espacio",
      //       description: "Eso sí lo sabemos: Éter",
      //     },
      //     {
      //       id: 6202,
      //       title: "Valor",
      //       description: "¿Acaso creíste que íbamos a saberlo? ¡Claro que no!",
      //     },
      //   ],
      // },
    ],
  },
];

export default categories;
