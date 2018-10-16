# Electrolytic Separator

## Addition

```java
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2)

mods.mekanism.separator.addRecipe(<liquid:fusionfueldt>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Removal

```java
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2)

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:fusionfueldt>);
```

Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.