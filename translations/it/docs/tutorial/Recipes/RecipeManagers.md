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
| Recipe Manager   | Bracket Handler                                 | Global Variable |
| ---------------- | ----------------------------------------------- | --------------- |
| Blasting         | `<recipetype:minecraft:blasting>`         | `blastFurnace`  |
| Campfire Cooking | `<recipetype:minecraft:campfire_cooking>` | `campfire`      |
| Crafting         | `<recipetype:minecraft:crafting>`         | `craftingTable` |
| Smelting         | `<recipetype:minecraft:smelting>`         | `furnace`       |
| Smithing         | `<recipetype:minecraft:smithing>`         | `smithing`      |
| Smoking          | `<recipetype:minecraft:smoking>`          | `smoker`        |
| Stone Cutting    | `<recipetype:minecraft:stonecutting>`     | `stoneCutter`   |

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


### removeRecipe

```zenscript
removeRecipe(IItemStack output);
```

This method allows you to remove recipes from this Recipe Manager by the recipe's output item.

An example use case for this method is removing the recipe for Sticks from the Crafting Table:

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

Another example of this method would be removing the Diamond Ore to Diamond recipe from the furnace:

```zenscript
furnace.removeRecipe(<item:minecraft:diamond>);
```


<br/>
<br/>

***More Docs To Be Added Soon***