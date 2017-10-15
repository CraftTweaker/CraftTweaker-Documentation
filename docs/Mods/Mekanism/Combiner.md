
# Combiner
Addition
------
```java
mod.mekanism.combiner.addRecipe(IItemStack itemInput, @Optional IGasStack gasInput, IItemStack itemOutput)

mod.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <gas:liquidStone>, <minecraft:stonebrick>);
mod.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Removal
------
```java
mod.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas)

mod.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <gas:liquidStone>);
mod.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
