# Railcraft

### Blast Furnace

```
import moretweaker.railcraft.BlastFurnace;

BlastFurnace.add(IItemStack output, IIngredient input, optional int ticks, optional int slag);

BlastFurnace.remove(IIngredient output);

BlastFurnace.removeAll();
```

### Coke Oven

```
import moretweaker.railcraft.CokeOven;

CokeOven.add(IItemStack output, IIngredient input, ILiquidStack liquidOutput, optional int ticks);

CokeOven.remove(IIngredient output);

CokeOven.removeAll();
```

### Rock Crusher

```
import moretweaker.railcraft.RockCrusher;

RockCrusher.add(IIngredient input, IItemStack[] outputs, float[] chances, optional int ticks);

RockCrusher.remove(IIngredient output);

RockCrusher.removeAll();
```

### Rolling Machine

```
import moretweaker.railcraft.RollingMachine;

RollingMachine.addShaped(IItemStack output, IIngredient[][] inputs, optional int ticks);

RollingMachine.addShapeless(IItemStack output, IIngredient[] inputs, optional int ticks);

RollingMachine.remove(IIngredient output);

RollingMachine.removeAll();
```

### Fluid Fuels

```
import moretweaker.railcraft.FluidFuels;

FluidFuels.add(ILiquidStack fuel, optional int heatPerBucket);

FluidFuels.remove(ILiquidStack fuel);

FluidFuels.removeAll();
```