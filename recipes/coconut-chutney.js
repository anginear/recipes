registerRecipe({
  id:          "coconut-chutney",
  category:    "sauces",
  title:       "Coconut Chutney",
  description: "A cool, creamy chutney blended with fresh coconut, yogurt, and cilantro, finished with a sizzling mustard and curry leaf tadka.",
  photo:       "photos/coconut-chutney.png",           // e.g. "photos/coconut-chutney.jpg"
  prepTime:    "10 min",
  cookTime:    "5 min",
  servings:    "4",
  components: [

    {
      name: "Chutney",
      ingredients: [
        { amount: "½ cup",   name: "coconut, shredded" },
        { amount: "½ cup",   name: "yogurt" },
        { amount: "1 inch",  name: "ginger" },
        { amount: "1.5 cups", name: "cilantro" },
        { amount: "2 tbsp",  name: "chana dal, roasted" },
        { amount: "1 tsp",   name: "salt" },
        { amount: "4 leaves", name: "spearmint" },
        { amount: "5 leaves", name: "curry leaves" },
      ],
      steps: [
        "Put all the chutney ingredients into a blender.",
        "Purée until smooth. Add a splash of water if needed to loosen.",
      ],
    },

    {
      name: "Tadka",
      ingredients: [
        { amount: "1 tbsp",  name: "avocado oil" },
        { amount: "1 tsp",   name: "mustard seeds" },
        { amount: "5 leaves", name: "curry leaves, chopped" },
        { amount: "1 pinch", name: "hing (asafoetida)" },
        { amount: "2",       name: "dried red chilies" },
      ],
      steps: [
        "Heat oil in a small pan over medium-high heat.",
        "Add the mustard seeds and hing. When they begin to splutter, add the curry leaves and dried red chilies.",
        "Cook for 2 minutes, then pour the tadka directly over the chutney and stir to combine.",
      ],
    },

  ],
  notes: "Best served fresh. If making ahead, keep the chutney and tadka separate and combine just before serving.",
});
