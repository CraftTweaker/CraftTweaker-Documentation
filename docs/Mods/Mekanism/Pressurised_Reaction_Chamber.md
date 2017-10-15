
# Pressurised Reaction Chamber
Addition
------
```java
mod.mekanism.reaction.addRecipe(IItemStack itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, double energy, int duration)

mod.mekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:ethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Removal
------
```java
mod.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput)

mod.mekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:bioFuel>, <liquid:water>, <gas:hydrogen>);
mod.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
