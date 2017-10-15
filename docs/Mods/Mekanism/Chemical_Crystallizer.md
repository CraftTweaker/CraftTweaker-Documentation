
# Chemical Crystallizer
Addition
------
```java
mod.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack)

mod.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

Removal
------
```java
mod.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas)

mod.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherDust:4>, <gas:lithium>);
mod.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherDust:1>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
