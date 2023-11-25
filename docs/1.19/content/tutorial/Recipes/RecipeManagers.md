# Recipe Managers

Recipe Managers are crafting systems (like the Crafting Table, Furnace or Camp Fire) that use the Vanilla Data Pack JSON system.  
Most Recipe Managers have the same **removal** methods but different methods to add recipes.

Recipe Managers are generally what you will be using to interact with recipes in the game, there are however some mods that don't use the DataPack JSON system, and for those mods you would need to add and remove recipes differently.

## Referencing Recipe Managers

Recipe Managers are usually referenced via a Bracket Handler (the exception being Vanilla Recipe Managers which can be referenced via a global value).  
The Recipe manager format is:

```zenscript
<recipetype:modid:name>
```

Some examples are:

```zenscript
<recipetype:minecraft:smoking> // References the Smoking Recipe Manager
<recipetype:botania:mana_infusion> // References the Botania Mana Infusion Recipe Manager
<recipetype:thermal:pulverizer> // References the Thermal Expansion Pulverizer Recipe Manager
```

Vanilla Recipe Managers are special as they have dedicated Global Variables that allow you to reference them without using a BracketHandler.

The Vanilla Recipe Managers are:
|Recipe Manager|Bracket Handler|Global Variable|
|--------------|---------------|------|
|Blasting|`<recipetype:minecraft:blasting>`|`blastFurnace`|
|Campfire Cooking|`<recipetype:minecraft:campfire_cooking>`|`campfire`|
|Crafting|`<recipetype:minecraft:crafting>`|`craftingTable`|
|Smelting|`<recipetype:minecraft:smelting>`|`furnace`|
|Smithing|`<recipetype:minecraft:smithing>`|`smithing`|
|Smoking|`<recipetype:minecraft:smoking>`|`smoker`|
|Stone Cutting|`<recipetype:minecraft:stonecutting>`|`stoneCutter`|

You can find the full list of Recipe Managers through `/ct dump recipetype`.

The Vanilla Recipe Managers can be referenced by either their Bracket Handler or the Global Variable, for example:

```zenscript
<recipetype:minecraft:blasting>.removeAll() // Removes all Blast Furnace Recipes
```

Is the same as doing:

```zenscript
blastFurnace.removeAll() // Removes all Blast Furnace Recipes
```

The Global Variables just allow the Recipe Managers to be referenced easier.

The reason that not all Recipe Managers are given Global Variables is that there would be conflicting names if two different mods both added a machine with the same name, such as two mods adding Crushers.

## Methods

:::group{name=getRecipeByName}

This method gets a recipe by it's name, and returns a [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getRecipeByName(String name);
```

You could use this method to get the `ingredients` of a recipe and print the `commandString` of each ingredient.

```zenscript
import crafttweaker.api.recipe.type.Recipe;
import crafttweaker.api.world.Container;

for ingredient in (craftingTable.getRecipeByName("minecraft:arrow") as Recipe<Container>).ingredients {
    println(ingredient.commandString);
}
```
:::

:::group{name=getRecipesByOutput}

This method gets a list of recipes based on their outputs, and returns a list of [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getRecipesByOutput(IIngredient name);
```

You could use this method to get the `ingredients` of all the recipes that output a certain item and print the `commandString` of each ingredient of each recipe.

```zenscript
import crafttweaker.api.recipe.type.Recipe;
import crafttweaker.api.world.Container;

for recipe in (craftingTable.getRecipesByOutput(<item:minecraft:stick>) as stdlib.List<Recipe<Container>>) {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=getAllRecipes}

This method gets a list of all the recipes for the Recipe Manager and returns a list of [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getAllRecipes();
```

You could use this method to get the `ingredients` of all the recipes and print the `commandString` of each ingredient of each recipe.

```zenscript
import crafttweaker.api.recipe.type.Recipe;
import crafttweaker.api.world.Container;

for recipe in (furnace.getAllRecipes() as stdlib.List<Recipe<Container>>) {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=remove}

This method allows you to remove recipes from this Recipe Manager by the recipe's output item.

```zenscript
remove(IItemStack output);
```

An example use case for this method is removing the recipe for Sticks from the Crafting Table:

```zenscript
craftingTable.remove(<item:minecraft:stick>);
```

Another example of this method would be removing the Diamond Ore to Diamond recipe from the furnace:

```zenscript
furnace.remove(<item:minecraft:diamond>);
```
:::

:::group{name=removeByName}

This method allows you to remove recipes from this Recipe Manager by the recipe's name.

```zenscript
removeByName(String name);
```

An example use case for this method is removing the recipe for an Arrow from the Crafting Table:

```zenscript
craftingTable.removeByName("minecraft:arrow");
```
:::

:::group{name=removeByModid}

This method allows you to remove recipes from this Recipe Manager based on the the recipe name's modid.  
There is an optional parameter that is used to exclude recipes from being removed.   
Note: The name given to the RecipeFilter is just the path of the recipe id.  
For example, if the recipe id is `minecraft:orange_wool`, the name given will be `orange_wool`. Another example would be the recipe id `modid:path/name`, the name given will be `path/name`

```zenscript
removeByModid(String modid);

or

removeByModid(String modid, RecipeFilter exclude);
```

An example use case for this method is removing all the recipe from "minecraft" from the Crafting Table:

```zenscript
craftingTable.removeByModid("minecraft");
```

Another use case would be removing all the recipes from "minecraft" excluding the recipe for Orange Wool.

```zenscript
craftingTable.removeByModid("minecraft", (name as string) => {
    return name == "orange_wool";
});
```
:::

:::group{name=removeByRegex}

This method allows you to remove recipes from this Recipe Manager by testing the recipe's id against a regex pattern.

```zenscript
removeByRegex(String regex);
```

An example use case for this method is removing all recipes who's id matches `.*wool.*` (anything that has the work `wool` in it).

```zenscript
craftingTable.removeByRegex(".*wool.*");
```
:::

:::group{name=removeAll}

This method allows you to remove all the recipes from the Recipe Manager.

```zenscript
removeAll(String regex);
```

An example use case for this method is removing all the Blast Furnace recipes.

```zenscript
blastFurnace.removeAll();
```
:::
