# Voidic Blast Furnace

The Voidic Blast-Furnace may have custom recipes added but you will not be able to put any items different from iron dust and coal dust into its input slots.

## Package
`moretweaker.voidcraft.VoidFurnace`

## Addition

```zenscript
//moretweaker.voidcraft.VoidFurnace.add(IItemStack output, IIngredient input1, IIngredient input2, optional int voidicPower);
moretweaker.voidcraft.VoidFurnace.add(<minecraft:diamond>, <ore:dustIron>, <ore:dustCoal>, 30);
```

## Removal

```zenscript
//moretweaker.voidcraft.VoidFurnace.remove(IIngredient output);
moretweaker.voidcraft.VoidFurnace.remove(<minecraft:diamond>);

moretweaker.voidcraft.VoidFurnace.removeAll();
```