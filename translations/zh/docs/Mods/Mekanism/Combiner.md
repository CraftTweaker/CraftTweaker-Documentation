# Combiner

## Addition

```java
mods.mekanism.combiner.addRecipe(IItemStack itemInput, @Optional IGasStack gasInput, IItemStack itemOutput)

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <gas:liquidStone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

## Removal

```java
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas)

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <gas:liquidStone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.