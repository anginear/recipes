registerRecipe({
  id:          "vanilla-cupcakes",
  category:    "desserts",
  title:       "Vanilla Cupcakes with Chantilly Frosting",
  description: "Tender, buttery vanilla cupcakes topped with a cloud-like Chantilly frosting made from whipped cream, mascarpone, and cream cheese.",
  photo:       "photos/vanilla-cupcakes.png",           // e.g. "photos/vanilla-cupcakes.jpg"
  prepTime:    "25 min",
  cookTime:    "20 min",
  servings:    "12 cupcakes",
  components: [

    {
      name: "Cupcakes",
      ingredients: [
        { amount: "1.5 cups", name: "all-purpose flour, sifted" },
        { amount: "1.5 tsp",  name: "baking powder" },
        { amount: "¼ tsp",   name: "salt" },
        { amount: "2 large",  name: "eggs, room temperature" },
        { amount: "⅔ cup",   name: "sugar" },
        { amount: "1.5 sticks", name: "unsalted butter, melted" },
        { amount: "2 tsp",    name: "vanilla extract" },
        { amount: "½ cup",   name: "milk, room temperature" },
      ],
      steps: [
        "Preheat oven to 350°F. Line a 12-cup standard muffin tin with cupcake liners.",
        "Whisk the flour, baking powder, and salt together in a medium bowl.",
        "In a large bowl, beat the melted butter and sugar until combined. Add the eggs one at a time, then the vanilla.",
        "With the mixer on low, add half the flour mixture, then all the milk, then the remaining flour. Mix until just combined — do not overmix.",
        "Divide the batter evenly among the liners. Bake for 18–20 minutes, rotating the tin halfway through, until a toothpick inserted in the center comes out clean.",
        "Cool in the tin for 10 minutes, then transfer to a wire rack and cool completely before frosting.",
      ],
    },

    {
      name: "Chantilly Frosting",
      ingredients: [
        { amount: "1 cup",    name: "heavy whipping cream, cold" },
        { amount: "1 cup",    name: "powdered sugar (for whipped cream)" },
        { amount: "½ cup",   name: "powdered sugar (for cheese mixture)" },
        { amount: "2 tsp",    name: "vanilla extract" },
        { amount: "4 oz",     name: "cream cheese, softened to room temperature" },
        { amount: "4 oz",     name: "mascarpone, softened to room temperature" },
      ],
      steps: [
        "Using the whisk attachment, beat the cold cream, 1 cup powdered sugar, and vanilla on medium speed until stiff peaks form. Transfer to a separate bowl.",
        "In the stand mixer bowl, beat the cream cheese, mascarpone, and ½ cup powdered sugar on low with the paddle attachment until just smooth. Do not overmix.",
        "Add the whipped cream back into the cheese mixture. Beat on low, then gradually increase to high until the frosting is thick, smooth, and fluffy.",
        "Transfer to a piping bag and frost the cooled cupcakes.",
      ],
    },

  ],
  notes: "Make sure the cream cheese and mascarpone are fully at room temperature before beating, or the frosting will be lumpy. Keep frosted cupcakes refrigerated.",
});
