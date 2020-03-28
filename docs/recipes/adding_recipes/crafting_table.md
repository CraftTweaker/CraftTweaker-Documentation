# Crafting Table


## Introduction

There are three main types of recipes for a crafting table. Each one serves a similar but very distinct purpose.

| Name | Function |
|------|----------|
| addShaped | A shaped recipe. A shaped recipe is a recipe like a pickaxe, in which the ingredients have to be arranged in a specific way or the recipe will not produce. |
| addShapedMirrored | A shaped(mirrored) recipe. This is a recipe that is shaped, but will also work flipped, like when you craft an axe. |
| addShapeless | This is the recipe type when you put a flower in your crafting table and it gives you dye. It doesnt matter where the flower goes, as long as its just the flower. |

Some things to note:
- The 2x2 crafting grid located in the inventory is considered a `craftingTable`


## Syntax:
```zenscript
craftingTable.addShaped(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);
```
Okay, that's the technical syntax. Let's digest that into its most basic:
```zenscript
craftingTable.addShaped(recipeName, output, ingredients, recipeFunction);
```

Now what does all that mean?

| Name | Function | Data Type | Required |
|------|----------|-----------|----------|
| recipeName | Used to create an identifier for your recipe. Must be unique for and from each recipe | String | Yes |
| output | This value is what item you want the recipe to make. | IIngredient | Yes |
| ingredients | The actual recipe | Matrix | Yes |
| recipeFunction | ? | ? | No |

`recipeName` is presented as a string in lowercase, such as `"my_new_recipe"`. It is good practice to create a relevant name, like `"custom_arrow_recipe"` for an Arrow recipe.
`output` is presented as `<item:modid:itemname>`. The `<>` and `item:` are required. An example would look like this: `<item:minecraft:arrow>`
`ingredients` is where the fun part comes in. The `IIngredient` is presented as a matrix, which would look something like this:

3x3
```zenscript
[[<item>, <item>, <item>],
[<item>, <item>, <item>],
[<item>, <item>, <item>]]
```

2x2
```zenscript
[[<item>, <item>],
[<item>, <item>]]
```


### Add Shaped Recipe
```zenscript
craftingTable.addShaped(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);
```
This script will add a shaped recipe to the game. Example:
```zenscript
craftingTable.addShaped("iron_tipped_arrow", <item:minecraft:arrow>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:iron_ingot>],
[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
[<item:minecraft:feather>, <item:minecraft:air>, <item:minecraft:air>]
]);
```
This script would create a recipe that not only allows arrows to be crafted diagonally, but with an iron ingot in place of the typical flint.


### Add Shaped(Mirrored) Recipe
```zenscript
addShapedMirrored(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);
```
This script will add a shaped(mirrored) recipe to the game. Example:
```zenscript
craftingTable.addShapedMirrored("iron_tipped_arrow", <item:minecraft:arrow>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:iron_ingot>],
[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
[<item:minecraft:feather>, <item:minecraft:air>, <item:minecraft:air>]
]);
```
This script is almost identical to the example provided for a `shapedRecipe`, except now, the recipe can be input from both diagonals and still give the output. Good for recipes like axes, arrows, bows, and fishing rods that commonly get flipped around.


### Add Shapeless Recipe
```zenscript
addShapeless(String recipeName, IItemStack output, IIngredient[] ingredients, @ZenCodeType.Optional RecipeFunctionArray recipeFunction);
```
This script will add a shapeless recipe to the game. I will provide a 2x2 example, however this would work in a 3x3 as well:
```zenscript
craftingTable.addShapeless("iron_tipped_arrow", <item:minecraft:arrow>, [
[<item:minecraft:iron_ingot>, <item:minecraft:air>],
[<item:minecraft:stick>,<item:minecraft:feather>]
]);
```
This script would allow arrows to be crafted in a 2x2 grid by just throwing in those items anywhere.