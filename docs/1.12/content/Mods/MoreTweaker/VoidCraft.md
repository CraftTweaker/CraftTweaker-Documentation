# VoidCraft

Author note: This mod doesn't seem to exist anymore, but MoreTweaker didn't delete their integration for it

### Voidic Macerator

```
import moretweaker.voidcraft.VoidMacerator;

VoidMacerator.add(IItemStack output, IIngredient input, optional int voidicPower);

VoidMacerator.remove(IIngredient output);

VoidMacerator.removeAll();
```

### Voidic Blast-Furnace

The Voidic Blast-Furnace may have custom recipes added but you will not be able to put any items different from iron dust and coal dust into its slots.

```
import moretweaker.voidcraft.VoidFurnace;

VoidFurnace.add(IItemStack output, IIngredient input1, IIngredient input2, optional int voidicPower);

VoidFurnace.remove(IIngredient output);

VoidFurnace.removeAll();
```

### Voidic Alchemy-Table

The array in the `add` method must have a length of 6.

```
import moretweaker.voidcraft.VoidAlchemy;

VoidAlchemy.add(IItemStack output, IIngredient[] inputs, optional int voidicPower);

VoidAlchemy.remove(IIngredient output);

VoidAlchemy.removeAll();
```

### Void-Infuser

```
import moretweaker.voidcraft.VoidInfusion;

VoidInfusion.add(IItemStack output, IIngredient input, int voidicFluid);

VoidInfusion.remove(IIngredient output);

VoidInfusion.removeAll();
```