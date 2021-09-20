# Dawnstone Anvil

## Importing the Package
```zenscript
import mods.embers.DawnstoneAnvil;
```

## Adding Recipes
**Note: A bin placed below the dawnstone anvil will only collect one output.**
```zenscript
mods.embers.DawnstoneAnvil.add(IItemStack[] outputs, IIngredient inputTop, IIngredient inputBottom);
```

## Removing Recipes
```zenscript
mods.embers.DawnstoneAnvil.remove(IIngredient inputTop, IIngredient inputBottom);
```

## Blacklisting Repair
```zenscript
mods.embers.DawnstoneAnvil.blacklistRepair(IIngredient input);
mods.embers.DawnstoneAnvil.blacklistMateriaRepair(IIngredient input);
```

## Blacklisting Breakdown
```zenscript
mods.embers.DawnstoneAnvil.blacklistBreakdown(IIngredient input);
```