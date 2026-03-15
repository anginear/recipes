registerRecipe({
  id:          "sabudana-khichdi",
  category:    "breakfast",
  title:       "Sabudana Khichdi",
  description: "A light, satisfying breakfast of soaked tapioca pearls tossed with crushed peanuts, potato, ginger, and green chilli. A popular fasting dish that works any time of day.",
  photo:       "photos/sabudana-khichdi.png",           // e.g. "photos/sabudana-khichdi.jpg"
  prepTime:    "4 hrs",
  cookTime:    "15 min",
  servings:    "2",
  components: [

    {
      name: "Pre-Work",
      ingredients: [
        { amount: "1 cup",   name: "sabudana (tapioca pearls)" },
      ],
      steps: [
        "Wash the sabudana and soak in water with the water level about 1cm above the sabudana. Soak for at least 4 hours or overnight until the pearls are soft and plump.",
      ],
    },

    {
      name: "Cooking",
      ingredients: [
        { amount: "½ cup",  name: "peanuts, blanched" },
        { amount: "10",     name: "peanuts, with skin" },
        { amount: "1",      name: "potato, cut in cubes" },
        { amount: "1 tsp",  name: "red chilli powder" },
        { amount: "1",      name: "green chilli" },
        { amount: "1 inch", name: "ginger, chopped" },
        { amount: "1 tsp",  name: "cumin seeds" },
        { amount: "2 tsp",  name: "lemon juice" },
        { amount: "a pinch", name: "salt" },
        { amount: "as needed", name: "oil" },
      ],
      steps: [
        "Roughly crush the blanched peanuts and set aside.",
        "In a pan, sauté the peanuts with skin until lightly toasted. Remove and set aside.",
        "In the same pan, sauté the potato cubes until cooked through and lightly golden.",
        "Mix the red chilli powder, crushed blanched peanuts, and soaked sabudana together in a bowl.",
        "In the pan, sauté the cumin seeds, ginger, and green chilli until fragrant.",
        "Add the sabudana mixture to the pan and toss to combine.",
        "Cook uncovered for about 3 minutes, stirring gently.",
        "Cover and cook for 1 more minute.",
        "Add the lemon juice, toss well, and serve hot.",
      ],
    },

  ],
  notes: "The soak time is crucial — under-soaked sabudana will be hard and sticky. Pearls are ready when they're soft all the way through and press flat easily between your fingers.",
});
