
# Osmium Compressor
Addition
------
```java
mod.mekanism.compressor.addRecipe(IItemStack inputStack, @Optional IGasStack inputGas, IItemStack outputStack)

mod.mekanism.compressor.addRecipe(<mekanism:basicBlock:3>, <gas:liquidOsmium>, <minecraft:stone>);
mod.mekanism.compressor.addRecipe(<mekanism:basicBlock:1>, <minecraft:netherrack>);
```

Removal
------
```java
mod.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas)

mod.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherDust:5>, <gas:liquidOsmium>);
mod.mekanism.compressor.removeRecipe(<minecraft:iron_block>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
