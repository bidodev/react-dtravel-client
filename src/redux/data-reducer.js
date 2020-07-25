const INITIAL_STATE = {
  destinations: [
    {
      id: 0,
      productName: "bora bora",
      description:
        "What this small island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts. The island's dormant volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to Matira Beach for crystal-clear water and soft sand. Although a trip to Bora Bora is very high, most travelers say it's worth every penny. ",
      src: "./img/bora-bora.jpg",
      additionalImages: [
        "./img/bora-bora2.jpg",
        "./img/bora-bora3.jpg",
        "./img/bora-bora4.jpg",
      ],
      country: "French Polynesia, France",
      continent: "australia and oceania",
      type: "tropical",
      difficulty: "easy",
      prices: "high",
      bestMatch: false,
    },
    {
      id: 1,
      productName: "maui",
      description:
        "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the island's honey- or black-colored beaches, you'll find that Maui is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to the world's largest dormant volcano. You should also attend a luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and mahimahi.",
      src: "./img/maui.jpg",
      country: "hawaii",
      continent: "north america",
      type: "tropical",
      difficulty: "easy",
      prices: "high",
      bestMatch: false,
    },
  ],
  backgrounds: [
    "https://i.imgur.com/oHxsM3J.jpg"
  ],
};

const destinationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":

      return {
        ...state,
        destinations: [...action.payload.destinations],
        backgrounds: [...state.backgrounds, ...action.payload.backgrounds],
      }
    
    default:
      return state;
  }
};

export default destinationsReducer;
