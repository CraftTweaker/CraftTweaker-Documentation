# Sieving

## Package

`mods.exnihilocreatio.Sieve`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) block** The block that drops the output.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The item that drops from the block..
- **Float chance** The chance should be between 0-1.

## String Mesh

```zenscript
addStringMeshRecipe(IIngredient, IItemStack, Float chance);
addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Flint Mesh

```zenscript
addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Iron Mesh

```zenscript
addIronMeshRecipe(IIngredient, IItemStack, Float chance);
addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Diamond Mesh

```zenscript
addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Removal 

```zenscript
mods.exnihilocreation.Sieve.removeAll();
```