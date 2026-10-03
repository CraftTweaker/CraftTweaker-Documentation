# Buildcraft

**Known Bug**: Buildcraft support is borked. removeAll() doesnt work, removeDistilling() doesnt work, and the game crashes if you try to add a fluid thats already added, even if you have said to remove it using either of the previous two methods. Buildcraft Heat Exchanger recipes

All energy-costs are in MJ

### Assembly Table

```
import moretweaker.buildcraft.AssemblyTable;

AssemblyTable.add(IItemStack output, long energyCost, IIngredient[] inputs);

AssemblyTable.remove(IIngredient output);

AssemblyTable.removeAll();
```

### Integration Table

The catalyst is the stack in the middle. Recipes are removed by catalyst, **not** by output.

```
import moretweaker.buildcraft.IntegrationTable;

IntegrationTable.add(IItemStack output, long energyCost, IIngredient catalyst, IIngredient[] inputs);

IntegrationTable.remove(IIngredient catalyst);

IntegrationTable.removeAll();
```

### Refinery

```
import moretweaker.buildcraft.Refinery;

Refinery.addDistilling(ILiquidStack input, ILiquidStack output, ILiquidStack gasOutput, int energy);

Refinery.removeDistilling(ILiquidStack input);

Refinery.removeAll();
```