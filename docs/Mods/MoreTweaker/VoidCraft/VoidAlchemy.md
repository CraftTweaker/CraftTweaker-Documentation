# Voidic Alchemy Table

## Package
`moretweaker.voidcraft.VoidAlchemy`

## Addition

```zenscript
//moretweaker.voidcraft.VoidAlchemy.add(IItemStack output, IIngredient[] inputs, optional int voidicPower);
//The inputs array must have a length of 6.
moretweaker.voidcraft.VoidAlchemy.add(<minecraft:diamond>, [<minecraft:coal>, <minecraft:dirt>, <minecraft:coal>, <minecraft:dirt>, <minecraft:coal>, <minecraft:dirt>]);
```

## Removal

```zenscript
//moretweaker.voidcraft.VoidAlchemy.remove(IIngredient output);
moretweaker.voidcraft.VoidAlchemy.remove(<minecraft:diamond>);

moretweaker.voidcraft.VoidAlchemy.removeAll();
```