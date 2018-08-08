# Robotic Assembly System

The Robotic Assembly System is a multiblock consisting of the Assembly Controller, Assembly I/O Units, Assembly Platform, Assembly Laser and Assembly Drill.  It converts input items to output items using the laser and/or drill.

There are several functions for adding and removing recipes, depending on whether the recipe requires use of the laser, the drill, or both.

## Calling

You can call the Assembly package using `mods.pneumaticcraft.assembly`.

## Removing

These functions remove the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

These functions remove *all* recipes currently defined for the Assembly System:

```java
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## Adding

These functions are used to add new recipes for the assembly system:

```java
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```

