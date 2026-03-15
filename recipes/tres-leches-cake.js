registerRecipe({
  id:          "tres-leches-cake",
  category:    "desserts",
  title:       "Café con Tres Leches Cake",
  description: "A light sponge cake soaked through with a rich three-milk mixture spiked with instant coffee, topped with billowy whipped cream.",
  photo:       "photos/tres-leches-cake.png",           // e.g. "photos/tres-leches-cake.jpg"
  prepTime:    "30 min",
  cookTime:    "40 min",
  servings:    "8",
  components: [

    {
      name: "Cake",
      ingredients: [
        { amount: "1 cup",   name: "all-purpose flour, sifted" },
        { amount: "1.5 tsp", name: "baking powder" },
        { amount: "¼ tsp",  name: "salt" },
        { amount: "5",       name: "eggs, room temperature" },
        { amount: "1 cup",   name: "sugar, divided into ¾ cup + ¼ cup" },
        { amount: "⅓ cup",  name: "milk" },
        { amount: "1 tsp",   name: "vanilla extract" },
      ],
      steps: [
        "Preheat oven to 350°F. Grease a 9×13 inch cake pan.",
        "Sift the flour, baking powder, and salt together into a large bowl.",
        "Separate the eggs. Beat the yolks with ¾ cup of sugar on high speed until pale yellow. Stir in the milk and vanilla. Pour the yolk mixture over the flour mixture and stir very gently until combined.",
        "In a clean bowl, beat the egg whites on high speed until soft peaks form. With the mixer running, pour in the remaining ¼ cup sugar and beat until stiff but not dry.",
        "Fold the egg whites into the batter very gently until just combined. Pour into the prepared pan and spread to an even surface.",
        "Bake for 35–40 minutes until a toothpick comes out clean. Allow to cool in the pan.",
      ],
    },

    {
      name: "Three-Milk Soak",
      ingredients: [
        { amount: "¼ cup",  name: "heavy cream" },
        { amount: "14 oz",  name: "sweetened condensed milk" },
        { amount: "12 oz",  name: "evaporated milk" },
        { amount: "2 tbsp", name: "instant coffee" },
      ],
      steps: [
        "Combine the heavy cream, evaporated milk, condensed milk, and instant coffee in a pitcher and stir until the coffee dissolves.",
        "Pierce the surface of the cooled cake all over with a fork. Slowly drizzle the milk mixture over the entire surface. Let the cake sit and absorb the liquid fully — at least 30 minutes, or refrigerate overnight.",
      ],
    },

    {
      name: "Whipped Cream Icing",
      ingredients: [
        { amount: "2 cups", name: "heavy cream, cold" },
      ],
      steps: [
        "Whip the cold cream to stiff peaks. Spread evenly over the top and sides of the soaked cake. Refrigerate until ready to serve.",
      ],
    },

  ],
  notes: "This cake is best made a day ahead — the overnight soak gives the milk mixture time to fully penetrate every layer. Adapted from Ree Drummond's Basic Tres Leches recipe.",
});
