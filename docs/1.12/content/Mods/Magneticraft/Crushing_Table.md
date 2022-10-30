# Crushing Table

## Importing the Package
```zenscript
import mods.magneticraft.CrushingTable;
```

## Adding Recipes
```zenscript
//mods.magneticraft.CrushingTable.addRecipe(IIngredient input, IItemStack output);
mods.magneticraft.CrushingTable.addRecipe(<minecraft:iron_ore>, <minecraft:iron_ingot> * 9);
```

## Removing Recipes
```zenscript
//mods.magneticraft.CrushingTable.removeRecipe(IItemStack input);
mods.magneticraft.CrushingTable.removeRecipe(<minecraft:iron_ore>);
```

## Adding Hammers
```zenscript
//mods.magneticraft.CrushingTable.addHammer(IIngredient hammer, int miningLevel, int speed, int durabilityPerRecipe);
mods.magneticraft.CrushingTable.addHammer(<minecraft:stone_pickaxe>, 1, 8, 1);
```

## Removing Hammers
```zenscript
//mods.magneticraft.CrushingTable.removeHammer(IItemStack hammer);
mods.magneticraft.CrushingTable.removeHammer(<magneticraft:stone_hammer>);
```
