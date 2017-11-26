# Brewing Recipe Handler

## Access the Brewing Handler
You can access the Brewing Handler using the `brewing` [global keyword](/Vanilla/Global_Functions).

## Recipe Methods

A Brewing Recipe consists of 3 Parts:

1. An Input (What is in the 3 "Bottle Slots")
2. One or more possible Ingredients (What can go into the upper slot where netherwart goes)
3. The output (What the recipe returns)

### Add Brewing Recipes

```
//brewing.addBrew(IIngredient input, IIngredient ingredient, IItemStack output, @Optional boolean hidden);
brewing.addBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing.addBrew(IIngredient input, IIngredient[] ingredients, IItemStack output, @Optional boolean hidden);
brewing.addBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```


### Remove Brewing Recipes

Still doesn't work with JEI!!

```
//brewing.removeRecipe(IItemStack input, IItemStack ingredient);
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```