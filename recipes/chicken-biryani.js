registerRecipe({
  id:          "chicken-biryani",
  category:    "entrees",
  title:       "Chicken Biryani",
  description: "A fragrant, celebratory layered rice dish with tender spiced chicken, homemade biryani masala, saffron-kissed basmati, and crispy caramelized onions. Slow-cooked on dum for that unmistakable aroma.",
  photo:       "photos/chicken-biryani.png",           // e.g. "photos/chicken-biryani.jpg"
  prepTime:    "35 min",
  cookTime:    "1 hr",
  servings:    "4",
  components: [

    {
      name: "Birista (Caramelized Onions)",
      ingredients: [
        { amount: "500g",    name: "onions, thinly sliced" },
        { amount: "as needed", name: "oil, for frying" },
      ],
      steps: [
        "Heat enough oil in a wide heavy-bottomed pan to shallow fry the onions. Add the sliced onions and fry over medium-high heat, stirring frequently.",
        "Cook for 20–25 minutes until deep golden brown and crispy. Watch carefully towards the end — they go from golden to burnt quickly.",
        "Remove with a slotted spoon and drain on paper towels. They will crisp further as they cool. Reserve the onion-infused oil for the marinade.",
      ],
    },

    {
      name: "Biryani Masala",
      ingredients: [
        { amount: "2 tbsp",  name: "coriander seeds" },
        { amount: "1 tsp",   name: "cumin seeds" },
        { amount: "2 tsp",   name: "caraway seeds (shah jeera)" },
        { amount: "2 tbsp",  name: "green cardamom" },
        { amount: "5–6",     name: "black cardamoms" },
        { amount: "3 inch",  name: "cinnamon" },
        { amount: "1 tbsp",  name: "black peppercorns" },
        { amount: "7–8",     name: "spicy dried red chillies" },
        { amount: "7–8",     name: "bay leaves" },
        { amount: "2 tsp",   name: "cloves" },
        { amount: "3",       name: "blades of mace" },
        { amount: "1 tbsp",  name: "kasuri methi" },
        { amount: "½",       name: "nutmeg, grated" },
        { amount: "½ tsp",   name: "turmeric powder" },
        { amount: "a pinch", name: "salt" },
      ],
      steps: [
        "Dry roast all whole spices (coriander, cumin, caraway, cardamoms, cinnamon, peppercorns, chillies, bay leaves, cloves, mace) in a pan over medium heat for 2–3 minutes until fragrant. Let cool.",
        "Grind the roasted spices together with the kasuri methi, grated nutmeg, turmeric, and salt into a fine powder. Store in an airtight jar — this makes more than needed; use 1.5 tbsp for this recipe.",
      ],
    },

    {
      name: "Chicken Marinade & Cook",
      ingredients: [
        { amount: "500g",     name: "chicken, bone-in leg and thigh pieces" },
        { amount: "to taste", name: "salt" },
        { amount: "1",        name: "lemon, juiced" },
        { amount: "4 tbsp",   name: "ginger garlic paste" },
        { amount: "3",        name: "green chillies, made into paste" },
        { amount: "2 tbsp",   name: "Kashmiri red chilli powder" },
        { amount: "½ tsp",   name: "turmeric powder" },
        { amount: "2 tsp",    name: "coriander powder" },
        { amount: "1.5 tbsp", name: "biryani masala (from above)" },
        { amount: "3–4 tbsp", name: "birista oil (reserved from frying)" },
        { amount: "200ml",    name: "yogurt (curd), beaten" },
        { amount: "1 medium", name: "potato, cut into large pieces (optional)" },
        { amount: "small handful", name: "fresh mint, chopped" },
        { amount: "small handful", name: "fresh cilantro, chopped" },
        { amount: "2 tbsp",   name: "ghee" },
      ],
      steps: [
        "In a large bowl, combine the chicken with salt, lemon juice, ginger garlic paste, green chilli paste, Kashmiri chilli powder, turmeric, coriander powder, biryani masala, birista oil, and yogurt. Mix thoroughly to coat.",
        "Add the mint and cilantro. Mix well, cover, and marinate for at least 2 hours — overnight in the refrigerator gives the best results.",
        "Transfer the marinated chicken (and potatoes if using) to a wide heavy-bottomed pot. Add the ghee and cook on medium-high heat for 5 minutes.",
        "Reduce heat to medium, cover, and cook for 15–20 minutes until the chicken is about 80% cooked and the gravy has thickened. Some moisture should remain to steam the rice.",
      ],
    },

    {
      name: "Basmati Rice",
      ingredients: [
        { amount: "500g",    name: "basmati rice, washed and soaked for 1 hour" },
        { amount: "1–2",     name: "bay leaves" },
        { amount: "1 inch",  name: "cinnamon stick" },
        { amount: "1 tsp",   name: "caraway seeds (shah jeera)" },
        { amount: "3–4",     name: "green cardamoms" },
        { amount: "4–5",     name: "cloves" },
        { amount: "1",       name: "star anise" },
        { amount: "3–4",     name: "black peppercorns" },
        { amount: "1–2",     name: "green chillies, slit" },
        { amount: "½",       name: "lemon, juiced" },
        { amount: "as needed", name: "salt" },
      ],
      steps: [
        "Bring a large pot of water to a rolling boil. Add the salt, lemon juice, and all the whole spices.",
        "Drain the soaked rice and add to the boiling water. Cook for 6–7 minutes until the rice is exactly 70% done — it should be firm with a small white dot in the center when pressed between fingers. Drain immediately.",
      ],
    },

    {
      name: "Layering & Dum Cooking",
      ingredients: [
        { amount: "as needed", name: "saffron, soaked in warm milk" },
        { amount: "as needed", name: "water" },
        { amount: "3–4 tbsp", name: "ghee, warmed" },
        { amount: "a pinch",  name: "biryani masala" },
        { amount: "small handful", name: "birista" },
        { amount: "small handful", name: "fresh mint" },
        { amount: "small handful", name: "fresh cilantro, chopped" },
        { amount: "small handful", name: "birista (second layer)" },
        { amount: "small handful", name: "fresh mint (second layer)" },
        { amount: "small handful", name: "fresh cilantro (second layer)" },
      ],
      steps: [
        "Spread the partially cooked chicken and its gravy evenly across the bottom of the pot. Add a splash of water if needed to ensure there is enough moisture.",
        "Layer the parboiled rice evenly over the chicken. Do not stir.",
        "Drizzle the saffron milk over the rice. Pour the warm ghee across the surface. Sprinkle a pinch of biryani masala.",
        "Scatter the birista, fresh mint, and cilantro over the top.",
        "Cover the pot tightly. Seal the edges with dough or foil to trap the steam completely.",
        "Place the pot on a tawa (flat griddle) over low heat. Cook on dum for 30 minutes. Do not lift the lid.",
        "Remove from heat and let rest undisturbed for 10 minutes. Gently fold from the sides before serving to reveal the layers.",
      ],
    },

  ],
  notes: "Making your own biryani masala is what sets this apart — the homemade spice blend is far more aromatic than store-bought. The birista oil in the marinade is the other secret — don't skip it. Three things make or break the dum: rice parboiled to exactly 70%, enough moisture in the chicken layer, and an airtight seal. Serve with raita and saunth chutney.",
});
