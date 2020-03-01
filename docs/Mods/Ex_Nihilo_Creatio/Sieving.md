# Sieving

## Package

`mods.exnihilocreatio.Sieve`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) block** The block that drops the output.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The item that drops from the block..
- **Float chance** The chance should be between 0-1.

## String Mesh

```zenscript
mods.exnihilocreation.Sieve.addStringMeshRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreation.Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Flint Mesh

```zenscript
mods.exnihilocreation.Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreation.Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Iron Mesh

```zenscript
mods.exnihilocreation.Sieve.addIronMeshRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreation.Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Diamond Mesh

```zenscript
mods.exnihilocreation.Sieve.addDiamondMeshRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreation.Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Removal 

```zenscript
mods.exnihilocreation.Sieve.removeAll();
```