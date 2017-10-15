
# Solar Neutron Activator 
Addition
------
```java
mod.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput)

mod.mekanism.solarneutronactivator.addRecipe(<gas:liquidOsmium>, <gas:liquidStone>);
```

Removal
------
```java
mod.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput)

mod.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mod.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
