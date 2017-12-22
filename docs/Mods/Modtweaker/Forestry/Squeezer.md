# Squeezer

ModTweaker allows you to add or remove forestry Squeezer Recipes

## Calling
You can call the  package using `mods.forestry.Squeezer`

## Recipe Removal

Beware, you cannot remove the recipes that fill or drain fluid containers, such as forestry cans!

```JAVA
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquid, @Optional IIngredient[] ingredients);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```


## Recipe Addition

```JAVA
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] ingredients, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods.forestry.Squeezer.addRecipe(<liquid:lava>, <minecraft:redstone>, 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, <minecraft:obsidian>, 120, <minecraft:redstone> % 20);
```

| Parameter           | Type                                                  | description                                   |
|---------------------|-------------------------------------------------------|-----------------------------------------------|
| fluidOutput         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)         | The Recipe's output                           |
| ingredients         | [IItemStack](/Vanilla/Items/IItemStack)[]             | The Recipe's item input(s)                    |
| timePerItem         | int                                                   | Amount of inputFluid on organic item requires |
| itemOutput          | [WeightedItemStack](/Vanilla/Items/WeightedItemStack) | Output multiplier                             |