
# Chemical Infuser
Addition
------
```java
mod.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas)

mod.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:steam>);
```

Removal
------
```java
mod.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2)

mod.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mod.mekanism.chemical.infuser.removeRecipe(<gas:deuterium>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
