
# Energized Smelter
Addition
------
```java
mod.mekanism.smelter.addRecipe(IItemStack inputStack, IItemStack outputStack)

mod.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Removal
------
```java
mod.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack)

mod.mekanism.smelter.removeRecipe(<minecraft:sand>, <minecraft:glass>);
mod.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
