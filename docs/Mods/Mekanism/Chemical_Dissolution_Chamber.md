
# Chemical Dissolution Chamber
Addition
------
```java
mod.mekanism.chemical.dissolution.addRecipe(IItemStack inputStack, IGasStack outputGas)

mod.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Removal
------
```java
mod.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack)

mod.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreBlock>);
mod.mekanism.chemical.dissolution.removeRecipe(<gas:water>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

