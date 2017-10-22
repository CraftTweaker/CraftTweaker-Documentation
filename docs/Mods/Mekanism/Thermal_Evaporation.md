
# Thermal Evaporation
Addition
------
```java
mod.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput)

mod.mekanism.thermalevaporation.addRecipe(<liquid:fusionfueldt>, <liquid:lava>);
```

Removal
------
```java
mod.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput)

mod.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mod.mekanism.thermalevaporation.removeRecipe(<liquid:lithium>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
