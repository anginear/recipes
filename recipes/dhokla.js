registerRecipe({
  id:          "dhokla",
  category:    "appetizers",
  title:       "Dhokla",
  description: "A light and spongy steamed savory cake made from besan, finished with a warm mustard and curry leaf tadka and garnished with fresh cilantro and coconut.",
  photo:       "photos/dhokla.png",           // e.g. "photos/dhokla.jpg"
  prepTime:    "15 min",
  cookTime:    "30 min",
  servings:    "4",
  components: [

    {
      name: "Dhokla",
      ingredients: [
        { amount: "1 cup",   name: "water" },
        { amount: "1 tsp",   name: "citric acid (or 5 tsp lemon juice)" },
        { amount: "2 cups",  name: "besan, sifted" },
        { amount: "3 tbsp",  name: "sugar" },
        { amount: "½ tbsp",  name: "salt" },
        { amount: "1.5 tbsp", name: "peanut oil" },
        { amount: "1 tsp",   name: "baking soda" },
        { amount: "1 tbsp",  name: "water (for baking soda)" },
      ],
      steps: [
        "In a large bowl, add the water, citric acid, sugar, salt, and peanut oil. Whisk well for 2–3 minutes until the sugar and citric acid fully dissolve.",
        "Sift in the besan and mix well until there are no lumps. Whisk for 3–4 minutes until the batter is smooth and flowing. Cover and let rest for 10 minutes.",
        "While the batter rests, set a steamer over high heat and grease the tin.",
        "Once rested, add the baking soda and 1 tbsp water to the batter. Mix well for 2–3 minutes until the batter puffs up and rises.",
        "Quickly transfer the batter into the greased tin. Place in the steamer, cover, and steam for 18–23 minutes.",
        "Check doneness with a knife — it should come out clean. Remove from the steamer and let cool to room temperature.",
      ],
    },

    {
      name: "Tadka",
      ingredients: [
        { amount: "2 tbsp",   name: "peanut oil" },
        { amount: "1 tbsp",   name: "mustard seeds" },
        { amount: "3",        name: "green chillies, slit" },
        { amount: "10 leaves", name: "curry leaves" },
        { amount: "¼ tsp",   name: "asafoetida (hing)" },
        { amount: "1 cup",    name: "water" },
        { amount: "2.5 tbsp", name: "sugar" },
        { amount: "to taste", name: "salt" },
      ],
      steps: [
        "Set a pan over high heat. Add the oil and let it heat up.",
        "Add the mustard seeds, green chillies, curry leaves, and asafoetida.",
        "Add the water, sugar, and salt. Boil for 2–3 minutes until the sugar and salt dissolve. Turn off the heat and let the tadka cool slightly.",
      ],
    },

    {
      name: "Garnish & Assembly",
      ingredients: [
        { amount: "⅓ cup", name: "cilantro, chopped" },
        { amount: "2 tbsp", name: "coconut, grated" },
      ],
      steps: [
        "Once the dhokla has cooled to room temperature, demold it and cut into equal pieces.",
        "Pour the tadka evenly over the dhokla pieces.",
        "Garnish with fresh chopped cilantro and grated coconut. Serve with coriander chutney.",
      ],
    },

  ],
  notes: "Don't skip resting the batter — it helps develop a lighter, more airy texture. Work quickly once the baking soda is added, as the rise starts immediately.",
});
