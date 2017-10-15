
# Chemical Oxidizer
Addition
------
```java
mod.mekanism.chemical.oxidizer.addRecipe(IItemStack inputStack, IGasStack outputGas)

mod.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

Removal
------
```java
mod.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack)

mod.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mod.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
