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
Sieve.addStringMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Flint Mesh

```zenscript
Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Iron Mesh

```zenscript
Sieve.addIronMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Diamond Mesh

```zenscript
Sieve.addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Removal

```zenscript
Sieve.removeAll();
```
