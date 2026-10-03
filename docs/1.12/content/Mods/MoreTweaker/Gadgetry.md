# Gadgetry

### Alloy Furnace

```
import moretweaker.gadgetry.AlloyFurnace;

AlloyFurnace.add(IItemStack output, IIngredient[] inputs);

AlloyFurnace.remove(IIngredient output);

AlloyFurnace.removeAll();
```

### Combustion Generator

```
import moretweaker.gadgetry.CombustionGenerator;

CombustionGenerator.add(ILiquidStack liquid, int energyPerMb);

CombustionGenerator.remove(ILiquidStack liquid);

CombustionGenerator.removeAll();
```

### Distillery

```
import moretweaker.gadgetry.Distillery;

Distillery.add(IItemStack output, ILiquidStack fluidOutput, IIngredient input, ILiquidStack fluidInput);

Distillery.remove(IIngredient output);

Distillery.removeAll();
```

### Grinder

```
import moretweaker.gadgetry.Grinder;

Grinder.add(IItemStack output, IIngredient input);

Grinder.remove(IIngredient output);

Grinder.removeAll();
```