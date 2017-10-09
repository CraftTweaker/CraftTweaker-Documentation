
# Thermal Evaporation
Addition
------
```java
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput)

mods.mekanism.thermalevaporation.addRecipe(<liquid:fusionfueldt>, <liquid:lava>);
```

Removal
------
```java
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput)

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:lithium>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
