registerRecipe({
  id:          "punjabi-chhole",
  category:    "entrees",
  title:       "Punjabi Chhole",
  description: "A deeply spiced, tangy chickpea curry from the heart of Punjab. Dark, bold, and aromatic — cooked low and slow with whole spices, black tea, and a homemade masala paste until the chickpeas drink up every bit of flavor.",
  photo:       "photos/punjabi-chhole.png",           // e.g. "photos/punjabi-chhole-masala.jpg"
  prepTime:    "20 min",
  cookTime:    "45 min",
  servings:    "4",
  components: [

    {
      name: "Chickpeas",
      ingredients: [
        { amount: "1.5 cups", name: "dried chickpeas (chhole), soaked overnight" },
        { amount: "1",        name: "black tea bag" },
        { amount: "2",        name: "bay leaves" },
        { amount: "1 inch",   name: "cinnamon stick" },
        { amount: "2",        name: "black cardamoms" },
        { amount: "4",        name: "cloves" },
        { amount: "1 tsp",    name: "salt" },
      ],
      steps: [
        "Drain the soaked chickpeas and add to a pressure cooker with the tea bag, bay leaves, cinnamon, black cardamoms, cloves, salt, and enough water to cover by 2 inches.",
        "Pressure cook for 1 whistle on high. Then reduce the gas to medium and let it cook for 30 minutes. Let the pressure release naturally. Reserve the cooking liquid. Discard the tea bag, bay leaves, and whole spices.",
      ],
    },

    {
      name: "Masala Base",
      ingredients: [
        { amount: "3 tbsp",   name: "oil or ghee" },
        { amount: "2 large",  name: "onions, finely chopped" },
        { amount: "2",        name: "Roma tomatoes, finely chopped" },
        { amount: "1 tbsp",   name: "tomato paste" },
        { amount: "5 cloves", name: "garlic, minced" },
        { amount: "1.5 inch", name: "ginger, grated" },
        { amount: "2",        name: "green chillies, slit" },
        { amount: "1 tsp",    name: "cumin seeds" },
        { amount: "2 tsp",    name: "coriander powder" },
        { amount: "1.5 tsp",  name: "Kashmiri red chilli powder" },
        { amount: "1 tsp",    name: "turmeric powder" },
        { amount: "2 tsp",    name: "chhole masala (MDH or Everest)" },
        { amount: "1 tsp",    name: "amchur (dry mango powder)" },
        { amount: "1 tsp",    name: "garam masala" },
        { amount: "½ tsp",   name: "black salt" },
        { amount: "to taste", name: "salt" },
      ],
      steps: [
        "Heat oil or ghee in a heavy-bottomed pot or kadhai over medium-high heat. Add the cumin seeds and let them splutter.",
        "Add the onions and cook, stirring frequently, for 12–15 minutes until they are deep golden brown — don't rush this step, it is the foundation of the curry's flavor.",
        "Add the garlic, ginger, and green chillies. Cook for 2 minutes until fragrant.",
        "Add the tomatoes and tomato paste. Cook for 8–10 minutes, stirring and pressing down, until the tomatoes break down completely and the oil separates from the masala.",
        "Add the coriander powder, Kashmiri chilli powder, turmeric, chhole masala, amchur, and black salt. Mix well and cook for 2 minutes.",
      ],
    },

    {
      name: "Bringing It Together",
      ingredients: [
        { amount: "1 tbsp",   name: "kasuri methi (dried fenugreek leaves), crushed" },
        { amount: "1 tsp",    name: "garam masala" },
        { amount: "1 tsp",    name: "lemon juice" },
        { amount: "handful",  name: "fresh cilantro, chopped" },
        { amount: "to serve", name: "sliced red onion, lemon wedges, green chilli" },
        { amount: "to serve", name: "bhatura, puri, or steamed rice" },
      ],
      steps: [
        "Add the cooked chickpeas to the masala and stir well to coat. Add 1–1.5 cups of the reserved chickpea cooking liquid to loosen the curry to your desired consistency.",
        "Bring to a boil, then reduce heat and simmer uncovered for 15–20 minutes, stirring occasionally, until the curry thickens and the chickpeas have absorbed the masala.",
        "Use the back of a spoon to lightly mash a few chickpeas against the side of the pot — this naturally thickens the gravy.",
        "Finish with crushed kasuri methi, garam masala, and lemon juice. Taste and adjust salt.",
        "Garnish with fresh cilantro and serve hot with sliced red onion, lemon wedges, and bhatura, puri, or rice.",
      ],
    },

  ],
  notes: "The black tea bag is the secret to that characteristic deep color and subtle earthiness — don't skip it. Chhole masala (like MDH) is different from regular chaat masala; it has dried pomegranate seed and black cardamom which are essential to the Punjabi flavor. The longer it simmers, the better it gets — leftovers the next day are outstanding.",
});
