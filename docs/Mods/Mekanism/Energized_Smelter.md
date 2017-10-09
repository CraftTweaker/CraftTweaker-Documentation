
# Energized Smelter
Addition
------
```java
mods.mekanism.smelter.addRecipe(IItemStack inputStack, IItemStack outputStack)

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Removal
------
```java
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack)

mods.mekanism.smelter.removeRecipe(<minecraft:sand>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
