# Broyeur

## Paquet

`Concasseur`

## Ajouter

```zenscript
//mods.actuallyadditions.Crusher.addRecipe(sortie IItemStack, entrée IItemStack, @Optional IItemStack outputSecondary, @Optional int outputSecondaryChance);
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ingot>, <minecraft:iron_ore>, <minecraft:stone>, 50);
```

## Retirer

```zenscript
//mods.actuallyadditions.Crusher.removeRecipe(IItemStack output);
mods.actuallyadditions.Crusher.removeRecipe(<minecraft:gold_ore>);
```