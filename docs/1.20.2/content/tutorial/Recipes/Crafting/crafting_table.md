# Crafting Table

## Recipe Types

There are three recipe types for crafting tables:

- [**Shapeless:**](/tutorial/Recipes/Crafting/ShapelessRecipes) A shapeless recipe is a recipe where the position of the input items in the crafting grid does not matter.
- [**Shaped:**](/tutorial/Recipes/Crafting/ShapedRecipes) A shaped recipe is a recipe where the position of the items must be exact.
- [**Shaped Mirrored:**](/tutorial/Recipes/Crafting/ShapedMirrored) A mirrored recipe is like shaped recipes but mirrors the recipe along the horizontal or vertical axes.

## Adding a Recipe

_When adding a recipe, ensure that your recipe names are unique!_

### Adding Shapeless Recipes

`craftingTable.addShapeless(recipeName, output, ingredients, recipeFunction);`

- `recipeName`as string
- `output` as [IItemStack](/vanilla/api/items/IItemStack)
- `ingredients` as [IIngredient](/vanilla/api/ingredient/IIngredient)[]
- `recipeFunction` (Optional) as [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)

Adds a [shapeless](#recipe-types) recipe to the crafting table. As [shapeless](#recipe-types) recipes ignore the position of the input items, the ordering of the items when creating the recipe does not matter either.

[Shapeless](#recipe-types) recipes can have up to 9 inputs, but those with 4 or less inputs can also be crafted in the 2x2 inventory grid.

Crafting Table Recipes can also output more than 1 amount of the output item. This can be achieved by using the [IItemStack multiplication operator](/vanilla/api/items/IItemStack/#mul) on the output item.

```zenscript
craftingTable.addShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// A shapeless recipe can have up to 9 inputs
// This also demonstrates that more than one output can be used. In this example, 8 grass will be outputted.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_See [Using Recipe Functions](#using-recipe-functions) for examples on how to use recipe functions._

### Adding Shaped and Shaped Mirrored Recipes

`craftingTable.addShaped(recipeName, output, ingredients, recipeFunction);`

`craftingTable.addShapedMirrored(recipeName, output, ingredients, recipeFunction);`

- `recipeName` as string
- `output` as [IItemStack](/vanilla/api/items/IItemStack)
- `ingredients` as [IIngredient](/vanilla/api/items/IIngredient)[][]
- `recipeFunction` (Optional) as [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)

Adds a [shaped](#recipe-types) (or [mirrored](#recipe-types), depending on the function) recipe to the crafting table. The ordering of the items when creating the recipe dictates the position of each item in the crafting grid.

Making the recipe a [shaped mirrored](#recipe-types) recipe instead allows for more flexibility to the player when adding the items to the crafting grid.

Both [shaped](#recipe-types) and [shaped mirrored](#recipe-types) recipes can be made to work in a 2x2 (inventory) or 3x3 crafting grid.

Crafting Table Recipes can also output more than 1 amount of the output item. This can be achieved by using the [IItemStack multiplication operator](/vanilla/api/items/IItemStack/#mul) on the output item.

```zenscript
// Adding a shaped recipe
craftingTable.addShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Adding a shaped 2x2 recipe (this can also be done as mirrored)
craftingTable.addShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Adding a shaped mirrored recipe

import crafttweaker.api.recipe.MirrorAxis;

craftingTable.addShapedMirrored("shaped_mirror_example_1", MirrorAxis.DIAGONAL, <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_See [Using Recipe Functions](#using-recipe-functions) for examples on how to use recipe functions._

## Using Recipe Functions

A recipe function allows for a programatically determined output. This can be especially useful when you need some of the input item's information, like the item's damage or other NBT data.

_As Shaped and Shaped Mirrored Recipes are similar, examples will only include Shaped Recipes. You may treat any example using `addShaped` as the same as using `addShapedMirrored`._

### Using RecipeFunctionArray in a Shapeless Recipe

`recipeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(usualOut as IItemStack, inputs as IItemStack[]) => {};`

- `usualOut` as [IItemStack](/vanilla/api/items/IItemStack)
- `inputs` as [IItemStack](/vanilla/api/items/IItemStack)[] Array of inputs ordered the same as defined in the original recipe

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, inputs as IItemStack[]) => {
    // Checks if <item:minecraft:dirt> has a display name of "totally real diamond block"
    if (inputs[0].displayName == "totally real diamond block") {
        // Returns <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond"
    return <item:minecraft:clay>.setDisplayName("Diamond");
});
```

### Using RecipeFunctionMatrix in a Shaped/Mirrored Recipe

`recipeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut as IItemStack, inputs as IItemStack[][]) => {};`

- `usualOut` as [IItemStack](/vanilla/api/items/IItemStack)
- `inputs` as [IItemStack](/vanilla/api/items/IItemStack)[][]

`inputs` is an array of inputs ordered the same as defined in the original recipe. An input can be found by defining the row, then the column (`inputs[0][1]` to get the item in the first row, second column).

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, inputs as IItemStack[][]) => {
        var counter = 0;
        // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
        for row in inputs {
            for recipeItem in row {
                if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                    // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                    counter++;
                }
            }
        }

        // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
        if (counter == 8) {
            if (inputs[1][1].displayName == "Special Diamond") {
                // If <item:minecraft:diamond> has a display name of "Special Diamond"
                // Return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Returns <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
        return <item:minecraft:clay>.setDisplayName("Diamond Block");
    });
```

### Advanced Usage

#### Functions as a Variable

Recipe functions can be assigned to a variable allowing you to ulitize the same function for multiple recipes easily.

Shapeless:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0].displayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>.setDisplayName("Diamond");
};

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:dirt>
craftingTable.addShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:cobblestone>
craftingTable.addShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Shaped/Mirrored:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapedRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
    for row in inputs {
        for recipeItem in row {
            if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                counter++;
            }
        }
    }

    // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
    if (counter == 8) {
        if (inputs[1][1].displayName == "Special Diamond") {
            // If <item:minecraft:diamond> has a display name of "Special Diamond"
            // Return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Returns <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
    return <item:minecraft:clay>.setDisplayName("Diamond Block");
};

craftingTable.addShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

craftingTable.addShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Removing a Recipe

### Remove a Recipe by Name

`craftingTable.removeByName(recipeName);`

- `recipeName` as string

Removes the recipe that matches the name provided.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Remove Recipes by Output

`craftingTable.remove(output);`

- `output` as [IItemStack](/vanilla/api/items/IItemStack)

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
craftingTable.remove(<item:minecraft:stick>);
```

### Remove Recipes by Mod ID

`craftingTable.removeByModid(modId);`

- `modId` as string

Removes all recipes added by the provided mod.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Exclude Recipes From Mod ID Removal

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` as string
- `exclusionFilter` as [RecipeFilter](/vanilla/api/recipe/RecipeFilter)
- `name` as string. The name of the current recipe being checked. _The mod id will not be included_

Removes all recipes added by the provided mod. Recipes are excluded if the result of the exclusionFilter returns true for the recipe name.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Checks if the name of the recipe matches "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Multiple recipes can also be excluded. One way this can be done is as follows:

```zenscript
// An array of recipe names as strings
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Remove Recipes by Regex

`craftingTable.removeByRegex(regex);`

- `regex` as string

Removes all recipes that's name matches the regex string.

```zenscript
// Removes recipes such as "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Remove All Recipes

`craftingTable.removeAll();`

Removes all crafting table recipes.

```zenscript
craftingTable.removeAll();
```
