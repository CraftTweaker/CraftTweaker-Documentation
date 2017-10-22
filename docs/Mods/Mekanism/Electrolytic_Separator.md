
# Electrolytic Separator
Addition
------
```java
mod.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2)

mod.mekanism.separator.addRecipe(<liquid:fusionfueldt>, 5000, <gas:deuterium>, <gas:tritium>);
```

Removal
------
```java
mod.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2)

mod.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mod.mekanism.separator.removeRecipe(<liquid:fusionfueldt>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
