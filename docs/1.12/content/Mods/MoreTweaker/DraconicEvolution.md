# Draconic Evolution

### Fusion Crafting

The catalyst is the stack in the center before the recipe starts.


```
import moretweaker.draconicevolution.FusionCrafting;

FusionCrafting.add(IItemStack output, IItemStack catalyst, int tier, long energyCost, IIngredient[] ingredients);

FusionCrafting.remove(IIngredient catalyst);

FusionCrafting.removeAll();
```

##### Fields

The `int` values for the parameter `tier` are stored in
fields of the `FusionCrafting` class:

```
import moretweaker.draconicevolution.FusionCrafting;

FusionCrafting.BASIC;
FusionCrafting.WYVERN;
FusionCrafting.DRACONIC;
FusionCrafting.CHAOTIC;
```

##### Example

```
import moretweaker.draconicevolution.FusionCrafting;

FusionCrafting.add(<minecraft:diamond>, <minecraft:coal>, FusionCrafting.WYVERN, 100000, [<minecraft:stone>, <minecraft:stone>]]);
```