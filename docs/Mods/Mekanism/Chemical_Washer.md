
# Chemical Washer
Addition
------
```java
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas)

mods.mekanism.chemical.washer.addRecipe(<gas:steam>, <gas:water>);
```

Removal
------
```java
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas)

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
