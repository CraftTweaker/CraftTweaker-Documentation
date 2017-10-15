
# Chemical Washer
Addition
------
```java
mod.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas)

mod.mekanism.chemical.washer.addRecipe(<gas:steam>, <gas:water>);
```

Removal
------
```java
mod.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas)

mod.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mod.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
