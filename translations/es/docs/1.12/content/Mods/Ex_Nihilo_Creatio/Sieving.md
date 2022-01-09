# Sieving

## Package

To access `Sieve` without clarifying the full path, you can import the package at the top of your Script with the following:

```zenscript
import mods.exnihilocreatio.Sieve;
```

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) block** The block that drops the output.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The item that drops from the block..
- **Float chance** The chance should be between 0-1.

## String Mesh

```zenscript
addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Flint Mesh

```zenscript
addIronMeshRecipe(IIngredient, IItemStack, Float chance);
addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Iron Mesh

```zenscript
addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Diamond Mesh

```zenscript
mods.exnihilocreatio.Sieve.removeAll();
```

## Removal

```zenscript
Sieve.removeAll();
```
