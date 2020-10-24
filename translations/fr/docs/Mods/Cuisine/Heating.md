# Basin Heating

## Addition

```zenscript
import mods.cuisine.BasinHeating;

BasinHeating.add(ILiquidStack input, IItemStack output); // Use 1 as heat value
BasinHeating.add(ILiquidStack input, IItemStack output, int heatValue);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## Removal

```zenscript
import mods.cuisine.BasinHeating;

// Remove by input.
BasinHeating.remove(ILiquidStack input);

BasinHeating.remove(<liquid:lava> * 1000);

// Remove by identifier.
BasinHeating.remove(String id);

BasinHeating.remove("recipe_name");

// Remove everything!
BasinHeating.removeAll();
```