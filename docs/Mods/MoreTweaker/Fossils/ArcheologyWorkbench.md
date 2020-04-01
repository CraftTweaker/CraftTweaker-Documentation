# Archeology Workbench

## Package
`moretweaker.fossil.ArcheologyWorkbench`

## Addition

```zenscript
//moretweaker.fossil.ArcheologyWorkbench.addRecipe(IIngredient input, IItemStack output, optional IIngredient fuel);
moretweaker.fossil.ArcheologyWorkbench.addRecipe(<minecraft:iron_ingot>, <minecraft:diamond>);
```

## Removal

```zenscript
//moretweaker.fossil.ArcheologyWorkbench.removeRecipe(IIngredient output);
moretweaker.fossil.ArcheologyWorkbench.removeRecipe(<minecraft:diamond>);

moretweaker.fossil.ArcheologyWorkbench.removeAll();
```