
# Solar Neutron Activator 
Addition
------
```java
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput)

mods.mekanism.solarneutronactivator.addRecipe(<gas:liquidOsmium>, <gas:liquidStone>);
```

Removal
------
```java
mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput)

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.
