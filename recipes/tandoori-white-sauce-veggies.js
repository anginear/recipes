registerRecipe({
  id:          "tandoori-white-sauce-veggies",
  category:    "entrees",
  title:       "Tandoori White Sauce Veggies",
  description: "A creamy spiced white sauce envelops crunchy sautéed vegetables with a tantalizing smoky hint from live charcoal — a rich, comforting dish.",
  photo:       "photos/tandoori-white-sauce-veggies.png",           // e.g. "photos/tandoori-white-sauce-veggies.jpg"
  prepTime:    "15 min",
  cookTime:    "20 min",
  servings:    "4",
  components: [

    {
      name: "Sautéed Veggies",
      ingredients: [
        { amount: "1",      name: "bell pepper, cut into 1\" pieces" },
        { amount: "1 can",  name: "baby corn" },
        { amount: "1",      name: "green chilli, finely chopped" },
        { amount: "8 oz",   name: "mushrooms, quartered" },
        { amount: "1 small crown", name: "broccoli, cut into florets" },
        { amount: "1 tbsp", name: "ginger garlic paste" },
        { amount: "as needed", name: "oil" },
      ],
      steps: [
        "Set a wok over high heat and add oil. Once hot, add the ginger garlic paste and green chilli and cook for 30 seconds.",
        "Add the vegetables in order: bell pepper, baby corn, broccoli, then mushrooms. Stir and wait about 1 minute between each addition.",
        "Cook briefly — the goal is to keep the vegetables crunchy. Set aside.",
      ],
    },

    {
      name: "Tandoori White Sauce",
      ingredients: [
        { amount: "2 tbsp",  name: "oil" },
        { amount: "2 tbsp",  name: "all-purpose flour" },
        { amount: "500ml",   name: "milk" },
        { amount: "1 tbsp",  name: "Kashmiri red chilli powder" },
        { amount: "1 tsp",   name: "cumin powder" },
        { amount: "1 tsp",   name: "coriander powder" },
        { amount: "1 tsp",   name: "aamchur (dry mango) powder" },
        { amount: "¼ tsp",  name: "black salt" },
        { amount: "¼ tsp",  name: "roasted kasuri methi" },
        { amount: "¼ tsp",  name: "turmeric" },
        { amount: "½ tsp",  name: "garam masala" },
        { amount: "1 tbsp",  name: "MDH chicken masala" },
        { amount: "to taste", name: "salt & black pepper" },
        { amount: "1 small", name: "charcoal brick" },
        { amount: "½ tsp",  name: "ghee" },
        { amount: "handful", name: "cilantro, finely chopped" },
      ],
      steps: [
        "Heat a pan over medium heat and add the oil. Add the flour and stir continuously for 1–2 minutes until it forms a smooth paste (roux).",
        "Add the milk in 3–4 batches, whisking continuously after each addition until the sauce is completely smooth.",
        "Add all the spices and stir well. Cook on medium heat for 2–3 minutes until the sauce thickens. Turn off the heat.",
        "For the smoky flavour: place a small bowl with a live piece of charcoal inside the pan. Pour the ghee directly over the hot charcoal — it will smoke immediately. Cover the pan with a lid and let it smoke for 2–3 minutes.",
        "Remove the charcoal bowl. Turn the heat back on to medium and add the sautéed vegetables. Stir well and cook for 1–2 minutes.",
        "Garnish with fresh cilantro and serve hot.",
      ],
    },

  ],
  notes: "The charcoal smoking step is what gives this dish its signature tandoori flavor — don't skip it. Use restaurant-grade charcoal and do this step in a well-ventilated kitchen.",
});
