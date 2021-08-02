# Recipe Managers

配方管理器是使用原版数据包JSON系统的制作系统（如工作台、熔炉或营火）。  
大多数配方管理器都有相同的**移除**方法，但添加配方的方法不同。

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
| Recipe Manager | Bracket Handler                                 | Global Variable |
| -------------- | ----------------------------------------------- | --------------- |
| 高炉             | `<recipetype:minecraft:blasting>`         | `blastFurnace`  |
| 营火             | `<recipetype:minecraft:campfire_cooking>` | `campfire`      |
| 工作台合成          | `<recipetype:minecraft:crafting>`         | `craftingTable` |
| 熔炉             | `<recipetype:minecraft:smelting>`         | `furnace`       |
| 锻造台            | `<recipetype:minecraft:smithing>`         | `smithing`      |
| 烟熏炉            | `<recipetype:minecraft:smoking>`          | `smoker`        |
| 切石机            | `<recipetype:minecraft:stonecutting>`     | `stoneCutter`   |

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

## 方法

:::group{name=getRecipeByName}

This method gets a recipe by it's name, and returns a [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe).

```zenscript
getRecipeByName(String name);
```

You could use this method to get the `ingredients` of a recipe and print the `commandString` of each ingredient.

```zenscript
for ingredient in craftingTable.getRecipeByName("minecraft:arrow").ingredients {
    println(ingredient.commandString);
}
```
:::

:::group{name=getRecipesByOutput}

This method gets a list of recipes based on their outputs, and returns a list of [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe).

```zenscript
getRecipesByOutput(IIngredient name);
```

You could use this method to get the `ingredients` of all the recipes that output a certain item and print the `commandString` of each ingredient of each recipe.

```zenscript
for recipe in craftingTable.getRecipesByOutput(<item:minecraft:stick>) {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=getAllRecipes}

This method gets a list of all the recipes for the Recipe Manager and returns a list of [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe).

```zenscript
getAllRecipes();
```

You could use this method to get the `ingredients` of all the recipes and print the `commandString` of each ingredient of each recipe.

```zenscript
for recipe in furnace.getAllRecipes() {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=removeRecipe}

This method allows you to remove recipes from this Recipe Manager by the recipe's output item.

```zenscript
removeRecipe(IItemStack output);
#根据输出物品删除配方
```

An example use case for this method is removing the recipe for Sticks from the Crafting Table:

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

Another example of this method would be removing the Diamond Ore to Diamond recipe from the furnace:

```zenscript
furnace.removeRecipe(<item:minecraft:diamond>);
```
:::

:::group{name=removeByName}

This method allows you to remove recipes from this Recipe Manager by the recipe's name.

```zenscript
removeByName(String name);
#根据配方名称删除配方
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
For example, if the recipe id is `minecraft:orage_wool`, the name given will be `orange_wool`. Another example would be the recipe id `modid:path/name`, the name given will be `path/name`

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
removeByName(String name);
#根据配方名称删除配方(为啥会有重复的)
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
