# Kreuzritter

## Paket

`mods.actuallyadditions.Crusher`

## Addition

```zenscript
//mods.actuallyadditions.Crusher.addRecipe(IItemStack Output, IItemStack Input, @Optional IItemStack outputSecondary, @Optional int outputSecondaryChance);
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ingot>, <minecraft:iron_ore>, <minecraft:stone>, 50);
```

## Entfernen

```zenscript
//mods.actuallyadditions.Crusher.removeRecipe(IItemStack output);
mods.actuallyadditions.Crusher.removeRecipe(<minecraft:gold_ore>);
```